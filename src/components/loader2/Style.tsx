import styled from "styled-components";

export const Loader2_Styles = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  background-color: rgba(0, 0, 0);
  color: #ffff;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction:column;
  div{
    margin-bottom:5%;
  }
  //tablet view
  @media screen and (min-width: 600px) {
    width: 100%;
    // max-width: 600px;
    // margin: auto;
  }
  //laptop
  @media screen and (min-width: 900px) {
    width: 100%;
    // max-width: 800px;
    // margin: auto;
  }
`;
