import styled from "styled-components";

const Loader = () => {
  return (
    <StyledLoader>
      <div className="loader"></div>
    </StyledLoader>
  );
};

export default Loader;

const StyledLoader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  position: fixed;
  overflow: hidden;
  width: 100vw;
  background-color: black;
  z-index: 20000;
  .loader {
    width: fit-content;
    font-weight: bold;
    /* font-family: monospace; */
    font-size: 30px;
    background: radial-gradient(circle closest-side, #000 94%, #0000)
      right/calc(200% - 1em) 100%;
    animation: l24 1s infinite alternate linear;
  }
  .loader::before {
    content: "Film9ja";
    line-height: 1em;
    color: #0000;
    background: inherit;
    background-image: radial-gradient(circle closest-side, #ffff 94%, #000);
    -webkit-background-clip: text;
    background-clip: text;
  }

  @keyframes l24 {
    0% {
      background-position: left;
    }

    100% {
      background-image: radial-gradient(circle closest-side, green 94%, #000);
      background-position: right;
    }
  }
`;
