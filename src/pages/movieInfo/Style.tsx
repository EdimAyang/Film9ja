import styled from "styled-components";

export const Movies_Info = styled.div`
  width: 100%;
  height: 100vh;

  //tablet view
  @media screen and (min-width: 600px) {
    width: 100%;
    max-width: 600px;
    margin: auto;
  }
  //laptop
  @media screen and (min-width: 900px) {
    width: 100%;
    max-width: 800px;
    margin: auto;
  }
`;

export const Hero = styled.header`
  width: 100%;
  height: 250px;
  position: relative;
  top: 4%;
  //tablet view
  @media screen and (min-width: 600px) {
    height: 350px;
  }
  //laptop view
  @media screen and (min-width: 900px) {
    margin-bottom: 30px;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }

  span{
    background-color: transparent;
    position: absolute;
    top: 10px;
    left: 10px;
    img {
      background: transparent;
      width: 20px;
      cursor: pointer;
    }
  }
`;

export const Poster_img = styled.div`
  position: absolute;
  height: 180px;
  width: 140px;
  top: 50%;
  left: 30px;
  border-radius: 10px;
  border: none;
  //tablet view
  @media screen and (min-width: 600px) {
    height: 200px;
    width: 180px;
    top: 60%;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
`;

export const Trailer_Wrapper = styled.section`
  width: 100%;
  height: 60px;
  position: relative;
  display: flex;
  gap: 10px;
  top: 13%;
  //tablet view
  @media screen and (min-width: 600px) {
    top: 15%;
    height: 70px;
  }

  div {
    width: 30%;
    height: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    color: #50c878;

    //tablet view
    @media screen and (min-width: 600px) {
      font-size: 1.3em;
    }

    span {
      color: #ffff;
      font-size: 0.8em;
      //tablet view
      @media screen and (min-width: 600px) {
        font-size: 1.1em;
      }
    }

    img {
      width: 25px;
      cursor: pointer;
    }
  }
`;

export const Info_Wrapper = styled.section`
  width: 100%;
  height: 480px;
  position: relative;
  display: flex;
  flex-direction: column;
  top: 15%;
  padding: 10px;
  //tablet view
  @media screen and (min-width: 600px) {
    top: 20%;
    padding: 20px;
  }
`;

export const Info_Nav = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 20px;
  h4 {
    text-decoration: none;
    color: #50c878;
    //tablet view
    @media screen and (min-width: 600px) {
      font-size: 1.1em;
    }
  }
`;

export const Outlet_wrapper = styled.section`
  width: 100%;
  height: 100%;
  flex: 1;
   ::-webkit-scrollbar{
      display:none;
 }
`;
