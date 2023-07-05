import React, { createContext, useEffect, useState } from "react";
import All from "./Component/All";
import Active from "./Component/Active";
import Complete from "./Component/Complete";

import { Button, Carousel, Table, Tabs } from "antd";
import DataContext from "./Component/DataContext.jsx";
import "./Component/styleToDoApp.css";
// import ReactWeather, { useOpenWeather } from 'react-open-weather';
import ReactWeather, { useOpenWeather } from "react-open-weather";
import { json } from "react-router-dom";


const onChange = (key) => {
  console.log(key);
};

//tabs andt
const items = [
  {
    key: "1",
    label: `All`,
    children: <All />,
  },
  {
    key: "2",
    label: `Active`,
    children: <Active />,
  },
  {
    key: "3",
    label: `Completed`,
    children: <Complete />,
  },
];

//carosel
const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const ToDoApp = () => {
  const dataJson = localStorage.getItem("data");
  const dataStorage = JSON.parse(dataJson);
  console.log(dataStorage);

  const [dataTodoApp, setDataTodoApp] = useState(
    dataStorage
      ? dataStorage
      : [
          {
            id: Math.floor(Math.random() * 100000),
            value: "Do some thing",
            checked: false,
          },
          {
            id: Math.floor(Math.random() * 100000),
            value: "Do some thing 2",
            checked: false,
          },
        ]
  );

  //day data
  useEffect(() => {
    const setjson = JSON.stringify(dataTodoApp);
    localStorage.setItem("data", setjson);
  }, [dataTodoApp]);

 
  
  //table antd
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [blog2,setBlog2] = useState([]);
  useEffect(() => {
    
    fetch('https://6491ce492f2c7ee6c2c8efa9.mockapi.io/api/v1/blogs/')
  .then((response2) => {
    return response2.json()
  }).then((data2) => {
    console.log(data2)
    setBlog2(data2)
  })
  },[])

  blog2.map((items)=>   console.log(items))


  

  
  const columns = [
    {
      title: "ID",
      width: 100,
      dataIndex: "key",
      key: "key",
      fixed: "left",
    },
    {
      title: "Full Name",
      width: 100,
      dataIndex: "name",
      key: "name",
      fixed: "left",
    },
    {
      title: "Brand",
      width: 100,
      dataIndex: "brand",
      key: "brand",
      fixed: "left",
    },
    // {
    //   title: "Avatar",
    //   dataIndex: "avatar",
    //   key: "avatar",
    //   fixed: "left",
    //   width: 100,

    // },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      fixed: "left",

    },
    {
      title: "Cost",
      dataIndex: "cost",
      key: "cost",
      fixed: "left",

    },
    {
      title: "Sale Cost",
      dataIndex: "saleCost",
      key: "saleCost",
      fixed: "left",

    },
    {
      title: "sizePhone",
      dataIndex: "sizePhone",
      key: "sizePhone",
      fixed: "left",

      // render: () => <a><button onClick={(e)=> console.log(e)}>a</button></a>,
    },
    {
      title: "cpu",
      dataIndex: "cpu",
      key: "cpu",
      fixed: "left",

      // render: () => <a><button onClick={(e)=> console.log(e)}>a</button></a>,
    },
   
    {
      title: "Action",
      key: "operation",
      fixed: "right",
      width: 100,
      fixed: 'left',
      render: (element) => (
        <>
          <Button onClick={showModal}>Add</Button>
          <Button onClick={() => console.log(element)}>Delete</Button>
          <Button onClick={() => console.log(element)}>Update</Button>
        </>
      ),
    },
  ];
  const data2 = [];
  // for (let i = 0; i < 100; i++) {
  //   data2.push({
  //     key: i,
  //     name: `Edward ${i}`,
  //     age: 32,
  //     address: `London Park no. ${i}`,
  //   });
  // }

  blog2.map(items => data2.push({
    key: items.id,
    name: items.name,
    brand: items.brand,
    avatar: items.avatar,
    category: items.category,
    contentNew: items.contentNew,
    cost: items.cost,
    saleCost: items.saleCost,
    sizePhone: items.sizePhone,
    cpu: items.cpu,
    imageChange1: items.imageChange1,
    imageChange2: items.imageChange2,
    imageChange3: items.imageChange3
  }))

  const showModal = () => {
    setIsModalOpen(true);
  };


  return (

    
    <DataContext.Provider
      value={{
        data: dataTodoApp,
        onChangeData: setDataTodoApp,
      }}
    >
      <div className="container">
        <div className="pageToDo">
          <div className="content-main-left ">
            <div className="toDoApp">
              <h1 style={{ textAlign: "center" }}>#To do</h1>
              <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
            </div>
          </div>

          <div className="content-main-right">
            <Carousel autoplay style={{ width: 700 }}>
              <div style={contentStyle}>
                <div className="item-quote">
                  <div className="img-quote">
                    <img
                      src="https://dybedu.com.vn/wp-content/uploads/anh-gau-truc-cute-chibi.png"
                      className="image"
                    />
                  </div>
                  <div className="Quote-title">
                    “To live is the rarest thing in the world. Most people
                    exist, that is all.”
                  </div>
                  <div className="Quote-name">― Oscar Wilde</div>
                </div>
              </div>
              <div style={contentStyle}>
                <div className="item-quote">
                  <div className="img-quote">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIDrjhezlx17Gmyf1QEzRR7spPeM14PfPLtoTcz4O5SJ-brXo4AEv9Shd7xDHpwWVfRN0&usqp=CAU"
                      className="image"
                    />
                  </div>
                  <div className="Quote-title">
                    “To live is the rarest thing in the world. Most people
                    exist, that is all.”
                  </div>
                  <div className="Quote-name">― Oscar Wilde</div>
                </div>
              </div>
              <div style={contentStyle}>
                <div className="item-quote">
                  <div className="img-quote">
                    <img
                      src="https://antimatter.vn/wp-content/uploads/2022/04/anh-gau-trang-1.jpg"
                      className="image"
                    />
                  </div>
                  <div className="Quote-title">
                    “To live is the rarest thing in the world. Most people
                    exist, that is all.”
                  </div>
                  <div className="Quote-name">― Oscar Wilde</div>
                </div>
              </div>

              <div style={contentStyle}>
                <div className="item-quote">
                  <div className="img-quote">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmBRGKlOvJjaFA1MFGq5CRubidNzWIxVEioAHQZ_HNbNetT-xj7BSaqfdUUYiYdcXmq3E&usqp=CAU"
                      className="image"
                    />
                  </div>
                  <div className="Quote-title">
                    “To live is the rarest thing in the world. Most people
                    exist, that is all.”
                  </div>
                  <div className="Quote-name">― Oscar Wilde</div>
                </div>
              </div>
            </Carousel>
          </div>
        </div>

        <h3 style={{marginTop: 40}}> Product Table</h3>
        <hr/>
        <div className="table-pageTodoap">
          {/* table test andt */}
          <Table columns={columns} dataSource={data2} className="table-pageTodoapMain" xs={24} xm={24} md={24} lg={24} xl={24} />
        </div>
      </div>
    </DataContext.Provider>
  );
};

export default ToDoApp;
