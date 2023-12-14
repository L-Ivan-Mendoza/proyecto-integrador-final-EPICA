import User from "../models/user.model.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { SECRET_TOKEN } from "../config/dotenv.js";
import { createAccessToken } from "../middlewares/jwt.validator.js"

// Register user
export const register = async (req, res) => {
   const {username, email, password, avatarURL} = req.body
   // validar user
   const userFound = await User.findOne({email})
   if(userFound) return res.status(400).json(["El usuario ó email ya esta en uso"])
   try {

    // se encripta password
    const passwordHash = await bcrypt.hash(password, 10)

    const newUser = new User ({
        username,
        email,
        password: passwordHash,
        avatarURL,
    })
    // guardamos el nuevo user para generar el id
    const userSaved = await newUser.save()
    
    // generación de token
    const token = await createAccessToken({id: userSaved._id})
    res.cookie("token", token)
    res.json({
        message: "Usuario registrado con éxito",
        id: userSaved.id,
        username: userSaved.username,
        email: userSaved.email,
    })
   } catch (error) {
    res.status(500).json({message: "Error al registrar usuario", error})
   }
}

// Login
export const login = async (req, res) => {

    const {email, password} = req.body

    try {
       const userFound = await User.findOne({email})
       if (!userFound) return res.status(400).json(["Usuario o contraseña incorrectos"])

       const passMatch = await bcrypt.compare(password, userFound.password)
       if (!passMatch) return res.status(400).json(["Usuario o contraseña incorrectos"])

       // Generación de token para el login
       const token = await createAccessToken({id: userFound._id})
        res.cookie("token", token)
        res.json({
        message: "Usuario logueado con éxito",
        id: userFound.id,
        username: userFound.username,
        email: userFound.email,
    })

    } catch (error) {
        res.status(500).json({message: "Error al loguear usuario", error: error.message})
    }
}

// Log-out
export const logout = (req, res) => {

    res.cookie("token", "", {expires: new Date(0)})
    return res.status(200).json({message: "Usuario deslogueado"})
}

// Profile
export const profile = async (req, res) => {
    try {
        const userFound = await User.findById(req.user.id)
        if (!userFound) return res.status(400).json({message: "Usuario no encontrado"})

        return res.json({
            message: "perfil del usuario: ",
            id: userFound._id,
            username: userFound.username,
            email: userFound.email,
            createdAt: userFound.createdAt,
            updatedAt: userFound.updatedAt,
          });

    } catch (error) {
        res.status(500).json({message: "Error de perfil", error})
    }
}

const { secret } = SECRET_TOKEN();

// verificacion de token backend
export const verifyToken = async (req, res) => {
  const { token } = req.cookies;

  if (!token) return res.status(401).json({ message: "No autorizado" });

  jwt.verify(token, secret, async (err, user) => {
    if (err) return res.status(401).json({ message: "No autorizado" });

    const userFound = await User.findById(user.id);
    if (!userFound) return res.status(401).json({ message: "No autorizado" });

    return res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
      avatarURL: userFound.avatarURL
    });
  });
};