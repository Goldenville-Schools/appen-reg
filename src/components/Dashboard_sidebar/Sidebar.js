import React, {useState} from 'react'
import '../Dashboard_sidebar/Sidebar.css'
import logo from '../assets/APEN.png'
import { MdDashboard} from "react-icons/md";
import { FaUsers, FaFacebook, FaInstagram, FaTwitter, FaUserAlt , FaBars} from "react-icons/fa";
import { RiLogoutCircleRFill } from "react-icons/ri";
import {NavLink} from "react-router-dom";


const Sidebar = () => {

  const[isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen (!isOpen);
  const menuItem=[
      {
          path:"/Dashboard",
          name:"Dashboard",
          icon:<MdDashboard/>
      },
      {
          path:"/StartReg",
          name:"Start Registeration",
          icon:<FaUserAlt/>
      },
      {
          path:"/RegMembers",
          name:"Registered Members",
          icon:<FaUsers/>
      },
      {
          path:"/",
          name:"Facebook",
          icon:<FaFacebook/>
      },
      {
          path:"/",
          name:"Instagram",
          icon:<FaInstagram/>
      },
      {
          path:"/",
          name:"Twitter",
          icon:<FaTwitter/>
      },
      {
          path:"/Signin",
          name:"LogOut",
          icon:<RiLogoutCircleRFill/>
      }
   
  ]

  
  return (
    <div className='sidebars'>
         <div style={{width: isOpen ? "250px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo"><img src={logo}  alt="logo"/></h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               <hr></hr>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                       
                   ))
               }
           </div>
      
      
    </div>
  )
}

export default Sidebar
