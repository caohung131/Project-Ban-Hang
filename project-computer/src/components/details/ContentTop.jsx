import React from 'react'

 const ContentTop = ({name}) => {
  return (
    <div className="detail-content-top">
      <h1>{name} </h1> 
      <a href><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" />314 đánh giá | 21 Hỏi &amp; đáp <i className="fa-solid fa-circle-plus" /> So sánh</a>
    </div>
  )
}
export default ContentTop