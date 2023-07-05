import { React, useState, useEffect, useContext } from "react";
import "../Assets/header.css";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";

const Header = () => {
  const { setKeyword, cartItems, keyword, handleClickSearch } =
    useContext(Context);
  const [loggedInEmail, setLoggedInEmail] = useState("");

  const [searchText, setSearchText] = useState("");
  const handleSearch = (e) => {
    // setSearchText(e.target.value);
    console.log("setSearchText");
  };
  useEffect(() => {
    const email = localStorage.getItem("email");

    if (email) {
      setLoggedInEmail(email);
    }
  });

  useEffect(() => {
    fetch(`https://6491ce492f2c7ee6c2c8efa9.mockapi.io/api/v1/blogs`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setSearchText(data);
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
        <img
          src="https://mobilecity.vn/public/assets/img/logo_icon.png"
          alt=""
          className="logo-repo"
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
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <button className="search-btn" onClick={handleClickSearch}>
            <i className="fas fa-search" />
          </button>
        </div>
        <div className="header-right">
          <div className="button">
            {loggedInEmail ? (
              <span
                style={{
                  color: "#FFF",
                  width: "2%",
                  marginLeft: "15%",
                  fontSize: "0.7vw",
                }}
              >
                {" "}
                wellcome, {loggedInEmail}
              </span>
            ) : (
              <>
                <button className="account-btn">
                  <Link
                    to="/Login"
                    style={{ textDecoration: "none", color: "#fff" }}
                  >
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
                  <Link
                    to="/Register"
                    style={{ textDecoration: "none", color: "#fff" }}
                  >
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
              </>
            )}
          </div>
          <div className="header-opt">
            <div>
              <Link
                to="/Cart"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                GIỎ HÀNG ({cartItems.length})
              </Link>
            </div>
            <div>EVENTS</div>
            <div>TRA CỨU BH</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
