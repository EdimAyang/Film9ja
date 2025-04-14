import styled from "styled-components";



export const Home_Styles=styled.div`
    width:100%;
    height:100vh;
    
`
export const Hero_section = styled.header`
@media screen and (max-width:650px){
    max-width:1200px;
    width:100%;
    height:420px;
    position: relative;
    top:4%;
    margin-top:10px;

    
}
`
export const Slider_Container = styled.div`
     width:100%;
     height:100%;
     background-color:rgba(0,0,0, 0.1);
     position: relative;
     overflow-x:scroll;

     &>div{
        display:flex;
        height:100%;
        
        img{
        width:100%;
        height:100%;
        object-fit:cover;
        opacity:.4;
        display:block
        }
     }
   
     
`
export const Card_Hero = styled.div`
    min-width:100%;
    height:100%;

     
`

export const Slider_Text = styled.div`
    width:100%;
    height:80px;
    position:absolute;
    top:78%;
    background:transparent;
    display:flex;
    justify-content:flex-end;
    align-items:flex-start;
    flex-direction:column;
    gap:5px;
    padding:10px;
    h4{
        color:#ffff;
        background:transparent;
    }
   
`

export const Catergories = styled.div`
 @media screen and (max-width:600px){
    width:100%;
    height:280px;
    padding:10px;
    gap:15px;
    display:flex;
    flex-direction:column;
    margin-top:40px;
    position: relative;
    top:5%;
    section{
        width:100%;
        display:flex;
        justify-content:space-between;
        
        h4{
            color:#ffff;
        }
        span{
            color:#50C878;
            cursor: pointer;
        }
    }

    div{
        span{
            color:#ffff;
        }
    }
}
`

export const Cards_Wrapper = styled.div`
    max-height:220px;
    display:flex;
    overflow-x:scroll;
    gap:15px;
`
export const Card = styled.div`
    min-width:150px;
    height:220px;
    
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    gap:10px;
    &>div{
        height:100%;
        width:100%;
        overflow:hidden;
        
        img{
            width:100%;
            height:100%;
        }
    }
    p{
        color:#ffff;
        font-size:.6em;
    }
`
