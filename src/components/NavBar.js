import React, { useState } from 'react'
import { Button, Offcanvas, Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logoutAsync } from '../Redux/actions/loginActions'

const NavBar = () => {

  const dispatch = useDispatch()

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleLogout = () => {
    dispatch(logoutAsync())
  }

  return (
    <div>

      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">Inicio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/monitores">Ver monitores</Nav.Link>
              <Nav.Link as={Link} to="/monitorias">Ver monitorias</Nav.Link>
              <Nav.Link as={Link} to="/addmonitor">Agregar Monitor</Nav.Link>
              <Nav.Link as={Link} to="/addmonitoria">Agregar Monitoria</Nav.Link>

              {/* <Nav.Link onClick={handleLogout}>Cerrar sesión</Nav.Link> */}

              <Button variant="primary" onClick={handleShow}>
                Perfil
              </Button>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>



      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Perfil</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Informacion acerca de usuario logueado 
          <button onClick={handleLogout}>Cerrar sesión</button>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}

export default NavBar