import React, { useContext, useEffect, useState } from "react";
import Cardproduct from "./Cardproduct";
import Productvid from "./Productvid";
import { Context } from "../../context/Context";
import ProductList from "./ProductList";

// import "../../Assets/productcategory.css";

const Homepage = () => {
  const { searchProduct, handleSelectPage, listProduct, load, page } =
    useContext(Context);

  return (
    <>
      <div className="homepage">
        <Productvid />
      </div>

      <section className="py-5">
        {load === true ? (
          <div
            style={{ marginLeft: "50%" }}
            className="spinner-border"
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          <div className="container px-4 px-lg-5 mt-5">
            <ProductList />

            <div style={{ marginLeft: "42%" }}>
              {/* <!-- Pager--> */}
              <ul className="pagination" style={{ margin: "auto" }}>
                <li className="page-item disabled">
                  <a className="page-link">Previous</a>
                </li>
                {[1, 2].map((pg) => (
                  <li
                    className={`page-item ${pg === page ? "active" : ""}`}
                    onClick={() => handleSelectPage(pg)}
                  >
                    <a className="page-link" href="#">
                      {pg}
                    </a>
                  </li>
                ))}
                <li className="page-item">
                  <a className="page-link" href="#">
                    Next
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Homepage;
