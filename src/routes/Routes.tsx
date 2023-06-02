import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import { Dashboard, Login, Saida } from '../pages';
import { useDrawerContext } from '../shared/contexts';
import { PrivateRoutes } from './PrivateRouter';
import List from '../pages/List';






export const AppRoutes = () => {
  const { setDrawerOptions } = useDrawerContext();

  useEffect(() => {
    setDrawerOptions([
      {
        icon: 'home',
        path: '/dashboard',
        label: 'Dashboard',
      },
      {
        icon: 'arrow_upward',
        path: '/lista',
        label: 'Entrada',
      },
      {
        icon: 'arrow_downward',
        path: '/saida',
        label: 'Saida',
      },
      {
        icon: 'logout',
        path: '/saida',
        label: 'Sair',
      },
    ]);
  }, []);

  return (
    <Routes>
    <Route path="*" element={<Navigate to="/login" replace />} />
    <Route path="/login"element={<Login />}/>
    <Route path='/dashboard' element={<PrivateRoutes ><Dashboard/></PrivateRoutes>} />         
    <Route path='/lista' element={<PrivateRoutes ><List/></PrivateRoutes>} />         
    <Route path='/saida' element={<PrivateRoutes ><Saida/></PrivateRoutes>} />         
  </Routes>
  );
};

//{<Dashboard/>}

