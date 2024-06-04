import React, { useState, useEffect } from "react";
import axios from "axios";
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from "react-router-dom";
import { BsFillBellFill, BsPersonCircle, BsJustify } from 'react-icons/bs';

function Header({ OpenSidebar }) {

  const [username, setUsername] = useState("");
  const [token, setToken] = useState("");
  const [expire, setExpire] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    refreshToken();
  }, []);

  const refreshToken = async () => {
    try {
      const response = await axios.get("http://localhost:5000/token");
      setToken(response.data.accessToken);
      const decoded = jwtDecode(response.data.accessToken);
      setUsername(decoded.username);
      setExpire(decoded.exp);
    } catch (error) {
      if (error.response) {
        navigate("/");
      }
    }
  };

  return (
    <header className="header">
      <div className="menu-icon">
        <BsJustify className="icon" onClick={OpenSidebar} />
      </div>
      <div className="header-right">
        
        {/* <a href="">
          <BsFillBellFill className="icon" />
        </a> */}
        <a href="" className="profil">
          <BsPersonCircle className="icon" /> {username}
        </a>
      </div>
    </header>
  );
}

export default Header;
