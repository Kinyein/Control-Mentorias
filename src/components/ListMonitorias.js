import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { FaRegEdit } from 'react-icons/fa'
import { MdDeleteOutline } from 'react-icons/md'
import { deleteMonitoriaAsync, listMonitoriasAsync } from '../Redux/actions/monitoriasActions'
import { Container, ListContainer } from '../styles/styledComp/listStyles'
import { Modal } from 'react-bootstrap'
import AddMonitorias from './AddMonitorias'

const ListMonitorias = () => {

  const dispatch = useDispatch()

  const { monitorias } = useSelector(store => store.monitorias)

  const [show, setShow] = useState(false);
  const [toEdit, setToEdit] = useState([])

  const handleClose = () => setShow(false);

  const handleEdit = (data) => {
    setToEdit(data)
    setShow(true)
  };

  useEffect(() => {
    dispatch(listMonitoriasAsync())
  }, [])

  return (
    <Container>

      <h1>Monitorias</h1>

      <ListContainer>

        {monitorias.map((mo, index) => (
          <Card style={{ width: '20rem' }} key={index}>
            <Card.Body>
              <div className='headerCard'>
                <Card.Title>{mo.materia}</Card.Title>

                <div className='buttonContainer'>
                <button className='button editButton' onClick={() => handleEdit(mo)}><FaRegEdit /></button>
                  <button className='button deleteButton' onClick={() => {dispatch(deleteMonitoriaAsync(mo.codigo))}}><MdDeleteOutline /></button>
                </div>

              </div>
              <div style={{ margin: '20px 0' }}>
                <ul>
                  <li><strong>Materia: </strong>{mo.materia}</li>
                  <li><strong>Monitor Asignado: </strong>{mo.monitor}</li>
                  <li><strong>Fecha: </strong>{mo.date}</li>
                  <li><strong>Salón: </strong>{mo.salon}</li>
                </ul>
              </div>
            </Card.Body>
          </Card>
        ))}
      </ListContainer>

      <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <AddMonitorias toEdit={true} data={toEdit} />
          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
        </Modal>

    </Container>
  )
}

export default ListMonitorias