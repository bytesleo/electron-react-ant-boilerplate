// Libs
import React, { Component } from "react";
import { Breadcrumb } from "antd";
// Styles
import "./Breadcrumb.scss";

/**
 * BreadcrumbApp
 *
 * @class BreadcrumbApp
 * @extends {Component}
 */
class BreadcrumbApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Breadcrumb className="home__breadcrumb">
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
    );
  }
}

export default BreadcrumbApp;
