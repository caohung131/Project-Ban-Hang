import React, { createContext, useEffect, useState } from "react";
import All from "./Component/All";
import Active from "./Component/Active";
import Complete from "./Component/Complete";

import { Button, Carousel, Table, Tabs, Modal, Input } from "antd";
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
  // console.log(dataStorage);

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

  const [isModalOpenSubTable, setIsModalOpenSubTable] = useState(false);
  const [isModalOpenUpdate, setIsModalOpenUpdate] = useState(false);

  const [dataNewUpDate, setDataNewUpDate] = useState({})
  const [newDataLastUpdate, setNewDataLastUpdate] = useState({})

  const [titleSubAdd, setTitleSubAdd] = useState('');
  const [decriptionSubAdd, setDecriptionSubAdd] = useState('');
  const hangleOnchangeTitleSubAdd = (e) => {
    console.log('hangleOnchangeTitleSubAdd'+ e.target.value)
    setTitleSubAdd(e.target.value)
  }
  const hangleOnchangeDecriptionSubAdd = (e) => {
    console.log('hangleOnchangeDecriptionSubAdd'+ e.target.value)
    setDecriptionSubAdd(e.target.value)
  }

  //add
  const [isModalOpenSubAdd, setIsModalOpenSubAdd] = useState(false);

  const showModalSubAdd = () => {
    setIsModalOpenSubAdd(true);
  };

  const handleOkSubAdd = () => {
    const newObj = {
      title: titleSubAdd,
      decition: decriptionSubAdd,
    }

    console.log( newObj)

    setContenNew([...contenNew, newObj])
    setIsModalOpenSubAdd(false);
  };

  const handleCancelSubAdd = () => {
    setIsModalOpenSubAdd(false);
  };

  //update
  useEffect(() => {
    setBrand(dataNewUpDate.brand)
    setName(dataNewUpDate.name)
    setAvatar(dataNewUpDate.avatar)
    setCategory(dataNewUpDate.category)
    setCost(dataNewUpDate.cost)
    setSaleCost(dataNewUpDate.saleCost)
    setSizePhone(dataNewUpDate.sizePhone)
    setCpu(dataNewUpDate.cpu)
    setImageChange1(dataNewUpDate.imageChange1)
    setImageChange2(dataNewUpDate.imageChange2)
    setImageChange3(dataNewUpDate.imageChange3)
  },[dataNewUpDate])

  // console.log(newDataUpDate)
  const handleUpdateNew = () => {
    const dataUpDate = blog2.filter((item) => (dataNewUpDate.id === item.id) ? newDataLastUpdate: '') 

    console.log(dataUpDate)
    // setBlog2(dataUpDate)
  }

  const showModalUpdate = (element) => {
    console.log("showModalUpdate" + element);
    setDataNewUpDate(element)

    
    setIsModalOpenUpdate(true);
  };

  const handleOkUpdate = () => {
    // console.log('newDataLastUpdate'+newDataLastUpdate)

    const newDataUpDateObj = {
      id: dataNewUpDate.id,
      brand: brand,
      name: name,
      avatar:avatar,
      category: category,
      cost: cost,
      saleCost: saleCost,
      sizePhone: sizePhone, 
      cpu: cpu,
      imageChange1: imageChange1,
      imageChange2: imageChange2,
      imageChange3: imageChange3,

    }

    const dataUpDate = blog2.map((item) => {
      return (dataNewUpDate.id == item.id) ? (newDataUpDateObj): item
    }) 

    console.log(dataUpDate)

    setBlog2(dataUpDate)

    // handleUpdateNew();
    setIsModalOpenUpdate(false);
  };

  const handleCancelUpdate = () => {
    setIsModalOpenUpdate(false);
  };

  const showModalSubTable = () => {
    setIsModalOpenSubTable(true);
  };
  const handleOkSubTable = () => {
    setIsModalOpenSubTable(false);
  };
  const handleCancelSubTable = () => {
    setIsModalOpenSubTable(false);
  };

  const [brand, setBrand] = useState("");
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [category, setCategory] = useState("");
  const [contentNew, setContentNew] = useState("");
  const [cost, setCost] = useState("");
  const [saleCost, setSaleCost] = useState("");
  const [sizePhone, setSizePhone] = useState("");
  const [cpu, setCpu] = useState("");
  const [imageChange1, setImageChange1] = useState("");
  const [imageChange2, setImageChange2] = useState("");
  const [imageChange3, setImageChange3] = useState("");

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    const newObj = {
      id: Math.floor(Math.random() * 100000),
      brand: brand,
      name: name,
      category: category,
      avatar: avatar,

      //
      cost: cost,
      saleCost: saleCost,
      sizePhone: sizePhone,
      cpu: cpu,
      imageChange1: imageChange1,
      imageChange2: imageChange2,
      imageChange3: imageChange3,
    };

    setBlog2([...blog2, newObj]);

    console.log("newObj" + newObj);
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleOnChangeBrand = (e) => {
    console.log("handleOnChangeBrand " + e.target.value);
    setBrand(e.target.value);
  };
  const handleOnChangeAvatar = (e) => {
    console.log("handleOnChangeAvatar " + e.target.value);
    setAvatar(e.target.value);
  };
  const handleOnChangeCategory = (e) => {
    console.log("handleOnChangeCategory " + e.target.value);
    setCategory(e.target.value);
  };
  const handleOnChangeName = (e) => {
    console.log("handleOnChangeName " + e.target.value);
    setName(e.target.value);
  };
  const handleOnChangeCost = (e) => {
    console.log("handleOnChangeCost " + e.target.value);
    setCost(e.target.value);
  };
  const handleOnChangeSaleCost = (e) => {
    console.log("handleOnChangeSaleCost " + e.target.value);
    setSaleCost(e.target.value);
  };
  const handleOnChangeSizePhone = (e) => {
    console.log("handleOnChangeSizePhone " + e.target.value);
    setSizePhone(e.target.value);
  };
  const handleOnChangeCpu = (e) => {
    console.log("handleOnChangeCpu " + e.target.value);
    setCpu(e.target.value);
  };
  const handleOnChangeImageChange1 = (e) => {
    console.log("handleOnChangeImageChange1 " + e.target.value);
    setImageChange1(e.target.value);
  };
  const handleOnChangeImageChange2 = (e) => {
    console.log("handleOnChangeImageChange2 " + e.target.value);
    setImageChange2(e.target.value);
  };
  const handleOnChangeImageChange3 = (e) => {
    console.log("handleOnChangeImageChange3 " + e.target.value);
    setImageChange3(e.target.value);
  };

  const handleDeleteOnTable = (e) => {
    console.log(e);
  };

  //

  const [blog2, setBlog2] = useState([]);
  useEffect(() => {
    fetch("https://6491ce492f2c7ee6c2c8efa9.mockapi.io/api/v1/blogs/")
      .then((response2) => {
        return response2.json();
      })
      .then((data2) => {
        // console.log(data2);
        setBlog2(data2);
      });
  }, []);

  // blog2.map((items) => console.log(items));

  const [contenNew, setContenNew] = useState([
    { title: "aaa", decition: "decription" },
    { title: "aaa", decition: "decription" },
  ])

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
      fixed: "left",
      render: (element) => (
        <>
          <Button onClick={showModal}>Add</Button>
          <Modal
            title="Basic Modal"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            width={1000}
          >
            <div className="add displayFlex">
              Brand{" "}
              <Input
                onChange={handleOnChangeBrand}
                className="input-user-admin"
              ></Input>
            </div>
            <div className="displayFlex">
              Name{" "}
              <Input
                className="input-user-admin"
                onChange={handleOnChangeName}
              ></Input>
            </div>
            <div className="displayFlex">
              Avatar{" "}
              <Input
                className="input-user-admin"
                onChange={handleOnChangeAvatar}
              ></Input>
            </div>
            <div className="displayFlex">
              Category{" "}
              <Input
                className="input-user-admin"
                onChange={handleOnChangeCategory}
              ></Input>
            </div>
            <p>ContentNew </p>
            <div className="displayFlex">
              {contenNew.map((itemt) => (
                <div
                  className="displayFlex width100"
                  style={{ display: "flex", flexWrap: "wrap" }}
                >
                  <div className="width100 space-evenly">
                    {" "}
                    title
                    <Input
                      className="input-user-admin"
                      value={itemt.title}
                    ></Input>
                  </div>
                  <div className="width100">
                    {" "}
                    decription
                    <Input
                      className="input-user-admin"
                      value={itemt.decition}
                     
                    ></Input>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <Button onClick={showModalSubAdd}>Add mod contentNew</Button>
              <Modal
                title="Basic Modal"
                open={isModalOpenSubAdd}
                onOk={handleOkSubAdd}
                onCancel={handleCancel}
              >
              <div className="displayFlex">
                <div
                  className="displayFlex width100"
                  style={{ display: "flex", flexWrap: "wrap" }}
                >
                  <div className="width100 space-evenly">
                    {" "}
                    title
                    <Input
                      className="input-user-admin"
                      onChange={hangleOnchangeTitleSubAdd}
                    ></Input>
                  </div>
                  <div className="width100">
                    {" "}
                    decription
                    <Input
                      className="input-user-admin"
                      onChange={hangleOnchangeDecriptionSubAdd}
                    ></Input>
                  </div>
                </div>
            </div>
              </Modal>
            </div>

            <div className="displayFlex">
              Cost{" "}
              <Input
                className="input-user-admin"
                onChange={handleOnChangeCost}
              ></Input>
            </div>
            <div className="displayFlex">
              Sale Cost{" "}
              <Input
                className="input-user-admin"
                onChange={handleOnChangeSaleCost}
              ></Input>
            </div>
            <div className="displayFlex">
              Size Phone{" "}
              <Input
                className="input-user-admin"
                onChange={handleOnChangeSizePhone}
              ></Input>
            </div>
            <div className="displayFlex">
              Cpu{" "}
              <Input
                className="input-user-admin"
                onChange={handleOnChangeCpu}
              ></Input>
            </div>
            <div className="displayFlex">
              ImageChange1{" "}
              <Input
                className="input-user-admin"
                onChange={handleOnChangeImageChange1}
              ></Input>
            </div>
            <div className="displayFlex">
              ImageChange2{" "}
              <Input
                className="input-user-admin"
                onChange={handleOnChangeImageChange2}
              ></Input>
            </div>
            <div className="displayFlex">
              ImageChange3{" "}
              <Input
                className="input-user-admin"
                onChange={handleOnChangeImageChange3}
              ></Input>
            </div>
          </Modal>

          {/* delete */}
          <Button
            onClick={() => {
              console.log(element.id);
              const newDataDelete = data2.filter(
                (item) => Number(item.id) !== Number(element.id)
              );
              // console.log(newDataDelete)
              return setBlog2(newDataDelete);
            }}
          >
            Delete
          </Button>
          <Button onClick={() => showModalUpdate(element)}>Update</Button>

          <Modal
            title="Basic Modal"
            open={isModalOpenUpdate}
            onOk={handleOkUpdate}
            onCancel={handleCancelUpdate}
            width={1000}
          >
            <div className="add displayFlex">
              Brand{" "}
              <Input
                onChange={handleOnChangeBrand}
                className="input-user-admin"
                value={brand}
              ></Input>
            </div>
            <div className="displayFlex">
              Name{" "}
              <Input
                className="input-user-admin"
                onChange={handleOnChangeName}
                value={name}
              ></Input>
            </div>
            <div className="displayFlex">
              Avatar{" "}
              <Input
                className="input-user-admin"
                onChange={handleOnChangeAvatar}
                value={avatar}
              ></Input>
            </div>
            <div className="displayFlex">
              Category{" "}
              <Input
                className="input-user-admin"
                onChange={handleOnChangeCategory}
                value={category}
              ></Input>
            </div>
            <p>ContentNew </p>
            <div className="displayFlex">
              {contenNew.map((itemt) => (
                <div
                  className="displayFlex width100"
                  style={{ display: "flex", flexWrap: "wrap" }}
                >
                  <div className="width100 space-evenly">
                    {" "}
                    title
                    <Input
                      className="input-user-admin"
                      value={itemt.title}
                    ></Input>
                  </div>
                  <div className="width100">
                    {" "}
                    decription
                    <Input
                      className="input-user-admin"
                      value={itemt.decition}
                    ></Input>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <Button>Add mod contentNew</Button>
              <Modal
                title="Basic Modal"
                open={isModalOpenSubTable}
                onOkSubTable={handleOk}
                onCancelSubTable={handleCancel}
              >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
              </Modal>
            </div>

            <div className="displayFlex">
              Cost{" "}
              <Input
                className="input-user-admin"
                onChange={handleOnChangeCost}
                value={cost}
              ></Input>
            </div>
            <div className="displayFlex">
              Sale Cost{" "}
              <Input
                className="input-user-admin"
                onChange={handleOnChangeSaleCost}
                value={saleCost}
              ></Input>
            </div>
            <div className="displayFlex">
              Size Phone{" "}
              <Input
                className="input-user-admin"
                onChange={handleOnChangeSizePhone}
                value={sizePhone}
              ></Input>
            </div>
            <div className="displayFlex">
              Cpu{" "}
              <Input
                className="input-user-admin"
                onChange={handleOnChangeCpu}
                value={cpu}
              ></Input>
            </div>
            <div className="displayFlex">
              ImageChange1{" "}
              <Input
                className="input-user-admin"
                onChange={handleOnChangeImageChange1}
                value={imageChange1}
              ></Input>
            </div>
            <div className="displayFlex">
              ImageChange2{" "}
              <Input
                className="input-user-admin"
                onChange={handleOnChangeImageChange2}
                value={imageChange2}
              ></Input>
            </div>
            <div className="displayFlex">
              ImageChange3{" "}
              <Input
                className="input-user-admin"
                onChange={handleOnChangeImageChange3}
                value={imageChange3}
              ></Input>
            </div>
          </Modal>
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

  blog2.map((items, index) =>
    data2.push({
      id: items.id,
      key: index,
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
      imageChange3: items.imageChange3,
    })
  );

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

        <h3 style={{ marginTop: 40 }}> Product Table</h3>
        <hr />
        <div className="table-pageTodoap">
          {/* table test andt */}
          <Table
            columns={columns}
            dataSource={data2}
            className="table-pageTodoapMain"
            xs={24}
            xm={24}
            md={24}
            lg={24}
            xl={24}
          />
        </div>
      </div>
    </DataContext.Provider>
  );
};

export default ToDoApp;
