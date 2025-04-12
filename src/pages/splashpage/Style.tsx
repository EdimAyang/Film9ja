import styled from "styled-components";

export const Splash_Styles = styled.div`
    width:100%;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    background-image:url("/src/assets/justice-league-bg.jpg");
    background-position:center;
    background-size:cover;
    background-repeat:no-repeat;
    flex-direction:column;
`
export const OverlayDiv = styled.div`
    width:100%;
    height:100vh;
    background-color:rgba(0,0,0, 0.5);
    position:fixed;
`
export const Logo = styled.div`
    width:50%;
    z-index:20;
    height:auto;
    text-align:center;
    background:transparent;
    margin-bottom:40px;
    h1{
        color:#fff;
        background:transparent;
    }
    span{
        color:#50C878;
        background:transparent;
    }
`