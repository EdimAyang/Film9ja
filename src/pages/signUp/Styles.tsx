import styled from "styled-components";
import { ILogIn } from "../../interface";

export const SignUpStyles = styled.div`
    width:100%;
    height:100vh;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    background-image:url("/src/assets/justice-league-bg.jpg");
    background-position:center;
    background-size:cover;
    background-repeat:no-repeat;
`
export const SignUpForm = styled.form`
    width:80%;
margin:0 auto;
height:300px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
gap:20px;
background:transparent;
z-index:10;
h4{
    color:#fff;
   background:transparent; 
}
h1{
    color:#fff;
    text-align:center;
    background:transparent;
}
`
export const SignUPInputWrapper = styled.div<ILogIn>`
    width:100%;
    height:auto;
    display:flex;
    flex-direction:column;
    gap:20px;
    position:relative;
    background:transparent;

    input{
        padding:15px;
        border:${({state})=> state? `${state}` : "none"};
        border-radius:10px;
        outline:none;
        background-color:#ffffffe8;
        color:#000;
    }

    span{
        font-size:0.8em;
        color:red;
        position:absolute;
        top:44%;
        display:${({state2})=>state2? `${state2}` : "none"

    }
    }
`

export const SignDiv = styled.div`
    width:90%;
    display:flex;
    justify-content:flex-end;
    background:transparent;
    z-index:10;
    span{
        color:#fff;
    }
    `