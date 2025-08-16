import styled from "styled-components";

export const Search_styles = styled.div`
  height: 100%;
  width: 100%;
  button {
    color: #ffff;
    position: absolute;
    margin: 10px;
  }
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
export const Input_container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  width: 100%;
  height: auto;
  margin-bottom: 20px;
  position: fixed;
  top: 0;
  z-index: 10;
  div {
    width: 75%;
    position: relative;
    //tablet view
    @media screen and (min-width: 600px) {
      width: 60%;
    }
    //laptop view
    @media screen and (min-width: 900px) {
      width: 60%;
    }
    .imgAnimate {
      position: absolute;
      left: 90%;
      top: 8px;
      animation: move 1s ease-in-out infinite;
      transition: all 1s ease-in-out;
      //tablet view
      @media screen and (min-width: 600px) {
        top: 11px;
      }
      //laptop view
      @media screen and (min-width: 900px) {
      }
    }

    @keyframes move {
      0% {
        transform: scale(0.9);
      }
      /* 50%{transform:scale(.8)} */
      100% {
        transform: scale(1);
      }
    }
  }
  img {
    width: 20px;
    background: transparent;
  }
  input {
    padding: 10px;
    width: 100%;
    background-color: #ffff;
    opacity: 0.8;
    border-radius: 10px;
    border: none;
    outline: none;
    //tablet view
    @media screen and (min-width: 600px) {
      padding: 15px;
    }
  }
  .active {
    display: none;
  }
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

export const Movie_container = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 200px;
  gap: 30px;
  position: relative;
  top: 100px;
  padding: 10px;
  //laptop view
  @media screen and (min-width: 900px) {
    grid-auto-rows: 330px;
  }
`;

export const Cards1 = styled.div`
  width: 100%;
  grid-column: 1/2;
  display: flex;
  justify-content: space-between;
`;
export const Movie_pics = styled.div`
  width: 140px;
  height: 100%;
  //tablet view
  @media screen and (min-width: 600px) {
    width: 150px;
  }
  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
  //laptop view
  @media screen and (min-width: 900px) {
    height: 270px;
    width: 200px;
  }
`;
export const Info = styled.div`
  width: 70%;
  height: 100%;
  padding: 10px;
  h4 {
    color: #fff;
    margin-bottom: 10px;
  }

  p {
    color: #ffff;
    opacity: 0.7;
    font-size: 0.8em;
    line-height: 1.5em;
  }
`;
