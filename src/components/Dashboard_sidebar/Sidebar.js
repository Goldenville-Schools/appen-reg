import React from 'react'
import '../Dashboard_sidebar/Sidebar.css'
import logo from '../assets/APEN.png'

import { MdDashboard} from "react-icons/md";
import { FaUsers, FaUserGraduate, FaFacebook, FaInstagram, FaTwitter, FaUserAlt } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { AiOutlineLogout } from "react-icons/ai";
import {Link} from "react-router-dom";




const Sidebar = () => {
  let admin = JSON.parse(localStorage.getItem('adminUser'))
  console.log(admin)
  return (
    <div className='sidebar'>
      <div className='logo'>
        <Link to='/Dashboard'>
          <img src={logo}  alt="logo"/>
        </Link>  
      </div>
      <div className='sidebar_header'>
        <h4> Welcome, <span>{admin[0].name}</span></h4>
      </div>
      <hr></hr>
      <div className='center'>
        <ul>
          <p className='title'>Dashboard</p>
          <Link to='/Dashboard'>
            <li>
              <MdDashboard className='icon'/>
            <span>Home</span></li>
          </Link>
          
          <Link to='/Dashabout'>
            <li>
            <FaUserGraduate className='icon'/><span>About</span>
            </li>
          </Link>
       

          <p className='title'>Links</p>
          <Link to='/StartReg'>
            <li>
              <FaUserAlt className='icon'/><span>Start Registration</span></li>
          </Link>
          <Link to='/RegMembers'>
            <li>
              <FaUsers className='icon'/><span>Registered Memebers</span></li>
          </Link>
          
          <li>
          <CgProfile className='icon'/><span>Profile</span></li>
        </ul> 
      </div>

      <div className='social_icons'>
      <hr></hr>
          <ul>
            <Link to='#'>
              <li><FaFacebook className='social'/></li>
            </Link>
            <Link to='#'>
              <li><FaInstagram className='social'/></li>
            </Link>
            <Link to='#'>
              <li><FaTwitter className='social'/></li>
            </Link>     
          </ul>
          
          <div className='logout'>
            <Link to='/Signin'>
              <AiOutlineLogout className='log_icon'/>
              <span>Logout</span>
            </Link> 
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
