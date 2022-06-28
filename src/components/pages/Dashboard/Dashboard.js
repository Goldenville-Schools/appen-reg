import React from 'react'
import Sidebar from '../../Dashboard_sidebar/Sidebar'
import '../Dashboard/Dashboard.css'


const Dashboard = () => {

    let admin = JSON.parse(localStorage.getItem('adminUser'))
    console.log(admin)
  return (
    <div className='dashboard'>
        
     <Sidebar />
    </div>
  )
}

export default Dashboard
