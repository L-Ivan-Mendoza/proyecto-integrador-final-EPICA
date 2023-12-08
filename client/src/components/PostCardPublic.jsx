import Card from 'react-bootstrap/Card'
import {usePost} from '../context/PostProvider'

const PostCardPublic = ({post}) => {

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
     <Card className="bg-dark text-white p-1 m-5" >
      <Card.Img src={post.imgURL} alt="Imagen del Posteo" />
      <Card.ImgOverlay>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>
          {post.description}
        </Card.Text>
        <Card.Text>
            @{post.autor} - 
            Posteado: {formattedDatePost} - 
            Ultima actualización: {formattedDateUpdate}
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
    </>
  )
}

export default PostCardPublic