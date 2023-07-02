import React, { useEffect, useState } from "react";
import All from "./Component/All";
import Active from "./Component/Active";
import Complete from "./Component/Complete";

import { Carousel, Tabs } from "antd";
import DataContext from "./Component/DataContext.jsx";
import "./Component/styleToDoApp.css";
// import ReactWeather, { useOpenWeather } from 'react-open-weather';
import ReactWeather, { useOpenWeather } from "react-open-weather";

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

  const [data, setData] = useState(
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
    const setjson = JSON.stringify(data);
    localStorage.setItem("data", setjson);
  }, [data]);

  return (
    <DataContext.Provider
      value={{
        data: data,
        onChangeData: setData,
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
      </div>
    </DataContext.Provider>
  );
};

export default ToDoApp;
