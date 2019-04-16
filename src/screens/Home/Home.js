// Libs
import React, { Component } from "react";
// Styles
import styles from "./Home.scss";
// Layouts
import Layout from "@/layouts/App";
// Components
import Path from "@/components/Home/Path";
import HelloWorld from "@/components/Home/HelloWorld";

/**
 * Home
 *
 * @class Home
 * @extends {Component}
 */
class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout>
        <div className={styles.home}>
          <Path />
          <HelloWorld />
        </div>
      </Layout>
    );
  }
}

export default Home;
