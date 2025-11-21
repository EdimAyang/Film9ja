
import { createGlobalStyle } from "styled-components";

export const Global_Css = createGlobalStyle`
    * {
        padding:0;
        margin:0;
        box-sizing:border-box;
        font-family: "Convergence", sans-serif;
        ::-webkit-scrollbar{
           background-color:transparent;
           scrollbar-color:green;
           scrollbar-width:thin;
        }
        ::-webkit-scrollbar-thumb {
   background-color:green;
   border-radius:100px;
   cursor: pointer;
}
    }
    .App{
        height:100vh;
        width:100%;
        background-color:#000;
        overflow:scroll;
    }
`;
