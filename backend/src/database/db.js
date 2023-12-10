import mongoose from "mongoose"
import { settingDotEnvDB } from "../config/dotenv.js"

const {db} = settingDotEnvDB()

export const connectMongo = async () => {
    try {
        await mongoose.connect(db.localhost)
        console.log("Base de datos conectada")
    } catch (error) {
        console.error("Error al conectarse a la bd", error);
    }
}