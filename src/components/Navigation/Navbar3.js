import React from 'react'
import { Link } from 'react-router-dom'
import '../Navigation/Navbar3.css'
import logo2 from '../assets/APEN.png'

const Navbar3 = () => {
  return (
    <div className='navbar-trans'>
      <div className='navbar-trans-cta'>
        <div className='logo2'>
            <Link to='/'><img src={logo2}  alt="logo"/></Link>
            <h4>APEN 2022<p className='title-spa'>CONFERENCE</p></h4>
        </div>
      </div>
    </div>
  )
}

export default Navbar3
