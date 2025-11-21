import { useRouteError } from 'react-router-dom';
import styled from 'styled-components';

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <Container>
        <ErrorCode>500</ErrorCode>
        <div>
          <Message>Oops! An internal server error has occured.</Message>
          {error instanceof Error && import.meta.env.DEV && (
            <Message>{error.message}</Message>
          )}
        </div>
      </Container>
    </>
  );
};

export default ErrorPage;

const Container = styled.main`
  width:100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  text-align: center;
  padding: 5rem 2rem;
  //tablet view
@media screen and (min-width: 600px) {
  width: 100%;
}
//laptop
@media screen and (min-width: 900px) {
  width: 100%;
  max-width: 800px;
}
`;

const ErrorCode = styled.h1`
  font-size: 8rem;
  font-weight: 900;
  margin: 0;
  color: #ffff;
`;

const Message = styled.p`
  font-size: 1rem;
  color: #ffff;
  margin-top: 1.5rem;
  margin-bottom: 4rem;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;
