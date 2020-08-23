import React from "react";
import styled from "styled-components";
import MainRouter from "./routes/MainRouter";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const App: React.FC = () => {
  return (
    <Container>
      <MainRouter />
    </Container>
  );
};

export default App;
