import React, { useState } from 'react'


 const CollapseItem = (props) => {
    const {title,decription} = props

   const [show, setShow] = useState (false);
  return (
  
<>
<div className="question-item" onClick={()=>setShow(!show)}>
      <h2> <i className="fa-regular fa-circle-question" /> {title} </h2> 
        <i className="fa-solid fa-circle-plus" />
    </div>
    <div >
      {show === true 
      ? ( <h5>{decription}</h5>) 
      :( <h5> </h5>)}
    </div>
    </>
  )
}
export default CollapseItem