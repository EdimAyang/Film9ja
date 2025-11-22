import { createGlobalStyle } from "styled-components";

export const Global_Css = createGlobalStyle`
body{
    background-color:#000;
}
    * {
        padding:0;
        margin:0;
        box-sizing:border-box;
        font-family: "Convergence", sans-serif;
        ::-webkit-scrollbar{
           background-color:transparent;
           scrollbar-color:#555;
           scrollbar-width:thin;
            @media screen and (max-width: 850px) {
                display:none;
            }

        }
::-webkit-scrollbar-thumb {
   background-color:#555;
   border-radius:100px;
   cursor: pointer;
}
} 
`;
