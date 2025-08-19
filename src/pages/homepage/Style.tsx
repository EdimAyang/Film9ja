import styled from "styled-components";

export const Home_Styles = styled.div`
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
// mobile view
export const Hero_section = styled.header`
  width: 100%;
  max-width: 100%;
  height: 250px;
  position: relative;
  top: 9%;
  margin-bottom: 40px;
  //tablet view
  @media screen and (min-width: 600px) {
    height: 350px;
  }

  //laptop view
  @media screen and (min-width: 900px) {
    height: 550px;
    top: 9%;
    .overlay {
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.8);
    }
  }

  .mySwiper {
    border-radius: 10px;
    height: 100%;
    width: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export const Slider_Text = styled.div`
  //mobile view
  width: 100%;
  height: 80px;
  position: absolute;
  top: 60%;
  background: transparent;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  flex-direction: column;
  gap: 5px;
  padding: 10px;
  //tablet view
  @media screen and (min-width: 600px) {
    top: 68%;
  }
  h4 {
    color: #ffff;
    background: transparent;
    //tablet view
    @media screen and (min-width: 600px) {
      font-size: 1.4em;
    }
  }
`;

export const Catergories = styled.div`
  //mobile view
  width: 100%;
  height: 280px;
  padding: 10px;
  gap: 15px;
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  position: relative;
  top: 5%;

  section {
    width: 100%;
    display: flex;
    justify-content: space-between;

    h4 {
      color: #ffff;
      //tablet view
      @media screen and (min-width: 600px) {
        font-size: 1.4em;
      }
    }
    span {
      color: green;
      cursor: pointer;
      //tablet view
      @media screen and (min-width: 600px) {
        font-size: 1.1em;
      }
    }

    a {
      text-decoration: none;
    }
  }

  div {
    span {
      color: #ffff;
    }
  }

  //tablet view
  @media screen and (min-width: 600px) {
    top: 10%;
    height: 395px;
  }

  //laptop view
  @media screen and (min-width: 900px) {
    height: 400px;
  }
`;

export const Cards_Wrapper = styled.div`
  max-height: 220px;
  display: flex;
  overflow-x: scroll;
  gap: 15px;
  //tablet view
  @media screen and (min-width: 600px) {
    max-height: 250px;
     overflow-x: scroll;
  }
  //laptop view
  @media screen and (min-width: 900px) {
    max-height: 320px;
  }
`;
export const Card = styled.div`
  min-width: 130px;
  height: 190px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  cursor: pointer;
  //tablet view
  @media screen and (min-width: 600px) {
    height: 230px;
    min-width: 160px;
  }

  //laptop view
  @media screen and (min-width: 900px) {
    height: 300px;
    min-width: 250px;
  }
  & > div {
    height: 100%;
    width: 100%;
    overflow: hidden;
    border-radius: 10px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  p {
    color: #ffff;
    font-size: 0.7em;
    margin-bottom:10px;
    //tablet view
    @media screen and (min-width: 600px) {
      font-size: 0.9em;
    }
  }
`;

