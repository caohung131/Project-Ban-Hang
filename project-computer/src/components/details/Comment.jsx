import React from 'react'

 const Comment = () => {
  return (
    <>
    <div className="comment">
    <h2>Đánh giá sản phẩm</h2>
    <div className="comment-item">
      <div className="comment-item-1">
        <p>Đánh giá trung bình</p> 
        <p style={{fontSize: '50px', color: '#cb1c22', fontWeight: 'bolder'}}>5/5</p>
        <i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" />
        <p style={{opacity: '0.6'}}>448 đánh giá</p>
      </div>
      <div className="comment-item-1">
        <div className="process">
          <span className="procces-text">5<i className="fa-solid fa-star" /></span>
          <div className="process-line">
            <div style={{width: '86%'}} className="process-line-bar">
            </div>
          </div>
          <span className="procces-text">384</span>
        </div>
        <div className="process">
          <span className="procces-text">4<i className="fa-solid fa-star" /> </span>
          <div className="process-line">
            <div className="process-line-bar" style={{width: '13%'}} />
          </div>
          <span className="procces-text">84</span>
        </div>
        <div className="process">
          <span className="procces-text">3<i className="fa-solid fa-star" /></span>
          <div className="process-line">
            <div className="process-line-bar" style={{width: '40%'}}>
            </div>
          </div>
          <span className="procces-text">44</span>
        </div>
        <div className="process">
          <span className="procces-text">2<i className="fa-solid fa-star" /></span>
          <div className="process-line">
            <div className="process-line-bar" style={{backgroundColor: '#edeeef'}}>
            </div>
          </div>
          <span className="procces-text">0</span>
        </div>
        <div className="process">
          <span className="procces-text">1<i className="fa-solid fa-star" /></span>
          <div className="process-line">
            <div className="process-line-bar" style={{backgroundColor: '#edeeef'}}>
            </div>
          </div>
          <span className="procces-text">0</span>
        </div>
      </div>
      <div>
        <p>Bạn đã dùng sản phẩm này?</p>
        <button style={{background: '#cb1c22', borderRadius: '5px', color: '#edeeef', marginLeft: '45px', fontSize: 'large',height: '40px'}}>Gửi đánh giá</button>
      </div>
    </div>
  </div>
    </>
  )
}
export default Comment