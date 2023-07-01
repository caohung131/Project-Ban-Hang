import React, { useEffect, useState,  useRef } from 'react'
// import { UncontrolledCarousel } from 'reactstrap';  
import "../Assets/detail.css"
import CollapseItem from '../components/details/CollapseItem.jsx';
import ContentTop from '../components/details/ContentTop.jsx';
import Comment from './details/Comment.jsx';
import AskAnswer from './details/AskAnswer.jsx';
import ContentLeftRight from './details/ContentLeftRight.jsx';
import { useParams } from 'react-router-dom';

  // const Images = () => <UncontrolledCarousel items={items} />;
const Index = () => {

	const params = useParams();
  const [blog,setBlog] = useState({});
  useEffect(() => {
    const id = params.blogId;
    fetch('https://6491ce492f2c7ee6c2c8efa9.mockapi.io/api/v1/blogs/'+id)
  .then((response) => {
    return response.json()
  }).then((data) => {
    console.log(data)
    setBlog(data)
  })
  },[])
  const faqRef = useRef(null);

  const scrollToFAQ = () => {
    faqRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
  <div>
  <div className="detail-container">
    {/* contetnt top */}
   <div>
    <ContentTop scrollToFAQ={scrollToFAQ}  name={blog.name}/>
   </div>
   {/* content Left and right */}
    <div>
      <ContentLeftRight 
      cost={blog.cost}
      saleCost={blog.saleCost}
      sizePhone={blog.sizePhone}
      cpu= {blog.cpu}
      imageChange1 = {blog.imageChange1}
      imageChange2 = {blog.imageChange2}
      imageChange3 = {blog.imageChange3}
      />
    </div>
  </div>
  {/* Câu hỏi */}
<div>
<div className="question">
    <h2>Câu hỏi thường gặp</h2>
    <div className="question-bo">
    {blog.contentNew && blog.contentNew.map((item,index)=> (
    <CollapseItem 
    
    key= {item.id}
    title = {item.title}
    decription = {item.decription}
     />
      )
    )}
    
   
    </div>
  </div>
  
</div>
  {/* commemnt */}
  <div>
    <Comment/>
  </div>
   {/* askanwer */}
   <div>
    <AskAnswer faqRef={faqRef} />
   </div>
  {/* check  */}
</div>

  )
}
export default Index
