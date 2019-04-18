// Libs
import React from "react";
import { render } from "react-dom";
// Root
import Root from "@/routes/Root";
// Styles
import "@/themes/App.global.scss";

const App = Root;
render(<App />, document.getElementById("app"));

if (module.hot) {
  module.hot.accept("./routes/Root", () => {
    require("@/routes/Root");
    render(<App />, document.getElementById("app"));
  });
}
