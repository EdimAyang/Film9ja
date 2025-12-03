import styled from "styled-components";
import { Iprops } from "../../interface";

export const Side_bar = styled.nav<Iprops>`
  width: 300px;
  height: 100%;
  background-color: #000;
  position: fixed;
  z-index: 500;
  left: ${({ active }) => (active == "false" ? "-100%" : "0%")};
  top: 0;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 40px;

  span {
    display: block;
  }
  transition: 0.4s ease-in-out;

  .Xicon-container{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    cursor: pointer;
  .close-icon {
    color: #fff;
  }
}

  //laptop view
  @media screen and (min-width: 900px) {
    display: none;
  }
`;
export const Navigations = styled.div`
  padding: 10px;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 30px;
  background: transparent;
  a {
    text-decoration: none;
    color: #ffff;
    font-size: 1rem;
    background: transparent;
    padding: 10px 20px;
    border-radius: 5px;
    transition: 0.3s ease-in-out;
    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
  .active-link {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const Overlay = styled.div<Iprops>`
  width: 100%;
  height: 100%;
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  display: ${({ active }) => (active == "false" ? "none" : "block")};
  backdrop-filter: blur(3px) saturate(150%); //Frosted glass effect
`;
