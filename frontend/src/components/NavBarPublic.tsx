import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


function NavBarPublic() {
    const navigate = useNavigate()
    //////// Funcion para subir ó ir a inicio ///// 
    const navTop = () => {
    
      navigate('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (
        <Navbar expand="lg" className="bg-body-tertiary ">
          <Container className="justify-content-between">
            <Navbar.Brand onClick={() => navigate('/')}>TusViajes.com</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav ">
              <Nav className="me-auto px-3">
                <Nav.Link onClick={navTop}>Inicio</Nav.Link>
              </Nav>
              <Nav className="d-none d-md-flex ms-auto">
                <Button variant="warning" onClick={() => navigate('/login')}>Ingresar</Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}

export default NavBarPublic