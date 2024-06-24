import React, { useState, useEffect } from "react";
import axios from "axios";
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from "react-router-dom";
import { FaUser, FaUserCircle } from "react-icons/fa";
import { BsSend } from "react-icons/bs";

function Chat() {

  const [selectedUser, setSelectedUser] = useState(null); // State untuk pengguna yang dipilih

  const users = [
    { name: "Bagaskara", message: "Terima Kasih.." },
    { name: "Budi", message: "Setelah saya.." },
    { name: "Joe", message: "Mantap sih.." },
    { name: "Riska", message: "Pelayanannya.." },
    { name: "Lisa", message: "Kerja Bagus.." },
    { name: "Zayn", message: "Keren sih.." }
  ];

  const handleUserClick = (user) => {
    setSelectedUser(user); // Set pengguna yang dipilih
  };

  return (
    <main className="main-chat">
      <div className="main-title">
        <h2>CHAT</h2>
      </div>

      {/* CHAT USER */}
      <div className="container-chat">
        <div className="main-title">
          <h3>Chat User</h3>
        </div>

        <div className="chat-title">
          <h4>Pengguna</h4>
          <h4>Status</h4>
        </div>

        <div className="chat-order-list">
          {users.map((user, index) => (
            <div key={index} className="chat-content" onClick={() => handleUserClick(user)}>
              <div className="user">
                <div className="user-img">
                  <FaUser className="icon-chat-profile" />
                </div>
                <div className="user-text">
                  <h4 className="user-name">{user.name}</h4>
                  <span>{user.message}</span>
                </div>
              </div>
              <div className="status">
                <h4>Baca</h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedUser && (
        <div className="container-detail-chat">
          <div className="detail-chat">
            <div className="header-detail-chat">
              <FaUserCircle className="user-img-detail" />
              <span>{selectedUser.name}</span>
            </div>

            <div className="content-chat">
              <div className="blank-chat"></div>
              <div className="sending-chat">
                <form className="form-chat">
                  <div className="input">
                    <input type="file" className="input-file" />
                  </div>
                  <div className="submit">
                    <input type="text" placeholder="Ketik disini" className="input-text"/>
                    <button type="submit">
                      <BsSend className="icon-btn" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default Chat;
