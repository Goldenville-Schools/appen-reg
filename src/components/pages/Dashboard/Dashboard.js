import React from 'react'
import DashNavbar from '../../dashboard_Nav/DashNavbar'
import Sidebar from '../../Dashboard_sidebar/Sidebar'
import '../Dashboard/Dashboard.css'


const Dashboard = () => {

  
  return (
    <div className='dashboard'>    
     <Sidebar />
     <div className='dashboard_container'>
      <DashNavbar/>
        container
     </div>
     

    </div>
  )
}

export default Dashboard
