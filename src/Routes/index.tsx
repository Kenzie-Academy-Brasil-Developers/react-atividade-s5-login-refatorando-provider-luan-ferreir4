import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Home from "../Pages/Home";
import { GlobalStyle } from "../Styles/GlobalStyles";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <GlobalStyle />
        <Home />
      </Route>
      <Route path="/dashboard">
        <GlobalStyle />
        <Dashboard />
      </Route>
    </Switch>
  );
};

export default Routes;
