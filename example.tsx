import React from "react";
import ReactDom from "react-dom";
import IconExample from "./lib/icon/example/icon.example";
import ButtonExample from "./lib/button/example/button.example";
import DialogExample from "./lib/dialog/example/dialog.example";
import LayoutExample from "./lib/layout/example/layout.axample";
import { HashRouter as Router, Route, Link } from "react-router-dom";
// import Header from "./lib/layout/header";
import Layout, { Header, Aside, Content, Footer } from "./lib/layout/layout";
const logo = require('./logo.png');
import "./example.scss";
import Icon from "./lib/icon/icon";
console.log(logo)

ReactDom.render(
  <Router>
    <Layout className="page">
      <Header className="example-header">
        <div className="logo">
          <img src={logo.default} width={48} height={48} alt=""/>
          <span>Sijun-React-UI</span>
          <a href="https://github.com/Promise-Devotion/sijun-react-ui" className="rightIcon" target="_blank">
            <Icon name={"github"}/>
          </a>
        </div>
      </Header>
      <Layout className="page-contain">
        <Aside className="example-aside">
          <h3>组件</h3>
          <ol>
            <li>
              <Link to="/icon">Icon</Link>
            </li>
            <li>
              <Link to="/button">Button 按钮</Link>
            </li>
            <li>
              <Link to="/dialog">Dialog 对话框</Link>
            </li>
            <li>
              <Link to="/layout">Layout 布局</Link>
            </li>
          </ol>
        </Aside>
        <Content className="example-content">
          <Route path="/icon" component={IconExample} />
          <Route path="/button" component={ButtonExample} />
          <Route path="/dialog" component={DialogExample} />
          <Route path="/layout" component={LayoutExample} />
        </Content>
      </Layout>
      <Footer style={{border: '1px solid cyan'}}></Footer>
    </Layout>
  </Router>,
  document.querySelector("#root")
);