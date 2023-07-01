import React, { useEffect, useState } from "react";
import Cardproduct from "./Cardproduct";
import Productcarousel from "../Layout/Productcarousel";
import Productvid from "../Layout/Productvid";

const Homepage = () => {
  const [listProduct, setListProduct] = useState([])
  const [page, setPage] = useState(1)
  const handleSelectPage = (pg) => {
    setPage(pg)
  }
const [load, setLoad] = useState(true)
  useEffect(() => {
    fetch(`https://6491ce492f2c7ee6c2c8efa9.mockapi.io/api/v1/blogs?page=${page}&limit=8`)
  .then((response) => {
    return response.json()
  }).then((data) => {
    console.log(data)
    setListProduct(data)
    setLoad(false)
  })
  },[page])
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "70%",
          margin: "auto",
        }}
      >
        <Productcarousel />
        <Productvid />
      </div>

      <section className="py-5" style={{ marginRight: "8%" }}>
        {
          load === true 
           ? <div style={{marginLeft:'50%'}} className="spinner-border" role="status">
           <span className="visually-hidden">Loading...</span>
         </div>
          : <div className="container px-4 px-lg-5 mt-5">
         <div
           className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center"
           style={{ width: "113%", margin: "auto" }}>
           {
             listProduct.map((blog)=> 
               <Cardproduct 
               id = {blog.id}
               key={blog.id}
               name={blog.name} 
               avatar={blog.avatar}/>
             )}

             {/* <!-- Pager--> */}  
<ul className="pagination">
 <li className="page-item disabled">
   <a className="page-link">Previous</a>
 </li>
 {
        [1,2].map((pg) => 
           <li className={`page-item ${pg===page ? 'active' : ''}`} onClick={()=> handleSelectPage(pg)}>
           <a className="page-link" href="#">
               {pg}
       </a>
       </li> 
        )}
 <li className="page-item">
   <a className="page-link" href="#">Next</a>
 </li>
</ul>
           {/* <Cardproduct />
           <Cardproduct />
           <Cardproduct />
           <Cardproduct />
           <Cardproduct />
           <Cardproduct />
           <Cardproduct />
           <Cardproduct />
           <Cardproduct />
           <Cardproduct />
           <Cardproduct />
           <Cardproduct /> */}
         </div>
       </div>
        }
       
      </section>
    </>
  );
};

export default Homepage;
