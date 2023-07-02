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

  // const currentPage = this.state.currentPage; //trang hiện tại
  // const newsPerPage = this.state.newsPerPage; //tin tức mỗi trang
  // const indexOfLastNews = currentPage * newsPerPage; //index(vị trí) tin tức cuối cùng của trang hiện tại trong mảng dữ liệu newsList
  // const indexOfFirstNews = indexOfLastNews - newsPerPage; //index(vị trí) tin tức đầu tiên của trang hiện tại trong mảng dữ liệu newsList
  // const currentTodos = prop.dataUser.slice(indexOfFirstNews, indexOfLastNews); //*cắt* dữ liệu ban đầu, lấy ra 1 mảng dữ liệu mới cho trang hiện tại
  // const pageNumbers = [];
  // for (let i = 1; i <= Math.ceil(prop.dataUser.length / newsPerPage); i++) {
  //   pageNumbers.push(i);
  // }

  //table antd
  const columns = [
    {
      title: "Full Name",
      width: 100,
      dataIndex: "name",
      key: "name",
      fixed: "left",
    },
    {
      title: "Age",
      width: 100,
      dataIndex: "age",
      key: "age",
      fixed: "left",
    },
    {
      title: "Column 1",
      dataIndex: "address",
      key: "1",
      width: 150,
    },
    {
      title: "Column 2",
      dataIndex: "address",
      key: "2",
      width: 150,
    },
    {
      title: "Column 3",
      dataIndex: "address",
      key: "3",
      width: 150,
    },
    {
      title: "Column 4",
      dataIndex: "address",
      key: "4",
      width: 150,
    },
    {
      title: "Column 5",
      dataIndex: "address",
      key: "5",
      width: 150,
      // render: () => <a><button onClick={(e)=> console.log(e)}>a</button></a>,
    },
    {
      title: "Action",
      key: "operation",
      fixed: "right",
      width: 100,
      render: (element) => (
        <>
        <Button onClick={showModal}>Add</Button>
        <Button onClick={() => console.log(element)}>Delete</Button>
        <Button onClick={() => console.log(element)}>Update</Button>
        </>
      ),
    },
  ];
  const data = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      key: i,
      name: `Edward ${i}`,
      age: 32,
      address: `London Park no. ${i}`,
    });
  }

  

  const showModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div>
        <Row className="interView" justify="space-between">
          <Col xs={24} sm={11} md={5} lg={5} className="magin-top-10px">
            <Card title="" bordered={false}>
              <Row>
                <Col xs={24} xl={6} lg={12}>
                  <PayCircleOutlined style={{ fontSize: 56, color: "green" }} />
                </Col>
                <Col xs={24} xl={18} lg={12}>
                  <Row>
                    <Col xs={24} xl={24} lg={24} style={{ fontSize: 17 }}>
                      Online Review
                    </Col>
                    <Col xs={24} xl={24} lg={24} style={{ fontSize: 17 }}>
                      <h2>
                        <CountUp start={0} end={27654} duration={4.4} />
                      </h2>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col xs={24} sm={11} md={5} lg={5} className="magin-top-10px">
            <Card title="" bordered={false}>
              <Row>
                <Col xs={24} xl={6} lg={12}>
                  <TeamOutlined style={{ fontSize: 54, color: "#1890ff" }} />
                </Col>
                <Col xs={24} xl={18} lg={12}>
                  <Row>
                    <Col xs={24} xl={24} lg={24} style={{ fontSize: 17 }}>
                      New Customers
                    </Col>
                    <Col xs={24} xl={24} lg={24} style={{ fontSize: 17 }}>
                      <h2>
                        <CountUp start={0} end={8681} duration={4.0} />
                      </h2>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col xs={24} sm={11} md={5} lg={5} className="magin-top-10px">
            <Card title="" bordered={false}>
              <Row>
                <Col xs={24} xl={6} lg={12}>
                  <MessageOutlined
                    style={{ fontSize: 54, color: "rgb(216, 151, 235)" }}
                  />
                </Col>
                <Col xs={24} xl={18} lg={12}>
                  <Row>
                    <Col xs={24} xl={24} lg={24} style={{ fontSize: 18 }}>
                      Active Projects
                    </Col>
                    <Col xs={24} xl={24} lg={24} style={{ fontSize: 18 }}>
                      <h2>
                        <CountUp start={0} end={271} duration={3.4} />
                      </h2>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col xs={24} sm={11} md={5} lg={5} className="magin-top-10px">
            <Card title="" bordered={false}>
              <Row>
                <Col xs={24} xl={6} lg={12}>
                  <ShoppingCartOutlined
                    style={{ fontSize: 54, color: "rgb(246, 152, 153)" }}
                  />
                </Col>
                <Col xs={24} xl={18} lg={12}>
                  <Row>
                    <Col xs={24} xl={24} lg={24} style={{ fontSize: 17 }}>
                      Referrals
                    </Col>
                    <Col xs={24} xl={24} lg={24} style={{ fontSize: 17 }}>
                      <h2>
                        <CountUp start={0} end={18} duration={2} />
                      </h2>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </div>
      <div className="layout-sale">
        <div className="layout-sale-left">
          <h3>Sales Of The Year</h3>
          <div className="itemt-left">
            {/* <ChartItem></ChartItem> */}
            <LineChart />
          </div>
          <div className="price-itemt">
            <div>
              <h4>$6,308</h4>
              <p>Total orders of this year</p>
              <a href="/Page/"> Admin</a>
              <a href="./Page/Admin/ToDoApp.jsx">to do app</a>
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

            {prop.dataUser.map((itemt) => {
              return (
                <TableItem
                  id={itemt.id}
                  year={itemt.year}
                  useGain={itemt.useGain}
                  userLost={itemt.userLost}
                  setData={prop.handleAdd}
                  onDelete={prop.handleOnDelete}
                  onUpdate={prop.handleUpdate}
                  setDataUser={prop.setDataUser}
                  userCount={prop.dataUser.length}
                />
              );
            })}
          </tbody>
        </table>
          {/* modal */}
          

         <Modal
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
      </Modal> 

        

        {/* table test andt */}
        <Table
          columns={columns}
          dataSource={data}
          // scroll={{
          //   x: 1500,
          //   y: 300,
          // }}
        />
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
