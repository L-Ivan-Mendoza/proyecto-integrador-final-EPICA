import {body, validationResult} from "express-validator"


// Validate register
export const validateRegister = [
    body("username").notEmpty().withMessage("El usuario no debe estar vacio")
    .isLength({min: 6}).withMessage("El usuario debe contener al menos 6 caracteres"),

    body("email").isEmail().withMessage("Ingrese un email valido")
    .notEmpty().withMessage("El email no debe estar vacio"),

    body("password").notEmpty().withMessage("El campo de contraseña no debe estar vacio")
    //.isLength({min: 8, max: 12}).custom(value => /^[a-zA-Z0-9]+$/.test(value))
    .isLength({min: 8, max: 12})
    .withMessage("La contraseña debe contener entre 8 y 12 caracteres alfanumericos")

]


// Validate login
export const validateLogin = [

    body("email").isEmail().withMessage("Ingrese un email válido")
    .notEmpty().withMessage("El email no debe estar vacio"),

    body("password").notEmpty().withMessage("El campo de contraseña no debe estar vacio")
    //.isLength({min: 8, max: 12}).custom(value => /^[a-zA-Z0-9]+$/.test(value)) // *esto hacia que me de invalid value
    .isLength({min: 8, max: 12})
    .withMessage("La contraseña debe contener entre 8 y 12 caracteres alfanumericos")

]

// Validate Error
export const handleErrorValidations = (req, res, next) => {
    const err = validationResult(req)
    
    // if (!err.isEmpty()){
    //     return res.status(400).json({message: "Error en la validación de atributos", err})
    // }

    // Por algun motivo cuando llega al password error tira invalid value y no hay mas que eso en el array*
    if (!err.isEmpty()){
        return res.status(400).json([err.errors[0].msg])
    }
    next()
}