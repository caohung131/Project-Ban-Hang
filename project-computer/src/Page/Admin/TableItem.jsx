import { Button, Input, Modal } from "antd";
import React, { useEffect, useState } from "react";
import SubCRUD from "./SubCRUD.jsx";

const TableItem = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [year, setYear] = useState("");
  const [id, setID] = useState("");
  const [useGain, setUseGain] = useState("");
  const [userLost, setUserLost] = useState("");
  const [status, setStatus] = useState("");
  const [cost , setCost] = useState(0);

  useEffect(()=>{
    setYear(props.year)
    setID(props.id)
    setUseGain(props.useGain)
    setUserLost(props.userLost)
    setCost(props.cost)
    // console.log(props)
  }, [])
  //modal1
  const showModal = () => {
    setIsModalOpen(true);
  // console.log('userPage', props.userCount)

  };

  //

  // Modal2
  const [isModalOpen2, setIsModalOpen2] = useState(false);

  const showModal2 = () => {
    setIsModalOpen2(true);
  };
  const handleOk2 = () => {
    const newObj = {
      id: props.id,
      year: year,
      useGain: useGain,
      userLost: userLost,
      cost:cost,
    }

    console.log(newObj)

    // console.log(id)
    
    
    props.onUpdate(newObj)

    setIsModalOpen2(false);
  };
  const handleCancel2 = () => {
    setIsModalOpen2(false);
  };

  const handleOk = () => {
    const newObj = {
      id: Math.floor(Math.random() * 100000),
      year: year,
      useGain: useGain,
      userLost: userLost,
      cost: cost
    };

    // console.log(props);
    props.setData(newObj);

    setIsModalOpen(false);
  };

  const handleDelete = () => {
    console.log(props.id)
    props.onDelete(props.id);
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

  const handleOnChange5 = (e) => {
    setCost(e.target.value);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={1000}
      >
        <div className="add displayFlex"  >
          year <Input onChange={handleOnChange} className="input-user-admin"></Input>
        </div>
        <div className="displayFlex">
          unit <Input onChange={handleOnChange2} className="input-user-admin"></Input>
        </div>
        <div className="displayFlex">
          useGain <Input onChange={handleOnChange3} className="input-user-admin"></Input>
        </div>
        <div className="displayFlex">
          userLost <Input onChange={handleOnChange4} className="input-user-admin"></Input>
        </div>

        <div className="displayFlex">
          cost <Input onChange={handleOnChange5}   className="input-user-admin"></Input>
        </div>
      </Modal>

      <Modal
        title="Basic Modal"
        open={isModalOpen2}
        onOk={handleOk2}
        onCancel={handleCancel2}
        className="modalAll"
      >
        <div className="add-user-admin displayFlex">
          year <Input onChange={handleOnChange} value={year} className="input-user-admin"></Input>
        </div>
        <div className="displayFlex">
          useGain <Input onChange={handleOnChange2} value={useGain} className="input-user-admin"></Input>
        </div>
        <div className="displayFlex"> 
          userLost <Input onChange={handleOnChange3} value={userLost} className="input-user-admin"></Input>
        </div>
        <div className="displayFlex">
          status <Input onChange={handleOnChange4} value={"COMPLETED"} className="input-user-admin"></Input>
        </div>
        <div className="displayFlex">
          cost <input onChange={handleOnChange5} value={cost} className="input-user-admin"></input>
        </div>
      </Modal>
      <tr>
        <td>{props.numberIndex +1}</td>
        <td>{props.year}</td>
        <td>{props.userLost}</td>
        <td>{props.useGain}</td>
        <td>${props.cost}</td>
        <td>COMPLETED</td>
        <td>
          <Button type="primary" onClick={showModal}>Add</Button>
          <Button onClick={showModal2} danger >Update</Button>
          <Button type="primary" onClick={handleDelete} danger>Delete</Button>
        </td>
      </tr>
    </>
  );
};

export default TableItem;
