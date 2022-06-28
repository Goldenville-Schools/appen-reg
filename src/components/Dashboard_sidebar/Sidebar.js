import React from 'react'
import '../Dashboard_sidebar/Sidebar.css'
import logo from '../assets/APEN.png'

const Sidebar = () => {
  let admin = JSON.parse(localStorage.getItem('adminUser'))
  console.log(admin)
  return (
    <div className='sidebar'>
      <div className='sidebar_header'>
        <h4> Welcome {admin[0].name}</h4>
      </div>
   
      <div className='logo'>
        <img src={logo}  alt="logo"/>
      </div>
      <div>
        <button type='button' className='btn-praimary'>LogOut</button>
      </div>
    </div>
  )
}

export default Sidebar
