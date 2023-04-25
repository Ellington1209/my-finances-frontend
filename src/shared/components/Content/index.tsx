import { ReactNode } from "react";

interface IContent {
    children: ReactNode;
}
const Content: React.FC<IContent> = ({children}) => {
    return(
        <div>
            {children}
        </div>
    )
}

export default Content;