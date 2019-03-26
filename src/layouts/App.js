// Libs
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Layout } from "antd";
// Styles
import "./App.scss";
// Components
import Header from "@/components/@shared/Header";
import Footer from "@/components/@shared/Footer";

/**
 * LayoutApp
 *
 * @class LayoutApp
 * @extends {Component}
 */
class LayoutApp extends Component {
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
        <Layout className="layout">{children}</Layout>
        <Footer />
      </Layout>
    );
  }
}

export default LayoutApp;
