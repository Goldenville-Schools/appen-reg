import React from 'react'
import { Link } from 'react-router-dom'
import '../Navigation/Navbar.css'
import logo from '../assets/APEN.png'
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='nav-container'>
            <div className='logo'>
                <Link to='/Home'><img src={logo}  alt="logo"/></Link>
                <h3><span className='icon'></span>APEN 2022<p className='title-spa'>CONFERENCE</p></h3>
            </div>
            <div>
                <Link to='/register'><button type='submit' className='btn'>REGISTER</button></Link>
            </div>
        </div>
      
    </div>
  )
}

export default Navbar
