import React, { useEffect, useState, useContext } from "react";
import Cardproduct from "../main/Cardproduct";

const Product = ({ list }) => {
  const a = list.filter((item) => {
    return item.category.includes("tablet");
  });

  return (
    <div className="container px-4 px-lg-5 mt-5">
      <div
        className="row gx-2 gx-lg-2 row-cols-2 row-cols-md-2 row-cols-xl-4 "
        style={{ width: "109%" }}
      >
        {a.map((prod) => (
          <Cardproduct
            id={prod.id}
            key={prod.id}
            name={prod.name}
            price={prod.cost}
            avatar={prod.avatar}
          />
        ))}
      </div>
    </div>
  );
};

export default Product;
