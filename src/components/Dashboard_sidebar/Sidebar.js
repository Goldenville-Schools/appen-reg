import React from 'react'
import '../Dashboard_sidebar/Sidebar.css'
import logo from '../assets/APEN.png'

import { MdDashboard} from "react-icons/md";
import { FaUsers, FaUserGraduate, FaFacebook, FaInstagram, FaTwitter, FaUserAlt } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { AiOutlineLogout } from "react-icons/ai";



const Sidebar = () => {
  let admin = JSON.parse(localStorage.getItem('adminUser'))
  console.log(admin)
  return (
    <div className='sidebar'>
      <div className='logo'>
        <img src={logo}  alt="logo"/>
      </div>
      <div className='sidebar_header'>
        <h4> Welcome, <span>{admin[0].name}</span></h4>
      </div>
      <hr></hr>
      <div className='center'>
        <ul>
          <p className='title'>MAIN</p>
          <li>
            <MdDashboard className='icon'/>
          <span>Dashboard</span></li>
          <li>
          <FaUserGraduate className='icon'/><span>About</span></li>

          <p className='title'>LINKS</p>
          <li>
            <FaUserAlt className='icon'/><span>Start Registration</span></li>
          <li>
            <FaUsers className='icon'/><span>Registered Memebers</span></li>
          <li>
          <CgProfile className='icon'/><span>Profile</span></li>
        </ul> 
      </div>

      <div className='social_icons'>
      <hr></hr>
          <ul>
            <li><FaFacebook className='social'/></li>
            <li><FaInstagram className='social'/></li>
            <li><FaTwitter className='social'/></li>
          </ul>
          
          <div className='logout'>
            <AiOutlineLogout className='log_icon'/>
            <span>Logout</span>
          </div>
          <div  className='bottom'>
            <div className='colorOption'></div>
            <div className='colorOption'></div>
          </div>
        </div>
      
      
    </div>
  )
}

export default Sidebar
