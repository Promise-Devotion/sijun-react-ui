import React from "react";
import ReactDom from "react-dom";
import IconExample from "./lib/icon/example/icon.demo";
import InputExample from './lib/input/example/input.example';
import ButtonExample from "./lib/button/example/button.example";
import DialogExample from "./lib/dialog/example/dialog.demo";
import LayoutExample from "./lib/layout/example/layout.axample";
// import NoticeExample from './lib/notice';
import { HashRouter as Router, Route, NavLink } from "react-router-dom";
// import Header from "./lib/layout/header";
import Layout, { Header, Aside, Content, Footer } from "./lib/layout/layout";
const logo = require("./logo.png");
import "./example.scss";
import Icon from "./lib/icon/icon";
import FormExample from "./lib/form/example/form.example";
// const x = require('!!raw-loader!./lib/icon/icon.tsx')
// console.log(x)

ReactDom.render(
  <Router>
    <Layout className="page">
      <Header className="example-header">
        <div className="logo">
          <img src={logo.default} width={48} height={48} alt="" />
          <span>Sijun-React-UI</span>
          <a
            href="https://github.com/Promise-Devotion/sijun-react-ui"
            className="rightIcon"
            target="_blank"
          >
            <Icon name={"github"} />
          </a>
        </div>
      </Header>
      <Layout className="page-contain">
        <Aside className="example-aside">
          <h3 className="site-menu-group-title">组件</h3>
          <ul>
            <li>
              <NavLink to="/icon">Icon</NavLink>
            </li>
            <li>
              <NavLink to="/button">Button 按钮</NavLink>
            </li>
            <li>
              <NavLink to="/input">Input 输入框</NavLink>
            </li>
            <li>
              <NavLink to="/dialog">Dialog 对话框</NavLink>
            </li>
            <li>
              <NavLink to="/layout">Layout 布局</NavLink>
            </li>
            <li>
              <NavLink to="/form">Form表单</NavLink>
            </li>
          </ul>
        </Aside>
        <Content className="example-content">
          {/* <Route path="/" component={NoticeExample}></Route> */}
          <Route path="/icon" component={IconExample} />
          <Route path="/button" component={ButtonExample} />
          <Route path="/input" component={InputExample}></Route>
          <Route path="/dialog" component={DialogExample} />
          <Route path="/layout" component={LayoutExample} />
          <Route path="/form" component={FormExample} />
          <Footer style={{ border: "1px solid cyan" }}>Footer</Footer>
        </Content>
      </Layout>
    </Layout>
  </Router>,
  document.querySelector("#root")
);
