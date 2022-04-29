import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import AddMonitor from '../components/AddMonitor'
import AddMonitorias from '../components/AddMonitorias'
import EditMonitorias from '../components/EditMonitorias'
import ListMonitores from '../components/ListMonitores'
import ListMonitorias from '../components/ListMonitorias'
import NavBar from '../components/NavBar'

const DashBoardRoutes = () => {
    return (
        <div>
            <NavBar />
            <Routes>
                <Route path='/' element={<ListMonitorias />} />
                <Route path='/monitores' element={<ListMonitores />} />
                <Route path='/editMonitorias' element={<EditMonitorias />} />
                <Route path='/addmonitor' element={<AddMonitor />} />
                <Route path='/addmonitoria' element={<AddMonitorias />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </div>
    )
}

export default DashBoardRoutes