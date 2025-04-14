import styled from "styled-components";

export const Search_styles = styled.div`
    height:100%;
    width:100%;

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
    img{
        width:25px;
        background:transparent;
    }
    input{
        padding:15px;
        width:75%;
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