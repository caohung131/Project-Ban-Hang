import React, { useEffect, useState } from 'react'
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


  
  return (
  <div>
  <div className="detail-container">
    {/* contetnt top */}
   <div>
    <ContentTop name={blog.name}/>
   </div>
   {/* content Left and right */}
    <div>
      <ContentLeftRight/>
    </div>
  </div>
  {/* Câu hỏi */}
<div>
<div className="question">
    <h2>Câu hỏi thường gặp</h2>
    <div className="question-bo">
    <CollapseItem 
      title= 'oke'
       description='test'/>
    <CollapseItem 
      title= 'oke'
  description='test'/>
  <CollapseItem 
  title= 'oke'
  description='test'/>
    </div>
  </div>
  
</div>
  {/* commemnt */}
  <div>
    <Comment/>
  </div>
   {/* askanwer */}
   <div>
    <AskAnswer/>
   </div>
  
</div>

  )
}
export default Index
