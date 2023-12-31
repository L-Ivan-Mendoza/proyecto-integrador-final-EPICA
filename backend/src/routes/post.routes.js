import {Router} from "express"
import { createPost, deletePost, getAllPost, getPostById, updatePost } from "../controllers/post.controller.js"
import { authRequired } from "../middlewares/validateToken.js"



const routes = Router()

routes.get("/post", getAllPost)
routes.get("/post/:id", authRequired, getPostById)
routes.post("/post", authRequired, createPost)
routes.put("/post/:id", authRequired, updatePost)
routes.delete("/post/:id", authRequired, deletePost)

export default routes