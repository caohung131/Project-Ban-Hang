import React, { useState } from "react";
import LineChart from "../Component_chart/LineChart";
import PieChart from "../Component_chart/Piechart";
import TableItem from "../TableItem";
import { Button, Card, Col, Modal, Pagination, Row, Table } from "antd";
import {
  MessageOutlined,
  PayCircleOutlined,
  ShoppingCartOutlined,
  TeamOutlined,
  UpCircleOutlined,
} from "@ant-design/icons";
// import CountUp from "react-countup/build/CountUp";
import CountUp from "react-countup";
import InterViewDashboard from "./InterViewDashboard";
import Item from "antd/es/list/Item";

const MainDashBoard = (prop) => {

  const handleOk = () => {
    // const newObj = {
    //   id: Math.floor(Math.random() * 100000),
    //   year: year,
    //   useGain: useGain,
    //   userLost: userLost,
    // };

    // // console.log(props);
    // props.setData(newObj);

    // setIsModalOpen(false);

    console.log('ok')
  };

  const handleDelete = () => {
    console.log('delete')
    // props.onDelete(props.id);
  };

  const handleOnChange = (e) => {
    console.log(year)
    setYear(e.target.value);
  };

  const handleOnChange2 = (e) => {
    console.log(useGain)
    setUseGain(e.target.value);
  };

  const handleOnChange3 = (e) => {
    console.log(userLost)
    setUserLost(e.target.value);
  };

  const handleOnChange4 = (e) => {
    setStatus(e.target.value);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  //page number
  const itemRender = (_, type, originalElement) => {
    if (type === "prev") {
      return <a>Previous</a>;
    }
    if (type === "next") {
      return <a>Next</a>;
    }
    return originalElement;
  };

  const handeleGoToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [year, setYear] = useState("");
  const [id, setID] = useState("");
  const [useGain, setUseGain] = useState("");
  const [userLost, setUserLost] = useState("");
  const [status, setStatus] = useState("");
  const [cost , setCost] =useState("");


  // const currentPage = this.state.currentPage; //trang hiện tại
  // const newsPerPage = this.state.newsPerPage; //tin tức mỗi trang
  // const indexOfLastNews = currentPage * newsPerPage; //index(vị trí) tin tức cuối cùng của trang hiện tại trong mảng dữ liệu newsList
  // const indexOfFirstNews = indexOfLastNews - newsPerPage; //index(vị trí) tin tức đầu tiên của trang hiện tại trong mảng dữ liệu newsList
  // const currentTodos = prop.dataUser.slice(indexOfFirstNews, indexOfLastNews); //*cắt* dữ liệu ban đầu, lấy ra 1 mảng dữ liệu mới cho trang hiện tại
  // const pageNumbers = [];
  // for (let i = 1; i <= Math.ceil(prop.dataUser.length / newsPerPage); i++) {
  //   pageNumbers.push(i);
  // }

  

  const [countCostUser, setCountCostUser] = useState(0);
  

  
  let init = 0;
  const getCountCost = prop.dataUser.forEach(element => {
    init += element.cost
  });

  // setCountCostUser(init)
  // console.log(init)
  // setCountCostUser(getCountCost)


  return (
    <>
      <div>
        <InterViewDashboard />
      </div>
      <div className="layout-sale">
        <div className="layout-sale-left">
          <h3>Sales Of The Year</h3>
          <div className="itemt-left">
            {/* <ChartItem></ChartItem> */}
            <LineChart 
              // dataUser={prop.dataUser}
              // countCostUser={prop.countCostUser}
              // countUser = {prop.countUser}
            />
          </div>
          <div className="price-itemt">
            <div>
              <h4>${init}</h4>
              <p>Total cost user</p>
            </div>
            <div>
              <h4>$70,506</h4>
              <p>Total revenue of this year</p>
            </div>
          </div>
        </div>
        <div className="layout-sale-right">
          <h3>Quick stats</h3>
          <div className="itemt-left">
            <PieChart />
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
          <h3>User Table</h3>
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

            {prop.dataUser.map((itemt, index) => {
              return (
                <TableItem
                  numberIndex={index}
                  id={itemt.id}
                  year={itemt.year}
                  useGain={itemt.useGain}
                  userLost={itemt.userLost}
                  setData={prop.handleAdd}
                  onDelete={prop.handleOnDelete}
                  onUpdate={prop.handleUpdate}
                  setDataUser={prop.setDataUser}
                  userCount={prop.dataUser.length +1}
                  cost={itemt.cost}
                  setCost={setCost}
                />
              );
            })}
          </tbody>
        </table>
          {/* modal */}
          

         {/* <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={1000}
      >
        <div className="add">
          year <input onChange={handleOnChange}></input>
        </div>
        <div>
          unit <input onChange={handleOnChange2}></input>
        </div>
        <div>
          useGain <input onChange={handleOnChange3}></input>
        </div>
        <div>
          userLost <input onChange={handleOnChange4}></input>
        </div>
        <div>
          userLost <input onChange={handleOnChange}></input>
        </div>
      </Modal>  */}

        

       
        {/* <Pagination total={500} itemRender={itemRender} /> */}
        <button
          onClick={handeleGoToTop}
          className={prop.goToTop ? "show" : "none"}
          style={{
            fontSize: 50,
            backgroundColor: "white",
            position: "fixed",
            right: "0",
            bottom: "0",
            padding: "50",
            border: "none",
          }}
        >
          <UpCircleOutlined />
        </button>

      </div>
    </>
  );
};

export default MainDashBoard;
