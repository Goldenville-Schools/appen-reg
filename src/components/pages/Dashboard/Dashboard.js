import React from 'react'
import Dashhome from '../../DashboardMain/Dashhome'
import Sidebar from '../../Dashboard_sidebar/Sidebar'
import '../Dashboard/Dashboard.css'


const Dashboard = () => {

  
  return (
    <div className='dashboard'>    
     <Sidebar />
     <Dashhome/>

    </div>
  )
}

export default Dashboard
