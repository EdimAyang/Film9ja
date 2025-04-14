import styled from "styled-components";
import { Iprops } from "../../interface";

export const Side_bar = styled.nav<Iprops>`
    width:200px;
    height:100%;
    background-color:#221E22;
    position:fixed;
    z-index:20;
    left:54%;
    top:0;
    padding:10px;
    display:flex;
    flex-direction:column;
    align-items:end;
    gap:40px;
    display:${({active})=>active? `${"block"}` : "none"};
    img{
        width:25px;
        background:transparent;
        margin-bottom:30px;
        margin-left:80%;
        margin-top:10px;
    }
`
export const Navigations = styled.div`
    width:100%;
    height:auto;
    display:flex;
    flex-direction:column;
    gap:30px;
    background:transparent;
    a{
        text-decoration:none;
        color:#ffff;
        font-size:1.5em;
        background:transparent;
    }
`