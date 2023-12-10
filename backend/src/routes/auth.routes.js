// Endpoint from server
import { Router } from "express";
import {register, login, logout, profile, verifyToken} from "../controllers/auth.controller.js"
import { authRequired } from "../middlewares/validateToken.js";
import {validateLogin, validateRegister, handleErrorValidations} from "../middlewares/validateAttribute.js"

const router = Router()

// Routes para registro de usuario
router.post("/register", validateRegister, handleErrorValidations,register)

// Routes para login
router.post("/login", validateLogin, handleErrorValidations, login)

// Routes para log-out
router.post("/logout", logout)

// Verificacion de token frontend
router.get("/verifyToken", verifyToken)

router.get("/profile", authRequired, profile)

export default router