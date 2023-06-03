import { Navigate } from "react-router-dom";
import { useAuthContext } from "../shared/contexts";
import { MenuAppBar, MenuLateral } from "../shared/components";
import Layout from "../shared/Layouts";



interface IPrivateRoutesProps {

  children: React.ReactNode;
}

export const PrivateRoutes: React.FC<IPrivateRoutesProps> = ({ children }) => {
  const { isAuthenticated } = useAuthContext();
  if (isAuthenticated) {

    return (
      <MenuLateral>
        <MenuAppBar>
          <Layout>
            {children}
          </Layout>
        </MenuAppBar>
      </MenuLateral>
    )
  }
  return <Navigate to="/login" replace />;
};
