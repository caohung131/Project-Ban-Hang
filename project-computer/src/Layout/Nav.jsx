import { React } from "react";
import "../Assets/nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navbar">
      <div className="nav">
        <div className="nav-item">
          <Link to="/">
            <span>
              <i class="fas fa-tv"></i>
            </span>
            <br></br>
            <span>Trang chủ</span>
          </Link>
        </div>
        <div className="nav-item">
          <span className="nav-item">
            <i class="fas fa-mobile-screen-button"></i>
          </span>
          <span>Điện thoại</span>
        </div>
        <div className="nav-item">
          <span>
            <i class="fas fa-tablet-screen-button"></i>
          </span>
          <span>Máy tính bảng</span>
        </div>
        <div className="nav-item">
          <span>
            <i class="fas fa-tv"></i>
          </span>
          <span>Máy cũ giá rẻ</span>
        </div>
        <div className="nav-item">
          <span>
            <i class="fas fa-charging-station"></i>
          </span>
          <span>Phụ kiện</span>
        </div>

        <div className="nav-item">
          <span>
            <i class="fas fa-screwdriver-wrench"></i>
          </span>
          <span>Sửa chữa</span>
        </div>
      </div>
    </div>
  );
};

export default Nav;
