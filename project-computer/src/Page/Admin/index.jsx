import React, { useContext, useEffect, useState } from "react";
import "./admin.css";
import { Card, Col, DatePicker, Pagination, Row } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import gau from "./Image/avatar-gau.png";

//router
import { Routes, Route } from "react-router-dom";

//chart js
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

//Import Context Admin
// import DataContextAll from "./DataContextAll.jsx";

//module
import Nav from "./Nav.jsx";
import ItemNav from "./ItemNav.jsx";
import ChartItem from "./ChartItem.jsx";
import TableItem from "./TableItem.jsx";
import SubCRUD from "./SubCRUD.jsx";
import BarChart from "./Component_chart/BarChart";
import LineChart from "./Component_chart/LineChart";
import PieChart from "./Component_chart/Piechart";

//
import { Icon } from "antd";

import {
  AppstoreOutlined,
  ContainerOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuUnfoldOutlined,
  AccountBookOutlined,
  UpCircleOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Button, Menu } from "antd";
import Search from "antd/es/input/Search";
import Link from "antd/es/typography/Link";
import ToDoApp from "./ToDoApp";
import NavIndex from "./Component_page/NavIndex";
import HeaderIndex from "./Component_page/HeaderIndex";
import MainDashBoard from "./Component_page/MainDashBoard";

const Admin = () => {
  const UserData = [
    {
      id: 1,
      year: 1990,
      useGain: "Geilenkirchen Air Base",
      userLost: "mdober0",
      cost: 297
    },
    {
      id: 2,
      year: 2012,
      useGain: "Cluff Lake Airport",
      userLost: "mfanthom1",
      cost: 230,
    },
    {
      id: 3,
      year: 1992,
      useGain: "Baytown Airport",
      userLost: "abarrett2",

      cost: 230,
    },
    {
      id: 4,
      year: 2000,
      useGain: "Taszár Air Base",
      userLost: "bbetteridge3",
      cost: 230,
    },
    {
      id: 5,
      year: 1999,
      useGain: "Alma Airport",
      userLost: "cpexton4",

      cost: 230,
    },
    {
      id: 6,
      year: 2006,
      useGain: "Greenlee County Airport",
      userLost: "dbraisher5",

      cost: 230,
    },
    {
      id: 7,
      year: 2003,
      useGain: "Satna Airport",
      userLost: "dsimmonds6",

      cost: 230,
    },
    {
      id: 8,
      year: 2007,
      useGain: "Bomai Airport",
      userLost: "adobbings7",

      cost: 230,
    },
    {
      id: 9,
      year: 2000,
      useGain: "Regional Orlando Villas Boas Airport",
      userLost: "cbrymham8",

      cost: 230,
    },
    {
      id: 10,
      year: 2008,
      useGain: "Colorado Plains Regional Airport",
      userLost: "sravenscroftt9",
      cost: 230,
    },
    {
      id: 11,
      year: 2011,
      useGain: "Cleve Airport",
      userLost: "mnewtona",

      cost: 230,
    },
    {
      id: 12,
      year: 2006,
      useGain: "Hancock County-Bar Harbor Airport",
      userLost: "zdevereuxb",

      cost: 230,
    },
    {
      id: 13,
      year: 2001,
      useGain: "Paruma Airport",
      userLost: "tbearhamc",

      cost: 230,
    },
    {
      id: 14,
      year: 1994,
      useGain: "Paso Robles Municipal Airport",
      userLost: "ccrummyd",

      cost: 230,
    },
    {
      id: 15,
      year: 2001,
      useGain: "Codrington Airport",
      userLost: "ecorsore",

      cost: 230,
    },
    {
      id: 16,
      year: 1999,
      useGain: "K. D. Matanzima Airport",
      userLost: "rmaplesdenf",
      cost: 230,
    },
    {
      id: 17,
      year: 2002,
      useGain: "Batuna Aerodrome",
      userLost: "ctresslerg",

      cost: 230,
    },
    {
      id: 18,
      year: 2004,
      useGain: "Roosevelt Municipal Airport",
      userLost: "jhagerghamh",
      cost: 230,
    },
    {
      id: 19,
      year: 1999,
      useGain: "Kiunga Airport",
      userLost: "aperigoi",

      cost: 230,
    },
    {
      id: 20,
      year: 1996,
      useGain: "Eliye Springs Airport",
      userLost: "gmalpasj",

      cost: 230,
    },
  ];


  

  const [goToTop, setGoToTop] = useState(false);
  const [subLogout, setSubLogout] = useState(false);

  // console.log(data)
  const [dataUser, setDataUser] = useState([...UserData]);

  // dataUser.map((itemt) => itemt.)
  // const DataContextAll = useContext(DataContextAll);

  const handleOnDelete = (id) => {
    const dataFilter = dataUser.filter((itemt) => {
      return itemt.id !== id;
    });
    setDataUser(dataFilter);
  };

  {
    console.log(dataUser);
  }

  const handleUpdate = (newObjUpdate) => {
    const listNewData = dataUser.map((itemt) => {
      return itemt.id === newObjUpdate.id
        ? {
            id: newObjUpdate.id,
            year: newObjUpdate.year,
            userLost: newObjUpdate.userLost,
            useGain: newObjUpdate.useGain,
            cost: newObjUpdate.cost
          }
        : itemt;
    });

    console.log(listNewData);
    setDataUser(listNewData);
  };

  const handleAdd = (newUser) => {
    // console.log(newUser)
    setDataUser([...dataUser, newUser]);

    // dataUser.push(newUser)
    // setDataUser(listDataOld);
  };

  
  
 
  // //
  // // console.log('countUserCost'+countUserCost)

//   const countUser = () => {
//     dataUser.map((itemt) => {
//         return setCountCostUser( countCostUser += itemt.cost)
//     })
// }

  // console.log('countUser()'+countUser())

  //GO top top
  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log(window.scrollY);
      if (window.scrollY >= 200) {
        setGoToTop(true);
      } else {
        setGoToTop(false);
      }
    });
  }, []);

  return (
    <>
      <Row className="page" justify="space-between">
        <NavIndex />
        <Col span={17} className="main-app">
          <HeaderIndex setSubLogout={setSubLogout} subLogout={subLogout} />
          {/* <div className="container"> */}
          <Routes>
            <Route
              path="/admin"
              element={
                <MainDashBoard
                  dataUser={dataUser}
                  handleAdd={handleAdd}
                  handleOnDelete={handleOnDelete}
                  handleUpdate={handleUpdate}
                  setDataUser={setDataUser}
                  goToTop={goToTop}
                  countUser={dataUser.length + 1}
                />
              }
            />
            <Route path="/admin/todo" element={<ToDoApp></ToDoApp>} />
          </Routes>
          {/* </div> */}
        </Col>
      </Row>

      {/* main-over */}
    </>
  );
};

export default Admin;
