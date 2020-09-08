import React from "react";
import styled from "styled-components";
import MainRouter from "./routes/MainRouter";

const Container = styled.div`
  display: flex;
  align-items: baseline;
  width: 110px;
  justify-content: center;
`;

const App: React.FC = () => {
  return (
    <Container style={{height: 40}}>
      <MainRouter />
    </Container>
  );
};

export default App;
