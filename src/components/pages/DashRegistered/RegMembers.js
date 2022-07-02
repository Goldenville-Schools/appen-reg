import React from 'react'
import NavbarDash from '../../DashboardNav/NavbarDash'
import Sidebar from '../../Dashboard_sidebar/Sidebar'
import './registered.css'

const RegMembers = () => {
  return (
    <div className='reg_members'>
        <Sidebar/>
        <div className='members_container'>
          <NavbarDash/>
            Registered
        </div>
    </div>
  )
}

export default RegMembers