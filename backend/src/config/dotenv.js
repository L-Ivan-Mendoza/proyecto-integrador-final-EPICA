import dotenv from "dotenv"

dotenv.config()

export const settingsDotEnvPort = () => {
    return {port: process.env.PORT || 5000} // si no existe el valor de PORT se utiliza por defecto 4000
}

export const settingsDotEnvDb = () => {
    return { db: {
        localhost: process.env.DB_LOCALHOST
        } ,
    }
}

export const settingsDotEnvSecret = () => {
    return {secret: process.env.SECRET_KEY}
}