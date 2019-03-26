// Libs
import React, { Component } from "react";
import { Layout } from "antd";
// Styles
import "./Footer.scss";
// Config
import { IMAGES } from "@/config";

const { Footer } = Layout;

/**
 * FooterApp
 *
 * @class FooterApp
 * @extends {Component}
 */
class FooterApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Footer className="footer">
        <img alt="" className="footer__logo" src={IMAGES.LOGO} />
        electron-react-ant-boilerplate ©2019
      </Footer>
    );
  }
}

export default FooterApp;
