import {body, validationResult} from "express-validator"


// Validate register
export const validateRegister = [
    body("username").notEmpty().withMessage("El usuario no debe estar vacio")
    .isLength({min: 6}).withMessage("El usuario debe contener al menos 6 caracteres"),

    body("email").isEmail().withMessage("Ingrese un email valido"),

    body("password").notEmpty().withMessage("El campo de contraseña no debe estar vacio")
    //.isLength({min: 8, max: 12}).custom(value => /^[a-zA-Z0-9]+$/.test(value))
    .isLength({min: 8, max: 12})
    .withMessage("La contraseña debe contener entre 8 y 12 caracteres alfanumericos")

]


// Validate login
export const validateLogin = [

    body("email").isEmail().withMessage("Ingrese un email válido"),

    body("password").notEmpty().withMessage("El campo de contraseña no debe estar vacio")
    //.isLength({min: 8, max: 12}).custom(value => /^[a-zA-Z0-9]+$/.test(value)) // *esto hacia que me de invalid value
    .isLength({min: 8, max: 12})
    .withMessage("La contraseña debe contener entre 8 y 12 caracteres alfanumericos")

]

// Validate Error
export const handleErrorValidations = (req, res, next) => {
    const error = validationResult(req)
    
    // if (!err.isEmpty()){
    //     return res.status(400).json({message: "Error en la validación de atributos", err})
    // }

    if (!error.isEmpty()){
        return res.status(400).json([error.errors[0].msg])
    }
    next()
}