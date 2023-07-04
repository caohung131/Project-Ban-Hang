import React from "react";
import PriceSlider from "./PriceSlider";

const PriceRange = ({ selectedPrice, changedPrice }) => {
  return (
    <div>
      <PriceSlider value={selectedPrice} changedPrice={changedPrice} />
    </div>
  );
};

export default PriceRange;
