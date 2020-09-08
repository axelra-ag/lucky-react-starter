import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import {Documentation} from "../components/Documentation";
import {Container} from "../UI/layout/Container";
import {DOCUMENTATION} from "./Routes";

const MainRouter = () => {
  return (
    <Container>
      <Router>
        <Switch>
          <Route component={Documentation} path={DOCUMENTATION} exact />
          {/*Intentionally left at the bottom*/}
          <Route
            exact
            path={"/*"}
            render={() => <Redirect to={DOCUMENTATION} />}
          />
        </Switch>
      </Router>
    </Container>
  );
};

export default MainRouter;
