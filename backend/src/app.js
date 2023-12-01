import express from "express"
import morgan from "morgan"
import cors from "cors"
import cookieParser from "cookie-parser"
import { connectMongo } from "./database/db.js"
import authRoutes from "./routes/auth.routes.js"
import postRoutes from "./routes/post.routes.js"
import commentRoutes from "./routes/comment.routes.js"


export const app = express()
connectMongo()

app.use(express.json())
app.use(cors())
app.use(morgan("tiny"))
app.use(cookieParser())

app.use(authRoutes)
app.use(postRoutes)
app.use(commentRoutes)

app.use("/", (req, res) => {
    res.send("Welcome!")
})
