import React, { useEffect, useState } from "react";
import "../Assets/signin.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  // const navigate = useNavigate();

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleFormsubmit = (event) => {
    event.preventDefault();
  };

  // useEffect(() => {
  //   if (localStorage.getItem("user-info")) {
  //     navigate("/Homepage");
  //   }
  // }, []);

  // async function handleChange(e) {
  //   e.preventDefault();

  //   let item = { values };
  //   let result = await fetch(
  //     "https://6485ce2fa795d24810b7565b.mockapi.io/api/v1/register",
  //     {
  //       method: "POST",
  //       headers: {
  //         "content-type": "application/json",
  //         Accept: "application/json",
  //       },
  //       body: JSON.stringify(item),
  //     }
  //   );
  //   result = await result.json();
  //   localStorage.setItem("user-info", JSON.stringify(result));
  //   navigate("/");
  // }
  return (
    <>
      <div className="looggin" onSubmit={handleFormsubmit}>
        <h1>Đăng nhập</h1>
        <form>
          <input
            placeholder="     Tên đăng nhập/Email/Số điện thoại"
            type="text"
            value={values.email}
            onChange={handleChange}
            className="sign-input"
            name="email"
          />{" "}
          <br /> <br />
          <input
            placeholder="     Mật khẩu"
            type="password"
            name="password"
            id=""
            value={values.password}
            onChange={handleChange}
            className="sign-input"
          />
          <br />
          <br />
          <br />
          <button className="log-btn" onSubmit={handleFormsubmit}>
            ĐĂNG NHẬP
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
