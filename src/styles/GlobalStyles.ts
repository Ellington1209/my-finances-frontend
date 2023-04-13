import { createGlobalStyle } from "styled-components";


const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
   
  }



  
    html {
      font-size: 62.5%;
    }

    body,
    #root{
      background-color: yellow;
      font-family: 'Roboto', sans-serif;
    
     

      height: 100vh;
      width: 100vw;
      overflow-x: hidden;
    }
    .MuiAlert-message {
      font-size: 14px;
    }
    a,
    a:hover {
      text-decoration: none;
      color: rgba(115, 103, 240, 1);
    }
    .MuiInputBase-root{
      color:  rgba(208, 210, 214, 1);
    }

`

export default GlobalStyles;