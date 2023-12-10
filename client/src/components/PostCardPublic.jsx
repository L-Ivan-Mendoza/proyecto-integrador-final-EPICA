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
      <div className="container">
     <Card className="bg-dark text-white p-1 my-3" >
      <Card.Img src={post.imgURL} alt="Imagen del Posteo" />
      <Card.ImgOverlay>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text className="text-truncate overflow-hidden">
          {post.description}
        </Card.Text>
        <Card.Text className="text-truncate overflow-hidden">
            @{post.autor} - 
            Posteado: {formattedDatePost} - 
            Ultima actualización: {formattedDateUpdate}
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
    </div>
    </>
  )
}

export default PostCardPublic