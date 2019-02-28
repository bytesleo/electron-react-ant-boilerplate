import React from "react";
import { HashRouter, Route } from "react-router-dom";

import Home from "../screens/Home";

const App = () => (
  <HashRouter>
    <div>
      <Route exact path="/" component={Home} />
    </div>
  </HashRouter>
);

export default App;
