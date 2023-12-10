import Card from 'react-bootstrap/Card'
import {usePost} from '../context/PostProvider'
import { useComment } from '../context/CommentProvider' 
import { Button } from 'react-bootstrap'
import {ChatDots, PencilSquare, Trash3Fill} from "react-bootstrap-icons"
import Comments from "./Comments"
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ModalNewComment from "./ModalNewComment"
import {toast} from "react-toastify"

const PostDetail = ({post}) => {

   ////// Se llama a los comentarios pasandole la id del post
   const id = useParams()
   const { getAllComments, comment } = useComment();
 
   const postId = id.id

  console.log(postId);

   useEffect( () => {
     // console.log(postId)
     getAllComments(postId)
   }, [])

    ////// Incorporacion del modal para crear comments  
    const [showModal, setShowModal] = useState(false)

    const handleShowModal = () => {
        setShowModal(true)
    }

    const handleCloseModal = () => {
        setShowModal(false)
    }

    const addComment = async (newComment, postId) => {
      try{
        const res = await createComment(newComment, postId)
        console.log("res: ", postId);
        return res

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

  return (
      <>
        <div className="container col-6 my-5">
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
            <Button className='me-2 mb-1' variant="dark"><PencilSquare/> Editar</Button>
            <Button className='me-2 mb-1' variant="danger"><Trash3Fill/> Eliminar Posteo</Button>
            <Button className='me-2 mb-1' variant="warning" onClick={handleShowModal}><ChatDots/> Comentar </Button>
        </Card.Body>
        <ModalNewComment showModal={showModal} handleClose={handleCloseModal} addComment={addComment} />
      </Card>
      <div className="row">
        {comment.map((comment, i) => (
          <div className='col-md-6' key={i}>
           <Comments comment={comment}/>
        </div>
          ))}
      </div>
      </div>
    </>
  )
}

export default PostDetail