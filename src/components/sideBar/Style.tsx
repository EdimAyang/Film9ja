import styled from "styled-components";
import { Iprops } from "../../interface";

export const Side_bar = styled.nav<Iprops>`
.overlay{
    width:100%;
    height:100%;
    position:fixed;
    top:0;
    left:0;
    background:rgba(0,0,0,0.5);
    display:${({active})=> active == 'false' ? "none" : "block"};
    backdrop-filter: blur(3px) saturate(150%); //Frosted glass effect
}
    width:400px;
    height:100%;
    background-color:#000;
    position:fixed;
    z-index:200;
    left:${({active})=>active == 'false'? "100%" : "34%"};
    top:0;
    padding:10px;
    display:flex;
    flex-direction:column;
    align-items:end;
    gap:40px;
    
    span{
        display:block;
    }
    transition: 0.75s ease-out;
    .close-icon{
        color:#fff;
        position:absolute;
        top:10px;
        left:5%;
    }

     //tablet view
 @media screen and (min-width:700px){
    left:${({active})=>active == 'false' ? "100%" : "52%"};

 }

     //laptop view
    @media screen and (min-width:900px){
        display:none;
    }
`
export const Navigations = styled.div`
z-index:20;
    width:100%;
    height:auto;
    display:flex;
    flex-direction:column;
    gap:30px;
    background:transparent;
    margin-top:20%;
    a{
        text-decoration:none;
        color:#ffff;
        font-size:1rem;
        background:transparent;
    }
    .active-link{
        color:green;
    }
`