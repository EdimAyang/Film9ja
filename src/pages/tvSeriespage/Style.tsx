import styled from "styled-components";

export const TV_styled = styled.div`
  display: flex;
  flex-direction: column;

  button {
    padding: 10px;
  }
  
`;
// export const TV_header = styled.header`
  /* width: 100%; */
  /* height: 60px; */
  /* display: flex; */
  /* justify-content: space-between; */
  /* align-items: center; */
  /* padding: 10px; */
  /* position: fixed; */
  /* top: 0; */
  /* left: 0; */
  /* z-index: 1; */
/*  */
  /* h3 { */
    /* color: #ffff; */
    /* //tablet view */
    /* @media screen and (min-width: 600px) { */
      /* font-size: 1.4em; */
    /* } */
  /* } */
/*  */
  /* img { */
    /* width: 20px; */
  /* } */
  /* //tablet view */
  /* @media screen and (min-width: 600px) { */
    /* display: none; */
  /* } */
  /* //laptop view */
  /* @media screen and (min-width: 900px) { */
    /* display: none; */
  /* } */
// `;

export const TV_Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
  /* overflow-y: scroll; */
  padding: 10px;
  flex: 1;
  //tablet view
  @media screen and (min-width: 600px) {
    gap: 15px;
  }
`;

export const TV_Card1 = styled.div`
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
