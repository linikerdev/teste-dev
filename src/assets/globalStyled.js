import { createGlobalStyle } from "styled-components";
import bg from "./img/bg.jpeg";

const GlobalStyled = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        outline: 0;
    }

    #root {
        display:flex;
        flex-direction:column;
        height: 100vh;
    }
    html{
        height: 100vh;
    }
    body{
        background-image:url(${bg});
        display: flex;
        height: 100vh;
        flex-direction: column;
    }
    main{
        flex:1;
    }
    


`;

export default GlobalStyled;
