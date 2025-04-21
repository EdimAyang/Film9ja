import styled from "styled-components";

export const Search_styles = styled.div`
    height:100%;
    width:100%;
    button{
        color:#ffff;
        position:absolute;
        margin:10px;
    }
`
export const Input_container = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:10px;
    width:100%;
    height:auto;
    margin-bottom:20px;
    position:fixed;
    top:0;
    z-index:10;
    div{
        width:75%; 
        position:relative;
        .imgAnimate{
            position:absolute;
            left:90%;
            top:8px;
            animation:move 1s ease-in-out infinite;
            transition:all 4s ease-in-out;
        }

        @keyframes move {
            0%{transform:scale(.6)}
            50%{transform:scale(.8)}
            100%{transform:scale(1)}
        }
    }
    img{
        width:20px;
        background:transparent;
    }
    input{
        padding:10px;
        width:100%;
        background-color:#ffff;
        opacity:.8;
        border-radius:10px;
        border:none;
        outline:none;
    }
`

export const Movie_container = styled.section`
    width:100%;
    display:grid;
    grid-template-columns:1fr;
    grid-auto-rows:200px;
    gap:30px;
    position:relative;
    top:100px;
    padding:10px;
`

export const Cards1 = styled.div`
    width:100%;
    grid-column:1/2;
    display:flex;
    justify-content:space-between;
`
export const Movie_pics = styled.div`
    width:140px;
    height:100%;
    img{
        width:100%;
        height:100%;
    }

`
export const Info = styled.div`
    width:70%;
    height:100%;
    padding:10px;
    h4{
        color:#fff;
        margin-bottom:10px;
    }

    p{
        color:#ffff;
        opacity:0.7;
        font-size:.8em;
        line-height:1.5em;
    }
`