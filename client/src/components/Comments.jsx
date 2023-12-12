import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Trash3Fill, PencilSquare} from "react-bootstrap-icons"
import { useNavigate, useParams } from 'react-router-dom';
import {useComment} from "../context/CommentProvider"
import EditComment from './EditComment';
import { useState } from 'react';
import {toast} from "react-toastify"
import { useAuth } from "../context/AuthContext"

const Comments = ({comment}) => {

  const navigate = useNavigate()
  const {tokenData} = useAuth()
  const {deleteComment, updateComment} = useComment()
  const params = useParams()
  const idPost = params.id
  const idComment = comment._id
  const autorComment = comment.autor
  const autor = tokenData.id


  const [showModal, setShowModal] = useState(false)

    const handleShowModal = () => {
        setShowModal(true)
    }

    const handleCloseModal = () => {
        setShowModal(false)
    }

   /// funcion para eliminar comment e ir a /profile
   const delComment = (idPost, idComment) => {
    deleteComment(idPost, idComment)
    navigate('/profile')

    toast.success('El comentario se eliminó con éxito', {
      position: toast.POSITION.BOTTOM_RIGHT, autoClose: 2000,
    })
  }

  /// funcion para editar comment
  const editComment = async (comment, idComment, idPost) => {
    const res = await updateComment(comment, idComment, idPost)

    toast.success('El comentario se editó con éxito', {
      position: toast.POSITION.BOTTOM_RIGHT, autoClose: 2000,
    })

  }

  return (
    <div className="mt-2">
    <Card>
      <Card.Header>Comentario de @{comment.autor}</Card.Header>
      <Card.Body>
        <Card.Text>
        {comment.description}
        </Card.Text>
        { autor === autorComment ? (
              <>
        <Button className='me-2' variant="dark" onClick={handleShowModal}><PencilSquare/></Button>
        <Button variant="danger" onClick={() => {delComment(idPost, idComment)}} ><Trash3Fill/></Button>
        </>
              ): null}
      </Card.Body>
      <EditComment showModal={showModal} handleClose={handleCloseModal} editComment={editComment} comment={comment} idPost={idPost}/>
    </Card>
    </div>
  )
}

export default Comments