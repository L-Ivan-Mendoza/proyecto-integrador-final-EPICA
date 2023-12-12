import { createContext, useContext, useState } from "react";
import {
    createCommentReq,
    deleteCommentReq,
    getCommentsReq,
    getCommentByIdReq,
    updateCommentReq
} from "../api/commentAxios.js"
import { usePost } from "./PostProvider.jsx";


const CommentContext = createContext()

export const useComment = () => {
    const context = useContext(CommentContext)
    if(!context) throw new Error("Error en el contexto de los commentarios")
    return context
}

export const CommentProvider = ({children}) => {

    const {post} = usePost()

    const [comment, setComment] = useState([])

    // Crear comment
    const createComment = async (comment, postId) => {
        try {
            const res = await createCommentReq(comment, postId)
            return res
        } catch (error) {
            console.error('Error al crear el comentario:', error);
            throw error;
        }
    }

    // Obtener todos los comments
    const getAllComments = async (postId) => {
        //console.log(postId)
        const res = await getCommentsReq(postId)
        try {
            setComment(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    // delete comment
    const deleteComment = async (idPost, idComment) => {
        try {
          const res = await deleteCommentReq(idPost, idComment)
          if (res.status === 200) setComment(comment.filter((comment) => comment._id !== id))
        } catch (error) {
          console.log(error)
        }
      };

    // Buscar comment por id
    const getCommentById = async (id) => {
        try {
        const res = await getCommentByIdReq(id)
        // console.log("res:" , res.data);
        return res.data
        } catch (error) {
        console.log(error)
        }
    };

    // Update comment
    const updateComment = async (comment, idComment, idPost) => {
        try {
        const res = await updateCommentReq(idPost, idComment, comment)
        res.data
        } catch (error) {
        console.log(error)
        }
    };



    return <CommentContext.Provider value={{
        comment,
        createComment,
        getAllComments,
        deleteComment,
        getCommentById,
        updateComment
        }}>

            {children}
        
    </CommentContext.Provider>
}