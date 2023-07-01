import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../../context/Context";

const Cardproduct = (item) => {
  const { id, name, avatar, price } = item;

  const { onAdd } = useContext(Context);

  return (
    <>
      <div  className="col mb-5" style={{ width: "25%" }}>
        <div className="card h-100">
          {/* Sale badge*/}
          <div
            className="badge bg-dark text-white position-absolute"
            style={{ top: "0.5rem", right: "0.5rem" }}
          >
            Sale
          </div>
          
          {/* Product details*/}
          <Link style={{textDecoration:'none'}} to ={`/details/${id}`} className="card-body p-4">
            {/* Product image*/}
          <img className="card-img-top" src={item.avatar} alt="..." />
            <div className="text-center">
              {/* Product name*/}
              <h5 className="fw-bolder">{name}</h5>
              {/* Product reviews*/}
              <div className="d-flex justify-content-center small text-warning mb-2">
                <div className="bi-star-fill" />
                <div className="bi-star-fill" />
                <div className="bi-star-fill" />
                <div className="bi-star-fill" />
                <div className="bi-star-fill" />
              </div>
              {/* Product price*/}
              <span className="text-muted text-decoration-line-through"></span>
              {price}
            </div>
          </Link>
          {/* Product actions*/}
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
              <button
                className="btn btn-outline-dark mt-auto"
                onClick={() => onAdd(item)}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cardproduct;
