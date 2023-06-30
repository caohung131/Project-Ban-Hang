import { React, useState, useEffect, useContext } from "react";
import "../Assets/header.css";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";

const Header = () => {
  const { product, value, setValue, onchange, onSearch } = useContext(Context);

  const [listProduct, setListProduct] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [listProductFilter, setListProductFilter] = useState([]);

  useEffect(() => {
    fetch("https://6485ce2fa795d24810b7565b.mockapi.io/api/v1/blog")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setListProduct(data);
      });
  }, []);

  return (
    <header className="header">
      <div className="header-width">
        <img
          src="https://cdn.mobilecity.vn/mobilecity-vn/images/2023/04/w300/logo-mobilecity-1.png.webp"
          alt=""
          className="logo"
        />
        <select name id className="dropdown">
          <option value className="option1">
            <div>Xem giá, tồn kho tại: </div>
            <div>Hà Nội</div>
          </option>
          <option>Hà Nội</option>
          <option>TP.Hồ Chí Minh</option>
          <option>Đà Nẵng</option>
        </select>
        <div className="search">
          <input
            type="text"
            className="search-input"
            value={value}
            onChange={onchange}
          />
          <button className="search-btn" onClick={() => onSearch(value)}>
            <i className="fas fa-search" />
          </button>

          <div className="search-result">
            {product
              .filter((item) => {
                const searchTerm = value.toLowerCase();
                const resultName = item.name.toLowerCase();

                return (
                  searchTerm &&
                  resultName.startsWith(searchTerm) &&
                  resultName !== searchTerm
                );
              })
              .map((item) => (
                <div
                  key={item.id}
                  onClick={() => onSearch(item.name)}
                  className="result-row"
                >
                  {item.name}
                  {item.avatar}
                  {item.price}
                </div>
              ))}
          </div>
        </div>
        <div className="button">
          <button className="account-btn">
            <Link to="/Login">
              <div>
                <img
                  src="https://mobilecity.vn/public/assets/img/icon_login.png"
                  alt=""
                  className="account-ava"
                />
                <div>Đăng nhập</div>
              </div>
            </Link>
          </button>
          <button className="account-btn">
            <Link to="/Register">
              <div>
                <img
                  src="https://mobilecity.vn/public/assets/img/icon_login.png"
                  alt=""
                  className="account-ava"
                />
                <div>Đăng kí</div>
              </div>
            </Link>
          </button>
        </div>
        <div className="header-opt">
          <div>
            <Link to="/Cart">GIỎ HÀNG</Link>
          </div>
          <div>EVENTS</div>
          <div>TRA CỨU BH</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
