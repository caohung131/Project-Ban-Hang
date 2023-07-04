import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Cardproduct = (item) => {
  const { id, name, avatar, price } = item;

  const { onAdd } = useContext(Context);

  // nhảy sản phẩm
  const notify = () =>
    toast.success(`${name} đã thêm vào giỏ hàng`, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  return (
    <>
      <div className="col mb-5" style={{ width: "25%" }}>
        <div className="card h-100">
          {/* Sale badge*/}
          <div
            className="badge bg-dark text-white position-absolute"
            style={{ top: "0.5rem", right: "0.5rem" }}
          >
            Sale
          </div>

          {/* Product details*/}
          <Link
            style={{ textDecoration: "none" }}
            to={`/details/${id}`}
            className="card-body p-4"
          >
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
              {price} $
            </div>
          </Link>
          {/* Product actions*/}
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
              <button
                className="btn btn-outline-dark mt-auto"
                onClick={() => {
                  onAdd(item);
                  notify();
                }}
              >
                Add to cart
              </button>
              <ToastContainer
                position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cardproduct;
