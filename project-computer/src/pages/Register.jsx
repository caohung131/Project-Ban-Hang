import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../Assets/signin.css";
import { Context } from "../context/Context";

const Register = () => {
  const { setIsLogin } = useContext(Context);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for valid email and password conditions
    if (!validateEmail() || !validatePassword()) {
      return;
    }

    // Add your API call logic here
    registerAPI(email, password)
      .then((response) => {
        // Handle successful registration here
        console.log("Đăng kí thành công");
        navigate("/");
        setIsLogin(true);

        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
      })
      .catch((error) => {
        // Handle registration error here
        setError("Đăng kí thất bại");
      });
  };

  const validateEmail = () => {
    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setError("Email không hợp lệ");
      return false;
    }

    return true;
  };

  const validatePassword = () => {
    // Password must be at least 8 characters long
    if (password.length < 8) {
      setError("Mật khẩu phải dài hơn 8 kí tự");
      return false;
    }

    return true;
  };

  const registerAPI = (email, password) => {
    // Replace with your API endpoint URL
    const url = "https://6485ce2fa795d24810b7565b.mockapi.io/api/v1/register";

    // Create request options
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    };

    // Call the API
    return fetch(url, requestOptions).then((response) => {
      if (!response.ok) {
        throw new Error("Đăng kí thất bại");
      }
      return response.json();
    });
  };

  return (
    <div className="form-register">
      <h1>Đăng kí</h1>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          required
          placeholder="Nhập email"
          className="sign-input"
        />
        <br />
        <br />

        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          required
          placeholder="nhập mật khẩu"
          className="sign-input"
        />
        <br />
        <br />
        <br />

        <button type="submit" className="log-btn">
          ĐĂNG KÍ
        </button>
      </form>
    </div>
  );
};

export default Register;
