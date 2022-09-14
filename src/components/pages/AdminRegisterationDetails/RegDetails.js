import React from 'react'
import AdminReg from '../../AdminRegContent/AdminReg'
import AdminSide from '../../AdminSidebar/AdminSide'

const RegDetails = () => {
  return (
    <div className='AdminDash'>
        <div className='AdminGlass'>
          <AdminSide/>
          <AdminReg/>
        </div>
    </div>
  )
}

export default RegDetails
