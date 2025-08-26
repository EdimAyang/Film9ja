import { Ibtn } from "../interface"
import styled from "styled-components"


export const ButtonS = styled.button<Ibtn>`
    width:${({size})=> size?`${size}` : "70%" };
    padding:15px;
    border-radius:10px;
    background-color:${({color})=> color? `${color}` : "#ffff"};
    border:none;
    font-size:1em;
    font-weight:500;
    color:${({color2})=>color2? `${color2}` : "#000"};
    /* z-index:10; */
    &>:hover{
        background-color:green;
        color:#fff;
    }
    cursor: pointer;

    
`
