import { Navigate } from "react-router-dom";
import { useAuthContext } from "../shared/contexts";
import { MenuAppBar, MenuLateral } from "../shared/components";



interface IPrivateRoutesProps {

  children: React.ReactNode;
}

export const PrivateRoutes: React.FC<IPrivateRoutesProps> = ({ children }) => {
  const { isAuthenticated } = useAuthContext();
  if (!isAuthenticated) {

    return (
      <MenuLateral>
        <MenuAppBar>
          {children}
        </MenuAppBar>
      </MenuLateral>
    )
  }
  return <Navigate to="/login" replace />;
};
