import React from "react";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import {Documentation} from "../components/Documentation";
import {DOCUMENTATION} from "./Routes";

const Container = styled.div``;

const RoutesContainer = styled.div``;

const MainRouter = () => {
  return (
    <Container>
      <Router>
        <RoutesContainer>
          <Switch>
            <Route component={Documentation} path={DOCUMENTATION} exact />
            {/*Intentionally left at the bottom*/}
            <Route
              exact
              path={"/*"}
              render={() => {
                return <Redirect to={DOCUMENTATION} />;
              }}
            />
          </Switch>
        </RoutesContainer>
      </Router>
    </Container>
  );
};

export default MainRouter;
