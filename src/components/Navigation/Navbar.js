import React from 'react'
import { Link } from 'react-router-dom'
import '../Navigation/Navbar.css'
import logo from '../assets/APEN.png'

const Navbar = () => {
  return (
    <div className='navi'>
        <div className='nav-container'>
            <div className='logo'>
              <Link to='/'><img src={logo}  alt="logo"/></Link>
                <h4>APEN 2022<p className='title-spa'>CONFERENCE</p></h4>
            </div>
              <Link to='/Signin'><button type='submit' className='btn'>Sign In</button></Link>
        </div>
    </div>
  )
}

export default Navbar
