import React from "react";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Typography from "../components/Typography";
import ReduxExample from "../components/ReduxExample";
import NavigationTabs from "./NavigationTabs";
import { __GRAY_SCALE } from "../layout/Theme";

const Container = styled.div``;

const Routes = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2em;
  min-height: 300px;
  border: 1px solid ${__GRAY_SCALE._200};
  border-radius: 5px;
  width: 500px;
  padding: 2rem;
`;

let initialRoute = "/typography";

const MainRouter = () => {
  return (
    <Container>
      <Router>
        <NavigationTabs />
        <Routes>
          <Switch>
            <Route component={Typography} path={`/typography`} exact />
            <Route component={ReduxExample} path={`/redux`} exact />

            {/*Intentionally left at the bottom*/}
            <Route
              exact
              path={"*"}
              render={() => {
                return <Redirect to={`/${initialRoute}`} />;
              }}
            />
          </Switch>
        </Routes>
      </Router>
    </Container>
  );
};

export default MainRouter;
