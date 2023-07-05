import { LogoutOutlined } from "@ant-design/icons";
import Search from "antd/es/transfer/search";
import React from "react";
import gau from "../Image/avatar-gau.png";
import {Routes, Route} from 'react-router-dom'



const HeaderIndex = (prop) => {
  const onSearch = (value) => console.log(value);

  const handleUserHeader = () => {
    prop.setSubLogout(!prop.subLogout);
  };

  const handLogOut = () => {
    window.location = '/'
  }
  


  return (
    <>
      <div className="derectional">
        <div className="menu-nav-togger">
          <a href="#">
            <i className="fas fa-bars" />
          </a>
        </div>
        <div className="search-nav">
          <Search
            placeholder="input search text"
            allowClear
            enterButton="Search"
            size="large"
            onSearch={onSearch}
          />
        </div>
        <div className="nav-left-itemt">
          <div className="natification-nav">
            <i className="fas fa-bell" />
          </div>
          <div className="setting-nav">
            <i className="fas fa-cog" />
          </div>
          <div className="user-nav" onClick={handleUserHeader}>
            <div className="avartar-user-nav">
              <img src={gau} alt="" />
            </div>
            <p className="name-user">Hung</p>
            <i className="fas fa-angle-down" />
            <div className={`action-header-admin ${prop.subLogout ? "show" : "none"}`}>
              
              <a
                to="/"
                className="log-out"
                style={{
                  margin: 10,
                  display: "block",
                  display: "flex",
                  justifyContent: "space-evenly",
                  color: "white",
                }}
              >
                <LogoutOutlined />
                Setting
              </a>

              <a
                className="log-out"
                style={{
                  margin: 10,
                  display: "block",
                  display: "flex",
                  justifyContent: "space-evenly",
                  color: "white",
                }}
                onClick={handLogOut}
              >
                <LogoutOutlined />
                Log out
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderIndex;
