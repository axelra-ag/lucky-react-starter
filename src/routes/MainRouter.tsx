import React from "react";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Typography from "../components/Typography";
import { Routes } from "./Routes";

const Container = styled.div``;

type Props = {
  initialRoute: Routes;
};
const MainRouter = ({ initialRoute }: Props) => {
  return (
    <Container>
      <Router>
        <Switch>
          <Route component={Typography} path={`/${Routes.TYPOGRAPHY}`} exact />

          {/*Intentionally left at the bottom*/}
          <Route
            exact
            path={"*"}
            render={() => {
              return <Redirect to={`/${initialRoute}`} />;
            }}
          />
        </Switch>
      </Router>
    </Container>
  );
};

export default MainRouter;
