import { createGlobalStyle } from "styled-components";

export const Global_Css = createGlobalStyle`
    * {
        padding:0;
        margin:0;
        box-sizing:border-box;
        background-color:#000;
        font-family: "Varela Round", sans-serif;
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
/* toaster settings */
#_rht_toaster{
   background:none !important ;
   background-color:none;
   z-index:-1;
   inset:0px;
   pointer-events:none;
   }
   .go3958317564 {
 background:none;
 background-color:#fff;
 
}
.go1579819456 {
background:none;
   background-color:#fff;
}
}
`;
