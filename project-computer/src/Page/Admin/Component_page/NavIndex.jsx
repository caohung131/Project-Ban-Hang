import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import { Button, Col, Menu } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NavIndex = () => {
  const navigate = useNavigate();

  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  const items = [
    getItem("Admin", "admin", <PieChartOutlined />),
    getItem("To do app", "todo", <DesktopOutlined />),
    getItem("Contact", "3", <ContainerOutlined />),
    getItem("Navigation One", "sub1", <MailOutlined />, [
      getItem("Option 5", "5"),
      getItem("Option 6", "6"),
      getItem("Option 7", "7"),
      getItem("Option 8", "8"),
    ]),
    getItem("Navigation Two", "sub2", <AppstoreOutlined />, [
      getItem("Option 9", "9"),
      getItem("Option 10", "10"),
      getItem("Submenu", "sub3", null, [
        getItem("Option 11", "11"),
        getItem("Option 12", "12"),
      ]),
    ]),
  ];

  
  const handleRedirectPage = (element)=>{
    if(element.key === "admin"){
      navigate("/admin")
    } else{
      navigate(`/admin/${element.key}`)
    console.log("element: ", element.key)
    }
    
  }

  return (
    <>
      <Col span={6} className="nav-layout-left-main">
      <div className="menu">
        <Button
          type="primary"
          onClick={toggleCollapsed}
          style={{
            marginBottom: 16,
          }}
        >
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
          items={items}
          onClick={handleRedirectPage}
        />
      </div>
      </Col>
    </>
  );
};

export default NavIndex;
