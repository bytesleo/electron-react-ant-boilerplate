// Libs
import React, { Component } from "react";
// Styles
import "./HelloWorld.scss";

/**
 * HelloWorld
 *
 * @class HelloWorld
 * @extends {Component}
 */
class HelloWorld extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="home__hello-world">Hello World!</div>;
  }
}

export default HelloWorld;
