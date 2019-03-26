// Libs
import React from "react";
import { render } from "react-dom";
// Routes
import Routes from "./routes";
// Styles
import "@/themes/App.scss";

const App = Routes;
render(<App />, document.getElementById("root"));

if (module.hot) {
  module.hot.accept("./routes", () => {
    require("./routes");
    render(<App />, document.getElementById("root"));
  });
}
