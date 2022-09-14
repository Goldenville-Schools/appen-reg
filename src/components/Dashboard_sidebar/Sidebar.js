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
  const menuItems=[
      {
          path:"/Dashboard",
          name:"Dashboard",
          icon1:<MdDashboard/>
      },
 
      {
          path:"/RegMembers",
          name:"Registered Members",
          icon1:<FaUserCheck/>
      },
  
      {
          path:"/Signin",
          name:"Logout",
          icon1:<RiLogoutCircleRFill/>
      }
   
  ]

  
  return (
    <div className='sidebars1'>
        <div style={{width: isOpen ? "230px" : "53px"}} className="sidebar1">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo"><Link to='/Dashboard'><img src={logo}  alt="logo"/></Link></h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars1">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               <hr></hr>
               {
                   menuItems.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link1" activeclassName="active1">
                           <div className="icon">{item.icon1}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text1">{item.name}</div>
                       </NavLink>
                       
                   ))
               }
        </div>
      
      
    </div>
  )
}

export default Sidebar
