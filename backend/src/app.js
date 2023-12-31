import express from "express"
import {settingDotEnvDB} from "./config/dotenv.js"
import cors from "cors"
import morgan from "morgan"
import { connectMongo } from "./database/db.js"
import authRoutes from "./routes/auth.routes.js"
import postRoutes from "./routes/post.routes.js"
import commentRoutes from "./routes/comment.routes.js"
import cookieParser from "cookie-parser"
import helmet from "helmet"


const app = express()
connectMongo()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}))
app.use(morgan("tiny"))
app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            scriptSrc: ["'self'", 'trusted-scripts.com'],
            styleSrc: ["style.com"],
        },
    },
}))

app.use(authRoutes)
app.use(postRoutes)
app.use(commentRoutes)

const PORT = settingDotEnvDB().port || 5000

app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`))