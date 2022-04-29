import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { listMonitoresAsync } from '../Redux/actions/monitoresActions'

const ListMonitores = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(listMonitoresAsync())
  }, [])


  return (
    <div>ListMonitores
      trayendo datos...
    </div>
  )
}

export default ListMonitores