import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {useAuth} from "../context/AuthContext"
import ModalNewPost from "./ModalNewPost";
import { useState } from "react";



function NavBarProfile() {
    const navigate = useNavigate()
    const {signout} = useAuth()
    const [showModal, setShowModal] = useState(false)

    const handleShowModal = () => {
        setShowModal(true)
    }

    const handleCloseModal = () => {
        setShowModal(false)
    }

    const addPost = async (newPost) => {
        try{
        const res = await createPost(newUser)
        console.log('Nuevo posteo: ', res.id);
        navigate(`/profile/post/${result.id}`)

        toast.success('¡Post publicado!', {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000,
        })
        } catch (error) {
        toast.error('Error al publicar el post', {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000,        
        })
        console.error('Error al crear el usuario', error);
        
        }         
    }
  
    const navTop = () => {
      navigate('/profile');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (
        <>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container className="justify-content-between">
            <Navbar.Brand style={{ cursor: 'pointer' }} onClick={() => navigate('/profile')}>TusViajes.com</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav ">
              <Nav className="me-auto px-3">
                <Nav.Link onClick={navTop}>Inicio</Nav.Link>
              </Nav>
              <Nav className="d-none d-md-flex px-2">
                <Button variant="warning" onClick={handleShowModal} >+ Agregar Post</Button>
              </Nav>
              <Nav className="d-none d-md-flex px-2">
                <Button variant="danger" onClick={() => signout()} >Salir</Button>
                </Nav>
                
                {/* Se agrega contenedor para que se vean las opciones en el menú hamburguesa */}
                <div className="d-md-none">
                  <ul className="navbar-nav me-auto-mb-2 mb-md-0">
                    <li className="nav-item">
                      <a className="nav-link" onClick={handleShowModal}>+ Agregar Tarea</a>
                      <a className="nav-link" onClick={() => signout()} style={{color: "red"}} >Salir</a>
                    </li>
                  </ul>
                </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <ModalNewPost showModal={showModal} handleClose={handleCloseModal} addPost={addPost} />
        </>
      );
}

export default NavBarProfile