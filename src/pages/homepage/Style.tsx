import styled from "styled-components";



export const Home_Styles=styled.div`
    width:100%;
    height:100vh;
    
`
// mobile view
export const Hero_section = styled.header`
    max-width:1200px;
    width:100%;
    height:420px;
    position: relative;
    top:4%;
    margin-top:10px;

    

`
export const Slider_Container = styled.div`
     width:100%;
     height:100%;
     background-color:rgba(0,0,0, 0.1);
     position: relative;
     overflow:auto;

    /* .SlideC::-webkit-scrollbar{ */
        /* overflow:hidden; */
    /* } */

     &>div{
        display:flex;
        height:100%;
        
        img{
        width:100%;
        height:100%;
        object-fit:cover;
        opacity:.9;
        display:block
        }
     }
   
     
`
export const Card_Hero = styled.div`
    min-width:100%;
    height:100%;

     
`

export const Slider_Text = styled.div`
//mobile view
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
         //tablet view
         @media screen and (min-width:600px){font-size:1.4em}
    }
   
`

export const Catergories = styled.div`
 //mobile view
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
            //tablet view
            @media screen and (min-width:600px){font-size:1.4em}
        }
        span{
            color:#50C878;
            cursor: pointer;
             //tablet view
            @media screen and (min-width:600px){font-size:1.1em}
            
        }

        a{
            text-decoration:none;
        }
    }

    div{
        span{
            color:#ffff;
        }
    }

    //tablet view
    @media screen and (min-width:600px){
    top:10%;
    height:295px;
    }

`

export const Cards_Wrapper = styled.div`
    max-height:220px;
    display:flex;
    overflow-x:scroll;
    gap:15px;

     //tablet view
 @media screen and (min-width:600px){
    max-height:250px;
 }
`
export const Card = styled.div`
    min-width:130px;
    height:190px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    gap:10px;

//tablet view
@media screen and (min-width:600px){
   height:230px;
   min-width:150px;
}
    &>div{
        height:100%;
        width:100%;
        overflow:hidden;
        border-radius:10px;
        img{
            width:100%;
            height:100%;
        }
    }
    p{
        color:#ffff;
        font-size:.7em;
    //tablet view
    @media screen and (min-width:600px){
        font-size:.9em;
    }
    }
`
