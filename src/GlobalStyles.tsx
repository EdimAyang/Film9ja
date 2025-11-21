
import { createGlobalStyle } from "styled-components";

export const Global_Css = createGlobalStyle`
    * {
        padding:0;
        margin:0;
        box-sizing:border-box;
        font-family: "Convergence", sans-serif;
        ::-webkit-scrollbar{
           background-color:transparent;
           scrollbar-color:#555;
           scrollbar-width:thin;
        }
        ::-webkit-scrollbar-thumb {
   background-color:#555;
   border-radius:100px;
   cursor: pointer;
    @media screen and (max-width: 850px) {
    display:none;
    appearance:none;
 }
}
    }
    .App{
        height:100vh;
        width:100%;
        background-color:#000;
        overflow:scroll;
    }
`;
