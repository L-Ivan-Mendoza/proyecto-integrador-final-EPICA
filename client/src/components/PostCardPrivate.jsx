import Card from 'react-bootstrap/Card'
import { useNavigate } from 'react-router-dom'
import {usePost} from '../context/PostProvider'
import { Button } from 'react-bootstrap'
//import { useState, useEffect } from 'react'

const PostCardPrivate = ({post}) => {

  const navigate = useNavigate()

    // const [authorUsername, setAuthorUsername] = useState(null);

    // useEffect(() => {
    //     // realizar la consulta a bd
    //     const fetchAuthorUsername = async () => {
    //     try {
    //         const user = await db.collection('usuarios').findOne({ _id: ObjectId(post.autor) });
    //         if (user) {
    //         setAuthorUsername(user.username);
    //         }
    //     } catch (error) {
    //         console.log('Error al obtener el nombre de usuario:', error);
    //     }
    //     };

    //     // Llamada a la función de consulta
    //     fetchAuthorUsername();
    // }, [post.autor]); // Asegúrate de incluir post.autor como dependencia



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
        <Button variant="warning" className='d-block my-5' 
        onClick={() => navigate(`/profile/post/${post._id}`)} >
          Ver más
          </Button>
        </Card.ImgOverlay>
        </Card>
      </div>
    </>
  )
}

export default PostCardPrivate