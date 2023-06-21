import React from 'react'

const AskAnswer = () => {
  return (
    <div className="ask-anser">
    <div className="ask-anser-item">
      <h2>Hỏi và đáp</h2>
      <form className="choose-item-loc">
        <button className="choose-btn"><i className="fa-solid fa-magnifying-glass" /></button>
        <input className="choose-search-text" type="text" placeholder="Chọn sản phẩm khác" />
      </form>
    </div>
    
    
    <div className="logo-name">NH 
    
    
    </div>
    
    
    <div className="comm">
      <div className="comm-item" style={{display:'flex'}}>
        <input className="comm-ip" type="text" placeholder="Nhập nội dung bình luận (tiếng Việt có dấu)..." />
        <button style={{background: '#cb1c22', borderRadius: '5px', color: '#edeeef', marginLeft: '45px', fontSize: 'large',height: '40px'}}>Gửi bình luận</button>
      </div>
    </div> 
  </div>
  )
}
export  default AskAnswer