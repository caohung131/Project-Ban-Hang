import React, { useEffect, useState } from "react";
import "../Assets/signin.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const navigate = useNavigate();

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
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Call the API to authenticate the user
      const response = await fetch(
        "https://6485ce2fa795d24810b7565b.mockapi.io/api/v1/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      if (response.ok) {
        // Authentication succeeded, set the logged-in state
        setIsLoggedIn(true);
      } else {
        // Authentication failed, display an error message
        console.error("Login failed");
      }
    } catch (error) {
      console.error("An error occurred during login");
    }
  };
  return (
    <>
      <div>
        {isLoggedIn ? (
          <h1 style={{ marginLeft: "30%" }}>Welcome, user!</h1>
        ) : (
          <form className="looggin" onSubmit={handleSubmit}>
            <h1>Đăng nhập</h1>
            <input
              placeholder="     Tên đăng nhập/Email/Số điện thoại"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="sign-input"
              name="email"
            />{" "}
            <br /> <br />
            <input
              placeholder="     Mật khẩu"
              type="password"
              name="password"
              id=""
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="sign-input"
            />
            <br />
            <br />
            <br />
            <button className="log-btn" type="submit">
              ĐĂNG NHẬP
            </button>
          </form>
        )}
      </div>
      {/* <div className="looggin" onSubmit={handleFormsubmit}>
        <h1>Đăng nhập</h1>
        <form>
          <input
            placeholder="     Tên đăng nhập/Email/Số điện thoại"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="sign-input"
            name="email"
          />{" "}
          <br /> <br />
          <input
            placeholder="     Mật khẩu"
            type="password"
            name="password"
            id=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="sign-input"
          />
          <br />
          <br />
          <br />
          <button className="log-btn" onSubmit={handleFormsubmit}>
            ĐĂNG NHẬP
          </button>
        </form>
      </div> */}
    </>
  );
};

export default Login;
