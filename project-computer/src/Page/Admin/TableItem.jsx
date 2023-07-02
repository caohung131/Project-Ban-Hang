import { Button, Modal } from "antd";
import React, { useEffect, useState } from "react";
import SubCRUD from "./SubCRUD.jsx";

const TableItem = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [year, setYear] = useState("");
  const [id, setID] = useState("");
  const [useGain, setUseGain] = useState("");
  const [userLost, setUserLost] = useState("");
  const [status, setStatus] = useState("");

  useEffect(()=>{
    setYear(props.year)
    setID(props.id)
    setUseGain(props.useGain)
    setUserLost(props.userLost)

  }, [])
  //modal1
  const showModal = () => {
    setIsModalOpen(true);
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
    }

    console.log(newObj)

    console.log(id)
    
    
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

      <Modal
        title="Basic Modal"
        open={isModalOpen2}
        onOk={handleOk2}
        onCancel={handleCancel2}
      >
        <div className="add">
          year <input onChange={handleOnChange} value={year}></input>
        </div>
        <div>
          unit <input onChange={handleOnChange2} value={useGain}></input>
        </div>
        <div>
          cost <input onChange={handleOnChange3} value={userLost} ></input>
        </div>
        <div>
          status <input onChange={handleOnChange4} value={"COMPLETED"}></input>
        </div>
      </Modal>
      <tr>
        <td>{props.id}</td>
        <td>{props.year}</td>
        <td>{props.userLost}</td>
        <td>{props.useGain}</td>
        <td>$230</td>
        <td>COMPLETED</td>
        <td>
          <button onClick={showModal}>Add</button>
          <button onClick={handleDelete}>Delete</button>
          <button onClick={showModal2}>Update</button>
        </td>
      </tr>
    </>
  );
};

export default TableItem;
