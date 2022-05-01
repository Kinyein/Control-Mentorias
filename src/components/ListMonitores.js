import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { FaRegEdit } from 'react-icons/fa'
import { MdDeleteOutline } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { deleteMonitorAsync, listMonitoresAsync } from '../Redux/actions/monitoresActions'
import { Container, ListContainer } from '../styles/styledComp/listStyles'
import { Modal } from 'react-bootstrap';
import AddMonitor from './AddMonitor'
import Swal from 'sweetalert2'

const ListMonitores = () => {

  const dispatch = useDispatch()

  const { monitores } = useSelector(store => store.monitores)

  useEffect(() => {
    dispatch(listMonitoresAsync())
  }, [])

  const [show, setShow] = useState(false);
  const [toEdit, setToEdit] = useState([])

  const handleClose = () => setShow(false);

  const handleEdit = (data) => {
    setToEdit(data)
    setShow(true)
  };

  const handleDelete = (codigo) => {
    Swal.fire({
      title: '¿Desea borrar el monitor?',
      showDenyButton: true,
      denyButtonText: `Borrar`,
      confirmButtonText: 'Cancel',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isDenied) {

        dispatch(deleteMonitorAsync(codigo))


      }
    })

  }

  return (
    <Container>
      <h1>Monitores</h1>
      <ListContainer>


        {monitores.map((mo, index) => (
          <Card style={{ width: '19rem', backgroundColor: '#4D4C7D', color: 'white' }} key={index}>
            <Card.Body>
              <div className='headerCard'>
                <div>
                  <Card.Title>{mo.names}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    <p style={{ color: 'white' }}> {mo.lastNames} </p>
                  </Card.Subtitle>
                </div>
                <div className='buttonContainer'>
                  <button className='button editButton' onClick={() => handleEdit(mo)}><FaRegEdit /></button>
                  <button className='button deleteButton' onClick={() => handleDelete(mo.cedula)}><MdDeleteOutline /></button>
                </div>
              </div>
              <div style={{ margin: '20px 0' }}>
                <ul>
                  <li><strong>Programa Academico: </strong>{mo.academicProgram}</li>
                  <li><strong>Semestre: </strong>{mo.semester}</li>
                  <li><strong>Cedula: </strong>{mo.cedula}</li>
                  <li><strong>Contacto: </strong>
                    <ul>
                      <li><strong>Telefono: </strong>{mo.tel}</li>
                      <li><strong>Correo: </strong>{mo.email}</li>
                    </ul>
                  </li>

                </ul>
              </div>
            </Card.Body>
          </Card>
        ))}

      </ListContainer>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton >
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddMonitor toEdit={true} data={toEdit} />
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>

    </Container>
  )
}

export default ListMonitores