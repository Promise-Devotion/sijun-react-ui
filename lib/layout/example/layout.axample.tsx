import React from "react";
import Header from "../header";
import Content from "../content";
import Footer from "../footer";
import Layout from "../layout";

export default function () {
  return (
    <div>
      <div>
        <h1>布局1</h1>
        <Layout className='hi sijun'>
          <Header>Header</Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </div>
    </div>
  );
}
