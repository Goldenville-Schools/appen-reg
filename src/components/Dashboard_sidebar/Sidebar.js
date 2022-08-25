import React, {useState} from 'react'
import '../Dashboard_sidebar/Sidebar.css'
import logo from '../assets/APEN.png'
import { MdDashboard} from "react-icons/md";
import { FaBars,  FaUserCheck} from "react-icons/fa";
import { RiLogoutCircleRFill } from "react-icons/ri";
import {NavLink, Link} from "react-router-dom";


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
          path:"/RegMembers",
          name:"Registered Members",
          icon:<FaUserCheck/>
      },
  
      {
          path:"/Signin",
          name:"Logout",
          icon:<RiLogoutCircleRFill/>
      }
   
  ]

  
  return (
    <div className='sidebars'>
        <div style={{width: isOpen ? "220px" : "44px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo"><Link to='/Dashboard'><img src={logo}  alt="logo"/></Link></h1>
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
