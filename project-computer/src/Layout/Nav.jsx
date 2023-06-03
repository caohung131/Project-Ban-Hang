import { React } from "react";
import "../Assets/header/nav.css";

const Nav = () => {
  const navItem = [
    {
      icon: <i class="fas fa-mobile-screen-button"></i>,
      item: "Điện thoại",
    },
    {
      icon: <i class="fas fa-tablet-screen-button"></i>,
      item: "Máy tính bảng",
    },
    {
      icon: <i class="fas fa-tv"></i>,
      item: "Tivi",
    },
    {
      icon: <i class="fas fa-charging-station"></i>,
      item: "Phụ kiện",
    },
    {
      icon: <i class="fas fa-mobile-screen-button"></i>,
      item: "Đồng hồ thông minh",
    },
    {
      icon: <i class="fas fa-headphones"></i>,
      item: "tai nghe",
    },
    {
      icon: <i class="fas fa-screwdriver-wrench"></i>,
      item: "sửa chữa",
    },
  ];
  return (
    <div className="nav">
      {navItem.map((item) => (
        <div className="nav-item">
          <div className="icon">{item.icon}</div>
          <div>{item.item}</div>
        </div>
      ))}
    </div>
  );
};

export default Nav;
