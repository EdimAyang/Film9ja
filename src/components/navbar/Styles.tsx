import styled from "styled-components";

export const Nav_bar = styled.nav`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #000;
  z-index: 5;
  position: fixed;
  margin-bottom: 0rem;
  button {
    display: none;
  }
  top: 0;
  .glass {
    display: block;
    cursor: pointer;
  }
  img {
    width: 20px;
    background: transparent;
    cursor: pointer;
    //laptop view
    @media screen and (min-width: 900px) {
      display: none;
    }
  }
  //tablet
  @media screen and (min-width: 600px) {
    max-width: 600px;
  }

  //laptop view
  @media screen and (min-width: 900px) {
    max-width: 800px;
    button {
      display: block;
    }
  }
`;

export const Logo_2 = styled.div`
  width: 20%;
  z-index: 20;
  height: auto;
  text-align: start;
  background: transparent;
  cursor: pointer;

  h3 {
    color: #fff;
    background: transparent;
  }
  span {
    color: green;
    background: transparent;
  }
`;

//mobile
export const Navigation = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  background: transparent;

  a {
    display: none;
  }
  //laptop view
  @media screen and (min-width: 900px) {
    flex-direction: row-reverse;
    width: 50%;
    justify-content: space-between;
    align-items: center;

    a {
      text-decoration: none;
      color: #ffff;
      display: block;
    }

    a:hover {
      color: green;
    }
  }
`;
