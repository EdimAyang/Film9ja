import styled from "styled-components";

export const Similar_styles = styled.div`
width:100%;
height:260px;
display:flex;
gap:18px;
 flex-wrap:wrap;
 overflow:scroll;
 padding:10px;

 div{
    width:100%;
    height:70px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    color:#ffff;
    

    img{
        height:100%;
        width:20%;
        border-radius:50%;
    }

    span{
        width:70%;
    }
 }
`