import { React } from "react";
import "../Assets/nav.css";

const Nav = () => {
  return (
    <div className="navbar">
      <div className="nav">
        <div className="nav-item">
          <span className="nav-item">
            <i class="fas fa-mobile-screen-button"></i>
          </span>
          <span>Điện thoại</span>
          <div className="nav-prod-container">
            <div>Hãng sản xuất</div>
            <div className="container-product">
              <ul className="product-option">
                <li className="brand">Iphone</li>
                <li className="brand">Samsung</li>
                <li className="brand">Xiaomi</li>
                <li className="brand">Poco</li>
                <li className="brand">Redmi</li>
                <li className="brand">Realme</li>
                <li className="brand">Ipad</li>
                <li className="brand">Asus (Rog Phone)</li>
                <li className="brand">Lenovo</li>
                <li className="brand">Oneplus</li>
                <li className="brand">Vivo</li>
                <li className="brand">LG</li>
                <li className="brand">Oppo</li>
                <li className="brand">Sony</li>
                <li className="brand">Nubia Rad Magix</li>
                <li className="brand">Google</li>
                <li className="brand">Meizu</li>
                <li className="brand">Vsmart</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="nav-item">
          <span>
            <i class="fas fa-tablet-screen-button"></i>
          </span>
          <span>Máy tính bảng</span>
          <div className="nav-prod-container">
            <div>Hãng sản xuất</div>
            <div className="container-product">
              <ul className="product-option">
                <li>Ipad</li>
                <li>Samsung Galaxy Tab</li>
                <li>Lenovo</li>
                <li>Vivo Pad</li>
                <li>OPPO Pad</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="nav-item">
          <span>
            <i class="fas fa-tv"></i>
          </span>
          <span>Tivi</span>
        </div>
        <div className="nav-item">
          <span>
            <i class="fas fa-charging-station"></i>
          </span>
          <span>Phụ kiện</span>
          <div className="nav-prod-container">
            <div>Hãng sản xuất</div>
            <div className="container-product">
              <ul className="product-option">
                <li>Tai nghe bluetooth - Loa</li>
                <li>Đồ chơi công nghệ</li>
                <li>Pin sạc dự phòng</li>
                <li>Phụ kiện Iphone</li>
                <li>Phụ kiện Sasmung</li>
                <li>Phụ kiện Xiaomi</li>
                <li>Phụ kiện khác</li>
                <li className="option">phụ kiện Pisen</li>
                <li className="option">Thiết bị livestream</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="nav-item">
          <span>
            <i class="fa-solid fa-watch"></i>
          </span>
          <span>Đồng hồ thông minh</span>
        </div>
        <div className="nav-item">
          <span>
            <i class="fas fa-headphones-simple"></i>
          </span>
          <span>Tai nghe</span>
        </div>
        <div className="nav-item">
          <span>
            <i class="fas fa-screwdriver-wrench"></i>
          </span>
          <span>Sửa chữa</span>
          <div className="nav-prod-container-last">
            <div>Hãng sản xuất</div>
            <div className="container-product">
              <ul className="product-option">
                <li className="option">Sửa điện thoại Iphone</li>
                <li className="option">Sửa điện thoại Samsung</li>
                <li className="option">Sửa điện thoại Xiaomi</li>
                <li className="option">Sửa điện thoại Realme</li>
                <li className="option">Sửa điện thoại Asus</li>
                <li className="option">Sửa điện thoại Sony</li>
                <li className="option">Sửa điện thoại LG</li>
                <li className="option">Sửa điện thoại Vivo</li>
                <li className="option">Sửa Ipad, Apple watch</li>
                <li className="option">Hãng khác</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
