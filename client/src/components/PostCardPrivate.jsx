import Card from 'react-bootstrap/Card'
import {usePost} from '../context/PostProvider'
import { Button } from 'react-bootstrap'
import { useState, useEffect } from 'react'

const PostCardPrivate = ({post}) => {

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
        <Button variant="warning" className='my-5' >Ver más</Button>
        </Card>
      </div>
    </>
  )
}

export default PostCardPrivate