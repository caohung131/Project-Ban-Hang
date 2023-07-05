import React from "react";
import CheckboxFilter from "./CheckboxFilter";

const Brand = ({ brand, changeChecked }) => {
  return (
    <div>
      <p>Hãng</p>
      {brand.map((brand) => (
        <CheckboxFilter brand={brand} changeChecked={changeChecked} />
      ))}
    </div>
  );
};

export default Brand;
