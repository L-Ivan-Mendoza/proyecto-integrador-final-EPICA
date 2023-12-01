// Endpoint from server
import { Router } from "express";
import {register, login, logout, profile} from "../controllers/auth.controller.js"
import { authRequired } from "../middlewares/validateToken.js";
import {validateLogin, validateRegister, handleErrorValidations} from "../middlewares/validateAttribute.js"

const routes = Router()

// Routes para registro de usuario
routes.post("/register", validateRegister, handleErrorValidations,register)

// Routes para login
routes.post("/login", validateLogin, handleErrorValidations, login)

// Routes para log-out
routes.post("/logout", logout)

// Routes para profile
routes.get("/profile", authRequired, profile)

export default routes