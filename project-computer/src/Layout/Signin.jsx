import React from "react";
import "../Assets/signin.css";

const Signin = () => {
  return (
    <>
      <div className="looggin">
      <h1>Đăng ký</h1>
      <form action="">
        <input
          type="text"
          placeholder="     Nhập số điện thoại hoặc email của bạn để đăng ký"
          className="sign-input"
        />
        <br /> <br />
        <input
          placeholder="     Nhập mật khẩu"
          type="password"
          name=""
          id=""
          className="sign-input"
        />{" "}
        <br />
        <br />
        <br />
        <button className="log-btn">ĐĂNG KÝ</button>
      </form>
      </div>
    </>
  );
};

export default Signin;
