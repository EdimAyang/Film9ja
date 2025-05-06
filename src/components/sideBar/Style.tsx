import styled from "styled-components";
import { Iprops } from "../../interface";

export const Side_bar = styled.nav<Iprops>`
    width:200px;
    height:100%;
    background-color:#221E22;
    position:fixed;
    z-index:20;
    left:${({active})=>active? `${"100%"}` : "54%"};
    top:0;
    padding:10px;
    display:flex;
    flex-direction:column;
    align-items:end;
    gap:40px;
    /* display:${({active})=>active? `${"block"}` : "none"}; */
    transition: 1s ease-out;
    img{
        width:20px;
        background:transparent;
        position:absolute;
        top:10px;
        left:5%;
    }

     //tablet view
 @media screen and (min-width:450px){
    left:${({active})=>active? `${"100%"}` : "77%"};
 }
`
export const Navigations = styled.div`
    width:100%;
    height:auto;
    display:flex;
    flex-direction:column;
    gap:30px;
    background:transparent;
    margin-top:40%;
    a{
        text-decoration:none;
        color:#ffff;
        font-size:1.5em;
        background:transparent;
    }
`