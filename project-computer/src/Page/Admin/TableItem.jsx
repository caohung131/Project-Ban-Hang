import { Button, Modal } from "antd";
import React, { useState } from "react";
import SubCRUD from "./SubCRUD.jsx";

const TableItem = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };


  return props.UserData.map((itemt) => (
    <>
  
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} width={1000} >
        <div>
          <SubCRUD UserData= {props.UserData} handleAddUser={props.handleAddUser}/>
        </div>
      </Modal>
      <tr>
        <td>{itemt.id}</td>
        <td>{itemt.useGain}</td>
        <td>{itemt.userLost}</td>
        <td>{itemt.year}</td>
        <td>$230</td>
        <td>COMPLETED</td>
        <td>
          <button onClick={showModal}>Add</button>
          <button >Delete</button>
          <button >Update</button>
          <button >Delete</button>
        </td>
      </tr>
    </>
  ));
};

export default TableItem;
