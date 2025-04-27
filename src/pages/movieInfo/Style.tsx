import styled from "styled-components";


export const Movies_Info = styled.div`
    width:100%;
    height:100vh;
`

export const Hero = styled.header`
    width:100%;
    height:300px;
    position: relative;
   

    a{
        text-decoration:none;
        background-color:transparent;
        position:absolute;
        top:10px;
        left:10px;
        img{
            background:transparent; 
            width:25px;
            cursor: pointer;
        }
    }

`

export const Poster_img = styled.div`
     position:absolute;
     height:180px;
     width:140px;
     top:50%;
     left:30px;
     img{
        width:100%;
        height:100%;
        border-radius:10px;
     }
`

export const Trailer_Wrapper = styled.section`
    width:100%;
    height:70px;
    position: relative;
    top:8%;
    div{
        width:20%;
        height:100%;
        text-align:center;
        color:#50C878;
        h4{
            margin-bottom:10px;
        }
        img{
            width:40px;
            cursor: pointer;
        }
    }
`

export const Info_Wrapper = styled.section`
    width:100%;
    height:auto;
    position: relative;
    top:9%;
    padding:10px;
    overflow-x:scroll;
`

export const Info_Nav = styled.div`
    width:100%;
    height:60px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:10px;
    a{
        text-decoration:none;
        color:#50C878;
    }
`
