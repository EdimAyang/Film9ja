import styled from "styled-components";


export const Company_styles = styled.div`
width:100%;
height:260px;
display:flex;
gap:18px;
 flex-wrap:wrap;
 overflow:scroll;
 padding:10px;
 //tablet view
@media screen and (min-width:600px){
   gap:20px;
}

 div{
    width:100%;
    height:70px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    color:#ffff;
        //tablet view
@media screen and (min-width:600px){
    font-size:1.1em;
    height:130px;
}

    img{
        height:100%;
        width:20%;
        border-radius:10px;
         //tablet view
        @media screen and (min-width:600px){width:18%;}
    }

    span{
        width:70%;
    }
 }
`