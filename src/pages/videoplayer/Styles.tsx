import styled from "styled-components";

export const Video_player = styled.div`
  width: 100%;
  height: 100vh;
  border-radius: 10px;
  padding:10px;
  & > div {
    width: 100%;
    height: 300px;
    //tablet view
    @media screen and (min-width: 600px) {
      height: 500px;
      border-radius: 10px;
    }
    //laptop
@media screen and (min-width: 900px) {
    border-radius: 10px;
}

  }
  img {
    width: 20px;
    margin-top: 40px;
    margin-bottom: 20px;
    cursor: pointer;
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
