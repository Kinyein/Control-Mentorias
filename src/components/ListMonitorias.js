import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { listMonitoriasAsync } from '../Redux/actions/monitoriasActions'

const ListMonitorias = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(listMonitoriasAsync())
  }, [])

  return (
    <div>ListMonitorias</div>
  )
}

export default ListMonitorias