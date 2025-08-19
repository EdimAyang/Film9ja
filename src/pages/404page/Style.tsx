import styled from "styled-components";

export const Not_Found_Styles = styled.div`
    width:100%;
    height:100vh;
    .arrow_left{
        width:20px;
        margin:10px;
    }
`
export const Message = styled.div`
    width:90%;
    height:300px;
    position: relative;
    margin:0 auto;
    top:20%;
    img{
        width:100%;
        height:100%;
        object-fit:fill;
    }
    p{
        color:#ffff;
        margin-top:10px;
        text-align:center;
        font-size:.9em;
    }
        //tablet view
@media screen and (min-width:600px){
   width:60%;
   margin:0 auto;

   p{font-size:.9em;}
}
      //laptop view
      @media screen and (min-width:900px){
        width:30%;
        margin:0 auto;
}
`