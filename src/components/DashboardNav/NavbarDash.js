import React from 'react'
import './NavbarDash.css'
import { MdLanguage } from "react-icons/md";
import { FaFacebook, FaInstagram} from "react-icons/fa";

const NavbarDash = () => {
  let name = JSON.parse(localStorage.getItem('user')).fullName

  return (
    <div className='navbar_dash'>
    <div className='container'>
      <div className='wrapper d-flex justify-content-between align-items-center'>
        <div className='top_header'>
          <h4> Welcome, <span>{name}</span></h4>
        </div> 
        <div className='items '>
          <div className='item'>
            <MdLanguage className='icon'/>
            <span>English</span> 
          </div>    
          <div className='item'>
            <a href="https://web.facebook.com/APENNig"  target="_blank" ><FaFacebook className='icon'/></a>
          </div>     
          <div className='item'>
            <a href='https://www.instagram.com/apenngr/' target="_blank" ><FaInstagram className='icon'/></a> 
          </div>         
        </div>
      </div>
    </div>
  </div>  
  )
}

export default NavbarDash