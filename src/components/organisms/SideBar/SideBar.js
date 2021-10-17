import React from "react";
import { Layout, Menu } from "antd";
import { FileTextOutlined, FieldTimeOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Sider } = Layout;
const SideBar = () => {
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      style={{
        minHeight: document.getElementsByTagName("body")[0].offsetHeight,
      }}
    >
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1" icon={<FileTextOutlined />}>
          <Link to={"/getToC"}>Get 목차</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<FieldTimeOutlined />}>
          <Link to={"/getToC"}>Post 할일</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SideBar;
