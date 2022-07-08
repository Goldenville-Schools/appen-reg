import React from 'react'
import './NavbarDash.css'
import { MdLanguage } from "react-icons/md";
import {MdDarkMode} from "react-icons/md";
import { FaFacebook, FaInstagram} from "react-icons/fa";



const NavbarDash = () => {
  let admin = JSON.parse(localStorage.getItem('adminUser'))

  return (
    <div className='navbar_dash'>
    <div className='container'>
      <div className='wrapper d-flex justify-content-between align-items-center'>
        <div className='top_header'>
          <h4> Hi, <span>{admin[0].name}</span></h4>
        </div> 
        <div className='items d-flex '>
          <div className='item'>
          <MdLanguage className='icon'/>
         <span>English</span> 
          </div> 
          <div className='item'>
          <MdDarkMode className='icon'/>
          </div>         
          <div className='item'>
         <a href='https://www.instagram.com/apenngr/' target="_blank" ><FaInstagram className='icon'/></a> 
          </div>         
          <div className='item'>
          <a href="https://web.facebook.com/APENNig"  target="_blank" ><FaFacebook className='icon'/></a>
          </div>         
          <div className='item'>
          <img src='https://www.bing.com/th?id=OIP.ho7hCKNowRHh7u5wu1aMWQHaF9&w=278&h=224&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2' alt='avatar' className='avatar'/>
          </div>
         
        </div>
      </div>
    </div>
  </div>  
  )
}

export default NavbarDash