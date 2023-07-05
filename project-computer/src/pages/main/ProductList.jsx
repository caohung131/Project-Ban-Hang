import React, { useContext } from "react";
import { Context } from "../../context/Context";
import Cardproduct from "./Cardproduct";

const ProductList = () => {
  const { searchProduct, listProduct } = useContext(Context);

  return (
    <div>
      {searchProduct.length > 0 ? (
        <div className="container px-4 px-lg-5 mt-5">
          <div
            className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center"
            style={{ width: "98.5%", margin: "auto" }}
          >
            {searchProduct.map((item) => (
              <Cardproduct
                id={item.id}
                key={item.id}
                name={item.name}
                avatar={item.avatar}
                price={item.cost}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="container px-4 px-lg-5 mt-5">
          <div
            className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center"
            style={{ width: "98.5%", margin: "auto" }}
          >
            {listProduct.map((item) => (
              <Cardproduct
                id={item.id}
                key={item.id}
                name={item.name}
                avatar={item.avatar}
                price={item.cost}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductList;
