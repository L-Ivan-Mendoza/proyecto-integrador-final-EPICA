import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ModalRegister from "./ModalRegister";
import { registerReq } from "../api/connectionBd";


function NavBarPublic() {
    const navigate = useNavigate()
    const [showModal, setShowModal] = useState(false)

    const handleShowModal = () => {
        setShowModal(true)
    }

    const handleCloseModal = () => {
        setShowModal(false)
    }

    const register =async (newUser) => {
        try{
        const res = await registerReq(newUser)
        console.log('Nueva usuario agregado: ', res.id);
        navigate(`/profile/${result.id}`)

        toast.success('Usuario creado correctamente', {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000,
        })
        } catch (error) {
        toast.error('Error al crear el usuario', {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000,        
        })
        console.error('Error al crear el usuario', error);
        
        }         
    }
  
    const navTop = () => {
      navigate('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (
        <>
        <Navbar expand="lg" className="bg-body-tertiary ">
          <Container className="justify-content-between">
            <Navbar.Brand onClick={() => navigate('/')}>TusViajes.com</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav ">
              <Nav className="me-auto px-3">
                <Nav.Link onClick={navTop}>Inicio</Nav.Link>
              </Nav>
              <Nav className="d-none d-md-flex ms-auto">
                <Button variant="warning" onClick={handleShowModal}>Ingresar</Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <ModalRegister showModal={showModal} handleClose={handleCloseModal} loginReq={registerReq} />
        </>
      );
}

export default NavBarPublic