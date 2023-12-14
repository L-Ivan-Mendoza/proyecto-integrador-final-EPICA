import { json } from "express"
import Post from "../models/post.model.js"

export const getAllPost = async(req, res) => {
    try {
        // .find({conditions: criterio de busqueda}, {proyections: datos a recuperar}, {options}, {callback: si no se usa await})
        const allpost = await Post.find() //.populate("prop"): ej "user" => pasa todos los datos del user
        res.status(200).json(allpost)
    } catch (error) {
        res.status(400).json({message: "Error al obtener todos los posteos"})
    }
} 

export const getPostById = async(req, res) => {
    const {id} = req.params

    try {
       const postFound = await Post.findById(id)

        if (!postFound) return res.status(404).json({message: "Posteo no encontrado"})

        res.status(200).json(postFound)
    } catch (error) {
        res.status(400).json({message: "Error al obtener el posteo por id"})
    }
}

export const createPost = async(req, res) => {
    const {title, description, imgURL} = req.body
    try {
        //console.log("REQ: ", req.user);
        const newPost = new Post({
            title,
            description,
            imgURL,
            autor: req.user.id, // viene de la authRequired (next)
            // autorName: req.user.username // el usuario solamente viene con id de authRequired
        })

        const postSaved = await newPost.save()
        res.status(200).json(postSaved)

    } catch (error) {
        res.status(400).json({message: "Error al crear posteo"})
    }
}

export const updatePost = async(req, res) => {
    try {
        const postUpdate = await Post.findByIdAndUpdate(req.params.id, req.body, {new: true})

        if(!postUpdate) return res.status(404).json({message: "Posteo no encontrado"})

        res.status(200).json(postUpdate)
    } catch (error) {
                res.status(400).json({message: "Error al editar posteo"})
    }
}

export const deletePost = async(req, res) => {
    try {
        const deletePost = await Post.findByIdAndDelete(req.params.id)

        if (!deletePost) return res.status(404).json({message: "Posteo no encontrado"})
        res.status(200).json({message: "Posteo eliminado con éxito"})
    } catch (error) {
        res.status(400).json({message: "Error al eliminar posteo", error})
    }
}