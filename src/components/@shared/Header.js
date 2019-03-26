// Libs
import React, { Component } from "react";
import { Layout, Menu } from "antd";
// Styles
import "./Header.scss";

const { Header } = Layout;

/**
 * HeaderApp
 *
 * @class HeaderApp
 * @extends {Component}
 */
class HeaderApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Header className="header">
        <div className="header__logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          className="header__menu"
        >
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
    );
  }
}

export default HeaderApp;
