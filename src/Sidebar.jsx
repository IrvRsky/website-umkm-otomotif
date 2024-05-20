import React from "react";
import { Link } from "react-router-dom";
import {
  BsCart3,
  BsGrid1X2Fill,
  BsChatDotsFill,
  BsGraphUpArrow,
  BsClipboardDataFill,
  BsMenuButtonWideFill,
  BsFillGearFill,
  BsArrowLeftSquare,
} from "react-icons/bs";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <a href="">
            <img src="./assets/icon1.png" alt="MORE"></img>
          </a>
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <Link to={"/home"}>
            <BsGrid1X2Fill className="icon" /> Dashboard
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to={"/pesanan"}>
            <BsClipboardDataFill className="icon" />
            Data Pesanan
          </Link>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsChatDotsFill className="icon" /> Chat
          </a>
        </li>
        <li className="sidebar-list-item">
          <Link to={"/pendapatan"}>
            <BsGraphUpArrow className="icon" /> Pendapatan
          </Link>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsArrowLeftSquare className="icon" /> Logout
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
