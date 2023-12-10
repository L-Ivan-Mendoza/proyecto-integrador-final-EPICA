import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Trash3Fill, PencilSquare} from "react-bootstrap-icons"

const Comments = ({comment}) => {

  //console.log("comment:", comment);

  //  // Convierte la fecha a un objeto Date
  //  const createdAtDate = new Date(comment.createdAt)

  //  // Fechas en partes
  //  const day = createdAtDate.getDate()
  //  const month = createdAtDate.getMonth() + 1 // Los meses comienzan desde 0
  //  const year = createdAtDate.getFullYear()
 
  //  const formattedDateComment = `${day}/${month}/${year}`
  //  const formattedDateUpdate = `${day}/${month}/${year}`

  return (
    <div className="mt-2">
    <Card>
      <Card.Header>Comentario de @{comment.autor}</Card.Header>
      <Card.Body>
        <Card.Text>
        {comment.description}
        </Card.Text>
        <Button className='me-2' variant="dark"><PencilSquare/></Button>
        <Button variant="danger"><Trash3Fill/></Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Comments