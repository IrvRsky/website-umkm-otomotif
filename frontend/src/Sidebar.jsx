import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from './assets/Icon1.png';
import axios from 'axios';
import {
  BsGrid1X2Fill,
  BsClipboardDataFill,
  BsChatDotsFill,
  BsGraphUpArrow,
  BsArrowLeftSquare,
} from 'react-icons/bs';

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  const navigate = useNavigate();
  
  const Logout = async () => {
    try {
      await axios.delete('https://stirred-guided-bullfrog.ngrok-free.app/logout');
      sessionStorage.removeItem('token');
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <aside id="sidebar" className={openSidebarToggle ? 'sidebar-responsive' : ''}>
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <Link to="#">
            <img src={logo} alt="MORE" />
          </Link>
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>
      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <Link to="/dashboard">
            <BsGrid1X2Fill className="icon" /> Dashboard
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/pesanan">
            <BsClipboardDataFill className="icon" /> Data Pesanan
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/chat">
            <BsChatDotsFill className="icon" /> Chat
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/pendapatan">
            <BsGraphUpArrow className="icon" /> Pendapatan
          </Link>
        </li>
        <button onClick={Logout} className='btn-logout'>
          <BsArrowLeftSquare className="icon-logout" /> Logout
        </button>
      </ul>
    </aside>
  );
}

export default Sidebar;
