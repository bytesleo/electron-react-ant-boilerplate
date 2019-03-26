// Libs
import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
// Screens
import Home from "@/screens/Home/Home";

const Routes = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </HashRouter>
);

export default Routes;
