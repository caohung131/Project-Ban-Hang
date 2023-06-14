import React from "react";
import "../Assets/productcategory.css";

const Productcategory = () => {
  return (
    <div className="category-container">
      <div className="category">
        <p>Hãng</p>
        <ul className="category-list">
          <li>Điện thoại cũ</li>
          <li>Iphone chính hãng VN/A </li>
          <li>Iphone cũ 99%</li>
          <li>Apple Watch </li>
          <li>Samsung cũ</li>
          <li>Samsung chính hãng </li>
          <li>Xiaomi</li>
          <li>POCO </li>
          <li>Redmi</li>
          <li>Realme </li>
          <li>Asus (ROG Phone)</li>
          <li>Oneplus</li>
          <li>Vivo</li>
          <li>LG </li>
          <li>
            <select name id>
              <option value className="product-option">
                Hãng khác
              </option>
              <option>OPPO</option>
              <option>Sony</option>
              <option>Nubia Red Magic</option>
              <option>Google</option>
              <option>Meizu</option>
              <option>Vsmart</option>
              <option>Lenovo</option>
              <option>Tecno</option>
            </select>
          </li>
        </ul>
      </div>
      <div>
        <select name id>
          <option value className="price-option">
            Giá từ thấp đến cao
          </option>
          <option>Giá từ cao đến thấp</option>
        </select>
      </div>
    </div>
  );
};

export default Productcategory;
