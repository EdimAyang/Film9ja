import styled from "styled-components";

export const Video_player = styled.div`
    width:100%;
    height:100vh;
    &>div{
        width:100%;
        height:300px;
         //tablet view
        @media screen and (min-width:600px){
            height:500px;
        }
    }
    img{
        width:20px;
        margin:20px;
    }
`