import { DrawerProvider, AppThemeProvider, AuthProvider } from "./shared/contexts";

import { BrowserRouter } from "react-router-dom"

import './shared/forms/TraducoesYup';
import { AppRoutes } from './routes';







function App() {
  return (
    <AuthProvider>
      <AppThemeProvider>

          <DrawerProvider>
            <BrowserRouter>

                  <AppRoutes />
              
              
            </BrowserRouter>
          </DrawerProvider>
  
      </AppThemeProvider>
    </AuthProvider>
  );
}

export default App;
