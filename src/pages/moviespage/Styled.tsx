import styled from "styled-components";

export const Movie_styled = styled.div`
  display: flex;
  flex-direction: column;
  z-index:80;
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
  flex: 1;
  
  //tablet view
  @media screen and (min-width: 600px) {
    gap: 15px;
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
    cursor:pointer;
  }
  //laptop view
  @media screen and (min-width: 900px) {
    height: 270px;
    width: 200px;
    flex-grow: 1;
  }
`;
