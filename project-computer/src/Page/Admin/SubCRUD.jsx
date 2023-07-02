import React, { useEffect, useState } from "react";

const SubCRUD = (props) => {
  const [showSubCRUD, setShowSubCRUD] = useState(1);
  const [id, setID] = useState("");
  const [year, setYear] = useState("");
  const [date, setDate] = useState("");
  const [useGain, setUseGain] = useState("");
  const [userLost, setUserLost] = useState("");
  const [newDataUser, setNewDataUser] = useState([]);

  const handleCloseCRUD = () => {
    return showSubCRUD === 1 ? setShowSubCRUD("show") : setShowSubCRUD("");
  };


  const handleChangeId = (e) => {
    setID(e.target.value);
  };

  const handleChangeName = (e) => {
    // let value = e.target.value;
    setYear(e.target.value);
    console.log(year);

  };

  const handleChangeDate = (e) => {
    setUseGain(e.target.value);
    console.log(useGain);
    console.log(e.target.value);
  };

  const handleChangeUnit = (e) => {
    setUserLost(e.target.value);
    };

  // const handleChangeCost = (e) => {
  //   setCost(e.target.value);
  //   };

  const handleClick = (e) => {
    const newProduct = {
      id : id,
      year: year,
      date:date,
      useGain: useGain,
      userLost: userLost
    }


    // const arrayData = props;

    props.handleAddUser(newDataUser)

    setNewDataUser([...newDataUser, newProduct])
    //21
    
    // console.log(e.value)
  //  ( setShowSubCRUD('') === '' ? '' : 1 )
    
  }

  useEffect(()=>{
    setNewDataUser(props.UserData)
  }, [])

  useEffect(() => {

  })

  return (
    <div className={`sub-crud ${showSubCRUD === 1 ? "show" : ""}`}>
      <div className="close-crud" onClick={handleCloseCRUD}>
        <button className="close-btn-crud">x</button>
      </div>
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
        <td>
          <input value={1} disabled={true}/>
        </td>
        <td>
          <input name="id" onChange={handleChangeId} />
        </td>
        <td>
          <input name="name" onChange={handleChangeName} />
        </td>
        <td>
          <input name="unit" onChange={handleChangeUnit} />
        </td>
        <td>
          <input name="date" onChange={handleChangeDate} />
        </td>
        <td>
          <input name="cost"/>
        </td>
      </tr>
      <tr>
        <td>
          <button onClick={handleClick}>Add</button>
        </td>``

      </tr>
    </div>
  );
};

export default SubCRUD;