// Libs
import React, { Component } from "react";
import { Layout } from "antd";
// Styles
import "./Home.scss";
// Layouts
import LayoutApp from "@/layouts/App";
// Components
import Breadcrumb from "@/components/Home/Breadcrumb";
import HelloWorld from "@/components/Home/HelloWorld";

const { Content } = Layout;
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
      <LayoutApp>
        <Content className="home">
          <Breadcrumb />
          <HelloWorld />
        </Content>
      </LayoutApp>
    );
  }
}

export default Home;
