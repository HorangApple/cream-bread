import React from "react";
import { Layout } from "antd";

import MainLayoutStyleWrapper from "./MainLayoutStyleWrapper";

const { Header, Content, Footer } = Layout;

const MainLayout = (props) => {
  const { Side, Contents } = props;
  return (
    <MainLayoutStyleWrapper>
      <Layout>
        <Side />
        <Layout>
          <Header
            className="site-layout-sub-header-background"
            style={{ padding: 0 }}
          >
            <div className={"header"}>🍞</div>
          </Header>
          <Content style={{ margin: "24px 16px 0" }}>
            <Contents />
          </Content>
          <Footer style={{ textAlign: "center" }}>
            CreamBread ©2021 Created by JM
          </Footer>
        </Layout>
      </Layout>
    </MainLayoutStyleWrapper>
  );
};

export default MainLayout;
