import React, { useState } from 'react'
import { Offcanvas, Navbar, Container, Nav, Form } from 'react-bootstrap'
import { FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logoutAsync } from '../Redux/actions/loginActions'
import { filterActionAsync } from '../Redux/actions/monitoriasActions'
import { ButtonPerfil, ContainerNavBar } from '../styles/styledComp/navbarStyle'

const NavBar = () => {

  const dispatch = useDispatch()

  const [filter, setFilter] = useState({
    nameMonitor: ''
  })

  const { nameMonitor } = filter

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleLogout = () => {
    dispatch(logoutAsync())
  }

  const handleChange = ({ target }) => {
    setFilter({
      [target.name]: target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(filterActionAsync(nameMonitor))
  }



  return (
    <ContainerNavBar>

      <Navbar variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">Inicio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" style={{
              display: 'flex',
              justifyContent: 'space-around',
              width: '100%',
            }}>
              <Nav.Link as={Link} to="/monitores">Ver monitores</Nav.Link>
              <Nav.Link as={Link} to="/monitorias">Ver monitorias</Nav.Link>
              <Nav.Link as={Link} to="/addmonitor">Agregar Monitor</Nav.Link>
              <Nav.Link as={Link} to="/addmonitoria">Agregar Monitoria</Nav.Link>

              
              <Form onSubmit={handleSubmit}>
                <Form.Control
                  type="text"
                  placeholder="Buscar monitoria por nombre de monitor"
                  name="nameMonitor"
                  value={nameMonitor}
                  onChange={handleChange}
                />
              </Form>

              <Nav.Link onClick={handleLogout}>Cerrar sesión</Nav.Link>

              {/* <ButtonPerfil onClick={handleShow}>
                <FaUser />
              </ButtonPerfil> */}

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>



      {/* <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Perfil</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Informacion acerca de usuario logueado
          <button onClick={handleLogout}>Cerrar sesión</button>
        </Offcanvas.Body>
      </Offcanvas> */}
      
    </ContainerNavBar>
  )
}

export default NavBar