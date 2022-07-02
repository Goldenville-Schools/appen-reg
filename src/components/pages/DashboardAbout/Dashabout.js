import React from 'react'
import NavbarDash from '../../DashboardNav/NavbarDash'
import Sidebar from '../../Dashboard_sidebar/Sidebar'
import './Dashabout.css'

const Dashabout = () => {
  return (
    <div className='about'>
      <Sidebar/>
      <div className='about_container'>
        <NavbarDash/>
        About
      </div>
    </div>
  )
}

export default Dashabout