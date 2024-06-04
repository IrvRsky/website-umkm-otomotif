import React, { useState } from "react";
import "./App.css";
import logo from "./assets/login.jpg";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [msg, setMsg] = useState("");

  const navigate = useNavigate();

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const Auth = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', {
        email: email,
        password: password,
      });
      // Save the token to localStorage
      localStorage.setItem('token', response.data.accessToken);
      navigate("/dashboard");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div className="login-body">
      <div className="container">
        <div className="side-img">
          <img src={logo} alt="Login" />
        </div>
        <div className="side-login">
          <div className="title-login">
            <div className="title-login-text">
              <h2>Sign In</h2>
              <p>{msg}</p>
            </div>
          </div>

          <form onSubmit={Auth}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Masukan Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Masukan Kata Sandi"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="checkbox"
                id="toggleConfirmPassword"
                className="toggle-password"
                checked={showPassword}
                onChange={handleTogglePassword}
              />
              <label htmlFor="toggleConfirmPassword" className="show-password">
                Lihat Password
              </label>
            </div>

            <div className="forgot-password">
              <a href="#">Lupa Password?</a>
            </div>

            <button name="login" className="btn-login">
              Masuk
            </button>
          </form>

          <div className="social-media">
            <span>Atau Masuk Dengan</span>
            <br />
            <br />
            <a href="https://google.com">
              <FcGoogle />
            </a>
          </div>

          <div className="register">
            <p>
              Belum Punya Akun? <Link to="/register">Daftar</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
