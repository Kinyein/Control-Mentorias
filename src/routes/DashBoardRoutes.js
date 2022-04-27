import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddMonitor from '../components/AddMonitor'
import Login from '../components/Login'
import Register from '../components/Register'

const DashBoardRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/addMonitor' element={<AddMonitor />} />
            </Routes>
        </div>
    )
}

export default DashBoardRoutes