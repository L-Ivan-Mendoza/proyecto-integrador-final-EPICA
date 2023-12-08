import { createContext, useContext, useState } from "react";
import {createPostReq, deletePostReq, getPostByIdReq, getPostsReq, updatePostReq} from "../api/postAxios.js"


const PostContext = createContext()

export const usePost = () => {
    const context = useContext(PostContext)
    if(!context) throw new Error("Error en el contexto de los posteos")
    return context
}

export const PostProvider = ({children}) => {
    const [post, setPost] = useState([])

    // Crear Posteo
    const createPost = async (post) => {
        //console.log(post)
        const res = await createPostReq(post)
    }

    // Obtener todos los posteos
    const getAllPost = async () => {
        const res = await getPostsReq()
        try {
            setPost(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    // delete Post
    const deletePost = async (id) => {
        try {
          const res = await deletePostReq(id)
          if (res.status === 200) setTask(task.filter((task) => task._id !== id))
        } catch (error) {
          console.log(error)
        }
      };

    // Buscar post por id
    const getPostById = async (id) => {
        try {
        const res = await getPostByIdReq(id)
        return res.data
        } catch (error) {
        console.log(error)
        }
    };

    // Update post
    const updatePost = async (id, post) => {
        try {
        const res = await updatePostReq(id, post)
        res.data
        } catch (error) {
        console.log(error)
        }
    };



    return <PostContext.Provider value={{
        post,
        createPost,
        getAllPost,
        deletePost,
        getPostById,
        updatePost
        }}>

            {children}
        
    </PostContext.Provider>
}