import styled from "styled-components";



export const Nav_bar = styled.div`
    width:100%;
    height:50px;
    display:flex;
    justify-content:center;
    justify-content:space-between;
    align-items:center;
    padding:10px;
    background-color:#221E22;
    z-index:5;
    position:fixed;
    top:0;
   
    img{
        width:20px;
        background:transparent;
    }
`

export const Logo_2 = styled.div`
    width:20%;
    z-index:20;
    height:auto;
    text-align:center;
    background:transparent;

    h3{
        color:#fff;
        background:transparent;
    }
    span{
        color:#50C878;
        background:transparent;
    }
`

//mobile 
export const Navigation = styled.div`
    width:80%;
    height:100%;
    display:flex;
    justify-content:flex-end;
    gap:20px;
    background:transparent;
    
    
`