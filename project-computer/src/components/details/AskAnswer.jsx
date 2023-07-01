import React, { useState } from 'react'

const AskAnswer = (props) => {
  const {faqRef} = props
 const [listCom,setListCom] = useState([
  {
    com: "hafng tot"
  },
  {
    com: "hafng dep"
  },
 ])
  

  const [com,setCom] = useState('')

  const handleCom = () => {
    const newCom = {
      com: com,
    }
    setListCom ([...listCom,newCom])

  }
  const handleChangeCom = (event) => {
    setCom(event.target.value)
  }
  return (
    <div ref={faqRef} className="ask-anser">
    <div className="ask-anser-item">
      <h2>Hỏi và đáp</h2>
      <form className="choose-item-loc">
        <button className="choose-btn"><i className="fa-solid fa-magnifying-glass" /></button>
        <input className="choose-search-text" type="text" placeholder="Tìm theo nội dung..." />
      </form>
    </div>
    
    
    <div className="logo-name">NH 
    
    
    </div>
    
    
    <div  className="comm">
      <div className="comm-item" style={{display:'flex'}}>
        <input onChange={handleChangeCom} className="comm-ip" type="text" placeholder="Nhập nội dung bình luận (tiếng Việt có dấu)..." />
        <button onClick={handleCom} style={{background: '#cb1c22', borderRadius: '5px', color: '#edeeef', marginLeft: '45px', fontSize: 'large',height: '40px'}}>Gửi bình luận</button>
      </div>
      {
    listCom.map((test,index) => {
      return <div style={{border:'1px solid gray', marginTop:"5px"}}>
        Comment: {test.com},
       
      </div>
    })
   }
    </div> 
  </div>
  )
}
export  default AskAnswer