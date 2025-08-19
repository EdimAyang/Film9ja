import styled from "styled-components";

export const Movie_styled = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
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
export const Movie_header = styled.header`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  
  //tablet view
  @media screen and (min-width: 600px) {
    display: none;
  }

  //laptop view
  @media screen and (min-width: 900px) {
    display: none;
  }
  h3 {
    color: #ffff;
    //tablet view
    @media screen and (min-width: 600px) {
      font-size: 1.4em;
    }
  }

  img {
    width: 20px;
  }
  //laptop view
  @media screen and (min-width: 900px) {
    display: none;
  }
`;

export const Movie_Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
  /* overflow-x: scroll; */
  padding: 10px;
  margin-top: 20%;
  flex: 1;
  
  //tablet view
  @media screen and (min-width: 600px) {
    margin-top: 10%;
    gap: 15px;
  }
  //laptop view
  @media screen and (min-width: 900px) {
    margin-top: 6%;
  }
`;

export const Movie_Card1 = styled.div`
  height: 160px;
  width: 110px;
  flex-grow: 1;
  //tablet view
  @media screen and (min-width: 600px) {
    height: 170px;
    width: 120px;
  }
  img {
    width: 100%;
    height: 100%;
    display: block;
    border-radius: 10px;
  }
  //laptop view
  @media screen and (min-width: 900px) {
    height: 270px;
    width: 200px;
    flex-grow: 1;
  }
`;
