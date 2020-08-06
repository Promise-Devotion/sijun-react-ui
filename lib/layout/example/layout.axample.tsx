import React from "react";
import Layout, { Header, Aside, Content, Footer } from "../layout";
import "./layout.example.scss";

export default function () {
  return (
    <div>
      <div>
        <h1>布局1</h1>
        <Layout className="x-layout">
          <Header className="x-header">Header</Header>
          <Content className="x-content">Content</Content>
          <Footer className="x-footer">Footer</Footer>
        </Layout>
      </div>
      <div>
        <h1>布局2</h1>
        <Layout className="x-layout">
          <Header className="x-header">Header</Header>
          <Layout>
            <Aside className="x-aside">Aside</Aside>
            <Content className="x-content">Content</Content>
          </Layout>
          <Footer className="x-footer">Footer</Footer>
        </Layout>
      </div>
      <div>
        <h1>布局3</h1>
        <Layout className="x-layout">
          <Header className="x-header">Header</Header>
          <Layout className="x-layout">
            <Content className="x-content">Content</Content>
            <Aside className="x-aside">Aside</Aside>
          </Layout>
          <Footer className="x-footer">Footer</Footer>
        </Layout>
      </div>
      <div>
        <h1>布局4</h1>
        <Layout>
          <Aside className="x-aside">Aside</Aside>
          <Layout className="x-layout">
            <Header className="x-header">Header</Header>
            <Content className="x-content">Content</Content>
            <Footer className="x-footer">Footer</Footer>
          </Layout>
        </Layout>
      </div>
    </div>
  );
}
