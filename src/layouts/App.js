// Libs
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Layout } from "antd";
// Styles
import styles from "./App.scss";
// Components
import Header from "@/components/@shared/Header";
import Footer from "@/components/@shared/Footer";

/**
 * App
 *
 * @class App
 * @extends {Component}
 */
class App extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { children } = this.props;
    return (
      <Layout>
        <Header />
        <Layout className={styles.app}>
          <Layout.Content>{children}</Layout.Content>
        </Layout>
        <Footer />
      </Layout>
    );
  }
}

export default App;
