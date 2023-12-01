import mongoose from "mongoose"
import { settingsDotEnvDb } from "../config/dotenv.js"

const {db} = settingsDotEnvDb()

export const connectMongo = async () => {
    try {
        await mongoose.connect(db.localhost)
        console.log("Base de datos conectada")
    } catch (error) {
        console.error("Error al conectarse a la bd", error);
    }
}