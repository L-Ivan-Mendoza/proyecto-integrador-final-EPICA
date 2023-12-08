import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


function NavBarPublic() {

    const navigate = useNavigate()
  
    return (
        <>
        <Navbar expand="lg" className="bg-body-tertiary ">
          <Container className="justify-content-between">
            <Navbar.Brand onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>TusViajes.com</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav ">
              <Nav className="d-none d-md-flex ms-auto">
                <Button variant="warning" onClick={() => navigate('/login')} >Ingresar</Button>
              </Nav>
              <Nav className="d-none d-md-flex px-2">
                <Button variant="primary" onClick={() => navigate('/register')} >Registrarse</Button>
              </Nav>
              
              {/* Se agrega contenedor para que se vean las opciones en el menu hamburguesa */}
              <div className="d-md-none">
              <ul className="navbar-nav me-auto-mb-2 mb-md-0">
                <li className="nav-item">
                    <a className="nav-link" onClick={() => navigate('/login')}>Ingresar</a>
                    <a className="nav-link" onClick={() => navigate('/register')}>Registrarse</a>
                </li>
              </ul>
              </div>

            </Navbar.Collapse>
          </Container>
        </Navbar>
        </>
      );
}

export default NavBarPublic