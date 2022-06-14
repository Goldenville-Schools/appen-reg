import React from 'react'
import { Link } from 'react-router-dom'
import '../Navigation/Navreg.css'
import logo2 from '../assets/APEN.png'

const Navreg = () => {
  return (
    <div className='navreg'>
    <div className='navreg-cta'>
      <div className='logo2'>
          <Link to='/Home'><img src={logo2}  alt="logo"/></Link>
          <h4>APEN 2022<p className='title-spa'>CONFERENCE</p></h4>
      </div>
    </div>
  </div>
  )
}

export default Navreg
