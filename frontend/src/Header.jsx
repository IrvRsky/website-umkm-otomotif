import React from 'react'
import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify } from "react-icons/bs";

function Header({OpenSidebar}) {
  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        <div className='header-left'>
            {/* <BsSearch  className='icon'/> */}
        </div>
        <div className='header-right'>
            <a href="">
            <BsFillBellFill className='icon'/>
            </a>
            {/* <a href="">
            <BsFillEnvelopeFill className='icon'/>
            </a> */}
            <a href="">
            <BsPersonCircle className='icon'/>
            </a>
        </div>
    </header>
  )
}

export default Header