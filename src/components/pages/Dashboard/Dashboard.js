import React from 'react'
import NavbarDash from '../../DashboardNav/NavbarDash'

import Sidebar from '../../Dashboard_sidebar/Sidebar'
import '../Dashboard/Dashboard.css'



const Dashboard = () => {
  return (
    <div className='dashboard'>    
     <Sidebar />
     <div className='dashboard_container'>
      <NavbarDash/>
        container home
     </div>
     
    </div>
   
    
  )
}

export default Dashboard
