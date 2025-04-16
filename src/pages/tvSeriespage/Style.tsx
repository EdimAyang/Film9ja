import styled from "styled-components";



export const TV_styled = styled.div`
    width:100%;
    height:100vh;
    display:flex;
    flex-direction:column;
`
export const TV_header = styled.header`
    width:100%;
    height:60px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:10px;
    position:fixed;
    top:0;
    left:0;
    z-index:1;

    h3{
        color:#ffff;
    }

    img{
        width:20px;
    }
`

export const TV_Container = styled.div`
    width:100%;
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    align-items:center;
    gap:15px;
    overflow-y:scroll;
    padding:10px;
    margin-top:20%;
    flex:1;
`

export const TV_Card1 = styled.div`
    height:160px;
    width:120px;
    border-radius:10px;
    img{
        width:100%;
        height:100%;
        display:block;
    }
`