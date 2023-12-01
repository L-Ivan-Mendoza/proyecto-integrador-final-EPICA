// Authenticate user
import User from "../models/user.model.js";
import bcrypt from "bcrypt"
//import jwt from "jsonwebtoken"
import {createAccessToken} from "../middlewares/jwt.validator.js"

// Register user
export const register = async (req, res) => {
   const {username, email, password, avatarURL} = req.body
   // validar user
   const userFound = await User.findOne({email})
   if(userFound) return res.status(400).json(["El usuario ya existe"])
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
        res.status(500).json({message: "Error al loguear usuario", error})
    }
}

// Log-out
export const logout = async (req, res) => {

    res.cookie("token", "", {expires: new Date(0)})
    return res.status(200).json({message: "Usuario deslogueado"})
}

export const profile = async (req, res) => {
    try {
        const userFound = await User.findById(req.user.id)
        if (!userFound) return res.status(400).json({message: "Usuario no encontrado"})

        res.json({
            message: "Perfil",
            username: userFound.username,
            email: userFound.email
        })
    } catch (error) {
        res.status(500).json({message: "Error de perfil", error})
    }
}