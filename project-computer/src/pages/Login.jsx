import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Context } from "../context/Context";

const LoginForm = () => {
  const { setIsLogin } = useContext(Context);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        "https://6485ce2fa795d24810b7565b.mockapi.io/api/v1/register"
      );
      const userData = response.data;
      console.log(userData);
      const foundEmail = userData.find((user) => user.email === email);
      console.log(foundEmail);

      if (foundEmail && foundEmail.password === password) {
        setIsLogin(true);
        navigate("/");
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
      } else {
        setError("email hoặc mật khẩu không hợp lệ");
      }
    } catch (error) {
      setError("Lỗi");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-register">
      <div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Nhập email"
          className="sign-input"
        />
      </div>
      <br />
      <br />

      <div>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="nhập mật khẩu"
          className="sign-input"
        />
      </div>
      <br />
      <br />
      <br />
      <button type="submit" className="log-btn">
        ĐĂNG NHẬP
      </button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default LoginForm;
