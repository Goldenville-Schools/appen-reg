import React from 'react'
import AdminContent from '../../AdminContent/AdminContent'
import AdminSide from '../../AdminSidebar/AdminSide'
import '../AdminDashboard/AdminDash.css'


const AdminDashboard = () => {
  return (
    <div className='AdminDash'>
        <div className='AdminGlass'>
          <AdminSide/>
          <AdminContent/>
        </div>
    </div>
  )
}

export default AdminDashboard
