import React,{useState} from 'react'
import '../AdminSidebar/AdminSide.css'
import logo from '../assets/APEN.png'
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { SidebarData } from "../../Data/Data";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import {NavLink, Link} from "react-router-dom";

const AdminSide = () => {
    const [selected, setSelected] = useState(0);

    const [expanded, setExpaned] = useState(true)
  
    const sidebarVariants = {
      true: {
        left : '0'
      },
      false:{
        left : '-60%'
      }
    }
  return (
    <>
    <div className="bars" style={expanded?{left: '60%'}:{left: '5%'}} onClick={()=>setExpaned(!expanded)}>
      <UilBars />
    </div>
  <motion.div className='sidebar'
  variants={sidebarVariants}
  animate={window.innerWidth<=768?`${expanded}`:''}
  >
    <div className="logo">
      <img src={logo} alt="logo" />
      <span>
        Ap<span>e</span>n
      </span>
    </div>

    <div className="menu">
      {SidebarData.map((item, index) => {
        return (
          <NavLink to={item.path}
            className={selected === index ? "menuItem active" : "menuItem"}
            key={index}
            onClick={() => setSelected(index)}
          >
            <item.icon />
            <span>{item.heading}</span>
          </NavLink>
        );
      })}
      {/* signoutIcon */}
      <div className="menuItem">
        <Link to ='/Admin'><UilSignOutAlt /></Link>
      </div>
    </div>
  </motion.div>
  </>
  )
}

export default AdminSide
