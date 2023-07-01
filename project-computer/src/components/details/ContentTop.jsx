import React from 'react'

 const ContentTop = ({name,scrollToFAQ }) => {
  return (
    <div className="detail-content-top">
      <h1>{name} </h1> 
      <h5 style={{cursor:'pointer', color:'rgb(203, 28, 34)'}} onClick={scrollToFAQ} href><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" />  Hỏi &amp; đáp </h5>
    </div>
  )
}
export default ContentTop