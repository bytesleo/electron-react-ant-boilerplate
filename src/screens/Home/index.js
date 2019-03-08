import React, { Component } from "react";
import "./style.scss";
import { Layout, Menu, Breadcrumb } from "antd";
import { IMAGES } from "@/config";
import HelloWorld from "@/components/HelloWorld";

const { Header, Content, Footer } = Layout;

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            style={{ lineHeight: "64px" }}
          >
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <HelloWorld />
        </Content>
        <Footer style={{ textAlign: "center" }}>
          <img className="logo-electron" src={IMAGES.LOGO} />
          electron-react-ant-boilerplate ©2019
        </Footer>
      </Layout>
    );
  }
}

export default Home;
