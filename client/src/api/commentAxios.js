import axios from "./setCredentialsAxios.js";

export const getCommentsReq = (postId) => axios.get(`/post/${postId}/comment`)

export const getCommentByIdReq = (postId, commentId) => axios.get(`/post/${postId}/comment/${commentId}`)

export const createCommentReq = (comment, postId) => axios.post(`/post/${postId}/comment`, {description: comment, postId})

export const updateCommentReq = (comment, commentId, postId) => axios.put(`/post/${postId}/comment/${commentId}`, {description: comment, _id: comment, postId})

export const deleteCommentReq = (postId, commentId) => axios.delete(`/post/${postId}/comment/${commentId}`)