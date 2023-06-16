import React from "react";
import './admin.css'
import { DatePicker } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

//chart js
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from 'react-chartjs-2';

// import "./Image";

//module
import Nav from "./Nav.jsx";
import ItemNav from "./ItemNav.jsx";
import ChartItem from "./ChartItem.jsx";

const Admin = () => {
  return (
    <div>
      <div className="page">
        <div className="nav-layout-left-main">
        
          <Nav></Nav>
          <ItemNav></ItemNav>
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
                  <img src="./Image/avatar-gau.png" alt="" />
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
                  <canvas id="myChart5" />
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
                  <canvas id="myChart6" />
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
                  <tr>
                    <td>24541</td>
                    <td>Coach Swagger</td>
                    <td>1 Unit</td>
                    <td>Oct 20, 2018</td>
                    <td>$230</td>
                    <td>COMPLETED</td>
                    <td>
                      <button onclick>Add</button>
                      <button onclick>Delete</button>
                      <button onclick>Update</button>
                      <button onclick>Delete</button>
                    </td>
                  </tr>
                  <tr>
                    <td>24541</td>
                    <td>Coach Swagger</td>
                    <td>1 Unit</td>
                    <td>Oct 20, 2018</td>
                    <td>$230</td>
                    <td>COMPLETED</td>
                    <td>
                      <button onclick>Add</button>
                      <button onclick>Delete</button>
                      <button onclick>Update</button>
                      <button onclick>Delete</button>
                    </td>
                  </tr>
                  <tr>
                    <td>24541</td>
                    <td>Coach Swagger</td>
                    <td>1 Unit</td>
                    <td>Oct 20, 2018</td>
                    <td>$230</td>
                    <td>COMPLETED</td>
                    <td>
                      <button onclick>Add</button>
                      <button onclick>Delete</button>
                      <button onclick>Update</button>
                      <button onclick>Delete</button>
                    </td>
                  </tr>
                  <tr>
                    <td>24541</td>
                    <td>Coach Swagger</td>
                    <td>1 Unit</td>
                    <td>Oct 20, 2018</td>
                    <td>$230</td>
                    <td>COMPLETED</td>
                    <td>
                      <button onclick>Add</button>
                      <button onclick>Delete</button>
                      <button onclick>Update</button>
                      <button onclick>Delete</button>
                    </td>
                  </tr>
                  <tr>
                    <td>24541</td>
                    <td>Coach Swagger</td>
                    <td>1 Unit</td>
                    <td>Oct 20, 2018</td>
                    <td>$230</td>
                    <td>COMPLETED</td>
                    <td>
                      <button onclick>Add</button>
                      <button onclick>Delete</button>
                      <button onclick>Update</button>
                      <button onclick>Delete</button>
                    </td>
                  </tr>
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
