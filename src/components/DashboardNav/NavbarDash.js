import React from 'react'
import './NavbarDash.css'
import { MdLanguage } from "react-icons/md";
import {MdChatBubbleOutline } from "react-icons/md";
import {MdOutlineViewList} from "react-icons/md";
import {MdDarkMode} from "react-icons/md";
import {MdOutlineFullscreenExit} from "react-icons/md";


const NavbarDash = () => {
  return (
    <div className='navbar_dash'>
    <div className='container'>
      <div className='wrapper d-flex justify-content-end align-items-center'>
       
        <div className='items d-flex '>
          <div className='item'>
          <MdLanguage className='icon'/>
         <span>English</span> 
          </div>
         
          <div className='item'>
          <MdOutlineFullscreenExit className='icon'/>
          </div>
          <div className='item'>
          <MdDarkMode className='icon'/>
          </div>
          <div className='item'>
          <MdChatBubbleOutline className='icon'/>
          </div>
          <div className='item'>
          <MdOutlineViewList className='icon'/>
          </div>
         
         
          <div className='item'>
          <img src='https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='avatar' className='avatar'/>
          </div>
         
        </div>
      </div>
    </div>
  </div>  
  )
}

export default NavbarDash