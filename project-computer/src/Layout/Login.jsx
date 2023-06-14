import React from "react";
import "../Assets/signin.css";

const Login = () => {
  return (
    <>
      <h1>Đăng nhập</h1>
      <form action="">
        <input
          placeholder="     Tên đăng nhập/Email/Số điện thoại"
          type="text"
          className="sign-input"
        />{" "}
        <br /> <br />
        <input
          placeholder="     Mật khẩu"
          type="password"
          name=""
          id=""
          className="sign-input"
        />{" "}
        <br />
        <br />
        <br />
        <button className="log-btn">ĐĂNG NHẬP</button>
      </form>
    </>
  );
};

export default Login;
