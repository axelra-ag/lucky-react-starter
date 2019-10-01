import React from "react";
import styled from "styled-components";
import { __COLORS } from "./layout/Theme";
import MyImage, { AssetType } from "./views/Figure";
import MainRouter from "./routes/MainRouter";
import { BounceIn } from "./layout/UI/Animations/BounceIn";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  animation: ${BounceIn} 1s both;
`;

const Header = styled.header`
  margin-top: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AppTitle = styled.h1`
  color: ${__COLORS.PRIMARY};
  font-weight: 100;
  font-size: calc(18px + 2vmin);
`;

const Logo = styled(MyImage)`
  max-width: 100%;
  height: auto;
  width: 100px;
`;

const App: React.FC = () => {
  return (
    <Container>
      <Header>
        <Logo source={'https://files.axelra.com/logo.png'} assetType={AssetType.URL} />
        <AppTitle>Have fun with React :-)</AppTitle>
      </Header>
      <MainRouter />
    </Container>
  );
};

export default App;
