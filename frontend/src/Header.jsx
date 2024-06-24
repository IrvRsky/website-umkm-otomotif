// src/Header.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode"; // Fixed import
import { BsFillBellFill, BsPersonCircle, BsJustify } from "react-icons/bs";

function Header({ OpenSidebar }) {
  const [bengkelData, setBengkelData] = useState(null);

  useEffect(() => {
    const fetchBengkelData = async () => {
      try {
        const token = sessionStorage.getItem("token"); // Assuming token is stored in sessionStorage
        const response = await axios.get(
          "https://stirred-guided-bullfrog.ngrok-free.app/bengkel",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            withCredentials: true, // For sending credentials (cookies)
          }
        );
        setBengkelData(response.data);
      } catch (error) {
        console.error("Error fetching bengkel data:", error);
      }
    };

    fetchBengkelData();
  }, []);

  return (
    <header className="header">
      <div className="menu-icon">
        <BsJustify className="icon" onClick={OpenSidebar} />
      </div>
      <div className="header-right">
        <Link to="/bengkel" className="admin_bengkel">
          <BsPersonCircle className="icon" />
          <div className="nama_bengkel">
            {bengkelData ? (
              <p>{bengkelData.nama_bengkel}</p>
            ) : (
              <p>Loading bengkel data...</p>
            )}
          </div>
        </Link>
      </div>
    </header>
  );
}

export default Header;
