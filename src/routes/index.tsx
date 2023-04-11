import { Routes, Route, Navigate } from 'react-router-dom'

import { Dashboard, Login } from '../pages';

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="*" element={<Navigate to="/login" replace />} />
            <Route path='dashboard' element={<Dashboard />}/>
            <Route path='login' element={<Login />}/>
        </Routes>
    );
}