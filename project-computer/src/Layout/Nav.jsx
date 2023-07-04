import { React } from "react";
import "../Assets/nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navbar">
      <div className="nav">
        <div className="nav-item">
          <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
            <span>
              <i class="fas fa-house"></i>
            </span>
            <br></br>
            <span>Trang chủ</span>
          </Link>
        </div>
        <div className="nav-item">
          <Link to="/phone" style={{ textDecoration: "none", color: "#fff" }}>
            <span className="nav-item">
              <i class="fas fa-mobile-screen-button"></i>
            </span>
            <span>Điện thoại</span>
          </Link>
        </div>
        <div className="nav-item">
          <Link to="/tablet" style={{ textDecoration: "none", color: "#fff" }}>
            <div>
              <i class="fas fa-tablet-screen-button"></i>
            </div>
            <div>Máy tính bảng</div>
          </Link>
        </div>
        <div className="nav-item">
          <Link
            to="/oldproduct"
            style={{ textDecoration: "none", color: "#fff" }}
          >
            <div>
              <i class="fas fa-tv"></i>
            </div>
            <div>Máy cũ giá rẻ</div>
          </Link>
        </div>

        <div className="nav-item">
          <Link
            to="/accessories"
            style={{ textDecoration: "none", color: "#fff" }}
          >
            <div>
              <i class="fas fa-charging-station"></i>
            </div>
            <div>Phụ kiện</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
