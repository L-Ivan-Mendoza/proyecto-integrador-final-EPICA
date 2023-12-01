import {Router} from "express"
import { authRequired } from "../middlewares/validateToken.js"
import { createComment, deleteComment, getAllComments, getCommentById, updateComment } from "../controllers/comment.controller.js"



const routes = Router()

routes.get("/post/:id/comment", getAllComments)
routes.get("/post/:id/comment/:id", authRequired, getCommentById)
routes.post("/post/:id/comment", authRequired, createComment)
routes.put("/post/:id/comment/:id", authRequired, updateComment)
routes.delete("/post/:id/comment/:id", authRequired, deleteComment)

export default routes