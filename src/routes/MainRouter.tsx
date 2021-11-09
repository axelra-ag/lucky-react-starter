import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes
} from "react-router-dom";
import {Documentation} from "../components/docs/Documentation";
import {DOCUMENTATION} from "./Routes";

const MainRouter = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Documentation />} path={DOCUMENTATION} />
        {/*Intentionally left at the bottom*/}
        <Route path={"/*"} element={<Navigate to={DOCUMENTATION} />} />
      </Routes>
    </Router>
  );
};

export default MainRouter;
