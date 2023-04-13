import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import { Dashboard, Login } from '../pages';
import { useDrawerContext} from '../shared/contexts';




export const AppRoutes = () => {
  
    const { setDrawerOptions } = useDrawerContext();
    useEffect(() => {
    setDrawerOptions([
      {
        icon: 'home',
        path: '/dashboard',
        label: 'Dashboard',
      },

    ]);
  }, []);
    return (
        <Routes>
            <Route path="*" element={<Navigate to="/login" replace />} />
            <Route path='dashboard' element={<Dashboard/>} />
            <Route path='login' element={<Login />}/>
        </Routes>
    );
}