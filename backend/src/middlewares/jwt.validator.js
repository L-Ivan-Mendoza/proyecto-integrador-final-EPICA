import jwt from "jsonwebtoken"
import {settingsDotEnvSecret} from "../config/dotenv.js"

const {secret} = settingsDotEnvSecret()

export const createAccessToken = (payload) => { // payload: primer argugento de la function sing de jwt
    return new Promise((resolve, reject) => {

        jwt.sign(payload, secret, {expiresIn: "10h"}, (err, token) => {
                err ? reject(err) : resolve(token)
            }
        )
    })
}


