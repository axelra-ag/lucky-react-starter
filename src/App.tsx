import React from "react";
import styled from "styled-components";
import { __COLORS } from "./layout/Theme";

const Container = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
`;

const AppTitle = styled.h1`
  color: ${__COLORS.PRIMARY};
  font-weight: 100;
  margin-top: 2em;
  font-size: calc(18px + 2vmin);
`;

const App: React.FC = () => {
  return (
    <Container>
      <AppTitle>Have fun with React :-)</AppTitle>
    </Container>
  );
};

export default App;
