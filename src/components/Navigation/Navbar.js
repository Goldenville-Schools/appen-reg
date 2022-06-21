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
                <h4>APEN 2022<p className='title-spa'>CONFERENCE</p></h4>
            </div>
            <div>
                <Link to='/SignUp'><button type='submit' className='btn'>SignUp</button></Link>
            </div>
        </div>
      
    </div>
  )
}

export default Navbar
