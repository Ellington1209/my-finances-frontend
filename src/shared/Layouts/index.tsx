import { ReactNode } from "react";
import { Grid } from "@mui/material"
import Content from "../components/Content";

interface ILayout {

    children: ReactNode;
  
}

const Layout: React.FC <ILayout> = ({children}) => {
    return (
        <Grid padding='20px'>
            <Content>
                {children}
            </Content>

        </Grid>
    )
}
export default Layout;