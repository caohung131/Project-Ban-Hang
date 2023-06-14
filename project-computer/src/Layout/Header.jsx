import { React } from "react";
import "../Assets/header.css";

const Header = () => {
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
          <input type="text" className="search-input" />
          <button className="search-btn">
            <i className="fas fa-search" />
          </button>
        </div>
        <div className="button">
          <button className="account-btn">
            <div>
              <img
                src="https://mobilecity.vn/public/assets/img/icon_login.png"
                alt=""
                className="account-ava"
              />
              <div>Đăng nhập</div>
            </div>
          </button>
          <button className="account-btn">
            <div>
              <img
                src="https://mobilecity.vn/public/assets/img/icon_login.png"
                alt=""
                className="account-ava"
              />
              <div>Đăng kí</div>
            </div>
          </button>
        </div>
        <div className="header-opt">
          <div>TIN TỨC</div>
          <div>EVENTS</div>
          <div>TRA CỨU BH</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
