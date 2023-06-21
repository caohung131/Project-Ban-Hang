import React, { useState } from "react";
import "./admin.css";
import { DatePicker } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import gau from "./Image/avatar-gau.png";

//chart js
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

import { UserData } from "./Data.js";

// import "./Image";

//module
import Nav from "./Nav.jsx";
import ItemNav from "./ItemNav.jsx";
import ChartItem from "./ChartItem.jsx";
import TableItem from "./TableItem.jsx";
import SubCRUD from "./SubCRUD.jsx";

const Admin = () => {
  const [dataUser, setDataUser] = useState(UserData);
  // const [id, setID] = useState([])
  // const [nameProduct, setNameProduct] = useState([])
  // const [useGain, setUseGain] = useState([])
  // const [userLost, setUserLost] = useState([])
  // const [year, setYear] = useState([])

  // console.log(dataUser)

  const handleAddUser = (newUser) => {
    console.log("DDaay laf file index")
    console.log(newUser);
    setDataUser([...dataUser, newUser])
  }

  console.log("dataUser: ", dataUser)

  return (
    <div>
      <div className="page">
        <div className="nav-layout-left-main">
          <Nav></Nav>
          <ItemNav ></ItemNav>
          <ItemNav></ItemNav>
          <ItemNav></ItemNav>
          <ItemNav></ItemNav>

          <div className="itemt">
            <a href className="itemt-nav-addEvent">
              <div>
                <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>
              </div>
              <p>DashBoard</p>
              <i className="fas fa-angle-right" />
            </a>
            <div className="sub-menu">
              <a href="#">Ecommerce</a>
              <a href="#">
                <p>Analytics</p>
                <p>new</p>
              </a>
            </div>
          </div>
        </div>
        <div className="main-app">
          <div className="derectional">
            <div className="menu-nav-togger">
              <a href="#">
                <i className="fas fa-bars" />
              </a>
            </div>
            <div className="search-nav">
              <a href="#">
                <i className="fas fa-search"></i>
              </a>
              <input type="text" className="search-nav-input" />
            </div>
            <div className="nav-left-itemt">
              <div className="natification-nav">
                <i className="fas fa-bell" />
              </div>
              <div className="setting-nav">
                <i className="fas fa-cog" />
              </div>
              <div className="user-nav">
                <div className="avartar-user-nav">
                  <img src={gau} alt="" />
                </div>
                <p className="name-user">Hung</p>
                <i className="fas fa-angle-down" />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="layout-4-chart">
              <ChartItem></ChartItem>
              <ChartItem></ChartItem>
              <ChartItem></ChartItem>
              <ChartItem></ChartItem>
            </div>
            <div className="layout-sale">
              <div className="layout-sale-left">
                <h3>Sales Of The Year</h3>
                <div className="itemt-left">
                  <ChartItem></ChartItem>
                </div>
                <div className="price-itemt">
                  <div>
                    <h4>$6,308</h4>
                    <p>Total orders of this year</p>
                  </div>
                  <div>
                    <h4>$70,506</h4>
                    <p>Total revenue of this year</p>
                  </div>
                </div>
              </div>
              <div className="layout-sale-right">
                <h3>Sales Of The Year</h3>
                <div className="itemt-left">
                  <ChartItem></ChartItem>
                </div>
                <a href="#" className="download-report">
                  <i className="fab fa-instalod" />
                  <p>Download overall report</p>
                </a>
                <div className="price-itemt">
                  <div>
                    <h4>$6,308</h4>
                    <p>Total orders of this year</p>
                  </div>
                  <div>
                    <h4>$70,506</h4>
                    <p>Total revenue of this year</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="layout-recent-order">
              <div className="title-layout-recent-order">
                <h3>Recent Orders</h3>
                <div>
                  <a href="#">
                    May 12, 2023 - Jun 10, 2023
                    <i className="fas fa-sort-down" />
                  </a>
                </div>
              </div>
              <table className="table-recent-orders">
                <tbody>
                  <tr>
                    <th>Order ID</th>
                    <th>Product Name</th>
                    <th>Units</th>
                    <th>Order Date</th>
                    <th>Order Cost</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>


                  <TableItem UserData={dataUser} handleAddUser={handleAddUser}/>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* main-over */}
    </div>
  );
};

export default Admin;
