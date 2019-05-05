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

const Container = styled.div``;

const Routes = styled.div`
  margin-top: 2em;
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
