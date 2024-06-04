import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import logo from "./assets/login.jpg";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [msg, setMsg] = useState("");
  
  const navigate = useNavigate();

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const Register = async(e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/register',{
        username: username,
        email: email,
        password: password,
        confPassword: confirmPassword
      });
      navigate("/");
    } catch (error) {
      if(error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div className="login-body">
      <div className="container">
      <div className="side-img">
        <img src={logo} alt="Register"></img>
      </div>
      <div className="side-login">
        <div className="title-login">
          <div className="title-login-text">
            <h2>Sign Up</h2>
            <p>{msg}</p>
          </div>
        </div>

        <form onSubmit={ Register }>
          <div className="form-group">
            <label htmlFor="username">Nama Lengkap</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Masukan Nama Lengkap"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

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
          </div>

          <div className="form-group">
            <label htmlFor="confirm-password">Konfirmasi Password</label>
            <input
              type={showPassword ? "text" : "password"}
              id="confirm-password"
              name="password"
              placeholder="Masukan Konfirmasi Kata Sandi"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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

          <button name="daftar" className="btn-login">
            Daftar
          </button>
        </form>

        <div className="social-media">
          <span>Atau Daftar Dengan</span>
          <br />
          <br />
          <a href="https://google.com">
            <FcGoogle />
          </a>
        </div>

        <div className="register">
          <p>
            Sudah Punya Akun? <a href={"/"}>Masuk</a>
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Register;
