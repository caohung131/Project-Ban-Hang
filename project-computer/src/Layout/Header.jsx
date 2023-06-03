import { React } from "react";
import { useState } from "react";
import "../Assets/header/header.css";
import Searchbar from "./Searchbar";
import Example from "./Dropdown";

function Header() {
  const [active, setActive] = useState("header-menu");
  const [icon, setIcon] = useState("header-toggler");
  const headerToggle = () => {
    if (active === "header-menu") {
      setActive("header-menu header-active");
    } else setActive("header-menu");

    // Icon Toggler
    if (icon === "header-toggler") {
      setIcon("header-toggler toggle");
    } else setIcon("header-toggler");
  };
  return (
    <header className="header">
      <a href="/#" className="header-brand">
        <img
          src="https://cdn.mobilecity.vn/mobilecity-vn/images/2023/04/w300/logo-mobilecity-1.png.webp"
          alt=""
        />
      </a>
      <div className="header-mid">
        <div>
          <Example />
        </div>
        <div>
          <Searchbar />
        </div>
        <div>
          <button
            type="button"
            class="btn btn-primary me-3"
            style={{
              backgroundColor: "#8a6c1c",
              height: "5em",
              border: "none",
            }}
          >
            <div>
              <img
                src="	https://mobilecity.vn/public/assets/img/icon_login.png"
                alt=""
                style={{ width: "35%" }}
              />
              <div style={{ fontSize: "1rem" }}>Đăng nhập</div>
            </div>
          </button>
        </div>
      </div>
      <ul className={active}>
        {/* <li className="header-item">
          <a href="/#" className="header-link">
            Home
          </a>
        </li> */}

        <li className="header-item">
          <a href="/#" className="header-link">
            TIN TỨC
          </a>
        </li>
        <li className="header-item">
          <a href="/#" className="header-link">
            EVENTS
          </a>
        </li>
        <li className="header-item">
          <a href="/#" className="header-link">
            TRA CỨU BH
          </a>
        </li>
      </ul>
      <div onClick={headerToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </header>
  );
}
export default Header;
