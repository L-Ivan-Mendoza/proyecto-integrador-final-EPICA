import Card from 'react-bootstrap/Card'
import {usePost} from '../context/PostProvider'
import { Button } from 'react-bootstrap'
import {PencilSquare, Trash3Fill} from "react-bootstrap-icons"

const PostDetail = ({post}) => {
  
  // Convierte la fecha a un objeto Date
  const createdAtDate = new Date(post.createdAt)

  // Fechas en partes
  const day = createdAtDate.getDate()
  const month = createdAtDate.getMonth() + 1 // Los meses comienzan desde 0
  const year = createdAtDate.getFullYear()

  const formattedDatePost = `${day}/${month}/${year}`
  const formattedDateUpdate = `${day}/${month}/${year}`

  return (

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
            <Button className='mx-2' variant="dark"><PencilSquare/> Editar</Button>
            <Button variant="danger"><Trash3Fill/></Button>
        </Card.Body>
      </Card>
      </div>

  )
}

export default PostDetail