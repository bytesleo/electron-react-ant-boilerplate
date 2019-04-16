// Libs
import React, { Component } from "react";
// Styles
import styles from "./HelloWorld.scss";

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
    return <div className={styles.helloWorld}>Hello World!</div>;
  }
}

export default HelloWorld;
