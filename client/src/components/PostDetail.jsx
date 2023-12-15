import Card from 'react-bootstrap/Card'
import {usePost} from '../context/PostProvider'
import { useComment } from '../context/CommentProvider' 
import { Button } from 'react-bootstrap'
import {ChatDots, PencilSquare, Trash3Fill} from "react-bootstrap-icons"
import Comments from "./Comments"
import { useEffect, useState } from 'react'
import ModalNewComment from "./ModalNewComment"
import {toast} from "react-toastify"
import { useNavigate } from "react-router-dom"
import EditPost from './EditPost'
import { useAuth } from '../context/AuthContext'

const PostDetail = ({post}) => {

    const navigate = useNavigate()

    const {deletePost, updatePost} = usePost()

   const { getAllComments, comment } = useComment()

   const {tokenData} = useAuth()

   const idPost = post._id
   const autorPost = post.autor
   const autor = tokenData.id
   const username = post.autor
  
console.log(username);
   useEffect( () => {
     getAllComments(idPost)
   }, [])

    ////// Incorporacion del modal para crear comments  
    const [showModal, setShowModal] = useState(false)

    const handleShowModal = () => {
        setShowModal(true)
    }

    const handleCloseModal = () => {
        setShowModal(false)
    }

    const [showModal2, setShowModal2] = useState(false)

    const handleShowModal2 = () => {
        setShowModal2(true)
    }

    const handleCloseModal2 = () => {
        setShowModal2(false)
    }

    const addComment = async (newComment, idPost) => {
      try{
        const res = await createComment(newComment, idPost)

        toast.success('¡Comentario publicado!', {
            position: toast.POSITION.BOTTOM_RIGHT,
            autoClose: 2000,
        })
        } catch (error) {
        toast.error('Error al publicar el comentario', {
            position: toast.POSITION.BOTTOM_RIGHT,
            autoClose: 2000,        
        })
        console.error('Error al crear el comentario', error);
        
        }         
    }


  // Convierte la fecha a un objeto Date
  const createdAtDate = new Date(post.createdAt)

  // Fechas en partes
  const day = createdAtDate.getDate()
  const month = createdAtDate.getMonth() + 1 // Los meses comienzan desde 0
  const year = createdAtDate.getFullYear()

  const formattedDatePost = `${day}/${month}/${year}`
  const formattedDateUpdate = `${day}/${month}/${year}`

  
  /// funcion para eliminar post e ir a /profile
  const delPost = (idPost) => {
    deletePost(idPost)
    navigate('/profile')
    toast.success('El post se eliminó con éxito', {
      position: toast.POSITION.BOTTOM_RIGHT, autoClose: 2000,
    })
  }

   /// funcion para editar post
   const editPost = async (post, id) => {
    const res = await updatePost(idPost, post)

    toast.success('El post se editó con éxito', {
      position: toast.POSITION.BOTTOM_RIGHT, autoClose: 2000,
    })

  }



  return (
      <>
        <div className="container col-md-6 my-5">
        <Card>
        <Card.Img variant="top" src={post.imgURL} />
        <Card.Body>
        <Card.Title>{post.title}</Card.Title>
          <Card.Text>
          {post.description}
          </Card.Text>
          <Card.Text>
                @{post.autor} - 
                Posteado: {formattedDatePost} - 
                Ultima actualización: {formattedDateUpdate}
            </Card.Text>
            { autor === autorPost ? (
              <>
            <Button className='me-2 mb-1' variant="dark" onClick={handleShowModal2}><PencilSquare/> Editar</Button>
            <Button className='me-2 mb-1' variant="danger" onClick={() => {delPost(idPost)}}><Trash3Fill/> Eliminar Posteo</Button>
              </>
              ): null}
            <Button className='me-2 mb-1' variant="warning" onClick={handleShowModal}><ChatDots/> Comentar </Button>
        </Card.Body>
        <ModalNewComment showModal={showModal} handleClose={handleCloseModal} addComment={addComment} post={post} />
        <EditPost showModal={showModal2} handleClose={handleCloseModal2} editPost={editPost} post={post} />
      <div className="">
        {comment.map((comment, i) => {
          if(comment.from === idPost) {
            return (
              <div className='container-fluid' key={i}>
                <Comments comment={comment} />
              </div>
            )
          }else {
            return null
          }
          })}
      </div>
      </Card>
      </div>
    </>
  )
}

export default PostDetail