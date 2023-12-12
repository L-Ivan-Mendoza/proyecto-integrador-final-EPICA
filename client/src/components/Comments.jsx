import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Trash3Fill, PencilSquare} from "react-bootstrap-icons"
import { useNavigate } from 'react-router-dom';
import {useComment} from "../context/CommentProvider"
import EditComment from './EditComment';
import { useState } from 'react';
import {toast} from "react-toastify"

const Comments = ({comment}) => {

  const navigate = useNavigate()
  const {deleteComment, updateComment} = useComment()

  const [showModal, setShowModal] = useState(false)

    const handleShowModal = () => {
        setShowModal(true)
    }

    const handleCloseModal = () => {
        setShowModal(false)
    }

   /// funcion para eliminar comment e ir a /profile
   const delComment = (id) => {
    deleteComment(id)
    navigate('/profile')
    toast.success('La tarea se eliminó con éxito', {
      position: toast.POSITION.BOTTOM_RIGHT, autoClose: 2000,
    })
  }

  /// funcion para editar comment
  const editComment = async (comment, _id) => {
    console.log("edit: ", comment, _id);
    const res = await updateComment(_id, comment)

    toast.success('La tarea se editó con éxito', {
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
        <Button className='me-2' variant="dark" onClick={handleShowModal}><PencilSquare/></Button>
        <Button variant="danger" onClick={() => {delComment(idComment)}} ><Trash3Fill/></Button>
      </Card.Body>
      <EditComment showModal={showModal} handleClose={handleCloseModal} editComment={editComment} comment={comment} />
    </Card>
    </div>
  )
}

export default Comments