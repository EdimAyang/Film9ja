import { ButtonS } from "../Button";
import styled from "styled-components";

interface FallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}


const ErrorComponent: React.FC<FallbackProps> = ({
  error,
  resetErrorBoundary,
}) => {

  const handleReload = () => {
    window.location.reload()
    resetErrorBoundary();
  }

  return (
    <ErrorStyles>
      <h2>Something went wrong !</h2>
      <p>{error.message}</p>
      <ButtonS
        children="Reload"
        size="20%"
        color="#fff"
        onClick={()=>handleReload()}
      />
    </ErrorStyles>
  );
};

export default ErrorComponent;

export const ErrorStyles = styled.div`
  width: 100vw;
  height: 100%;
  position: fixed;
  background-color: rgba(0, 0, 0);
  color: #ffff;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  p {
    margin: 1.5rem;
  }
  //tablet view
  @media screen and (min-width: 600px) {
    width: 100%;
    // max-width: 600px;
    // margin: auto;
  }
  //laptop
  @media screen and (min-width: 900px) {
    width: 100vw;
   max-width: 800px;
  }
`;
