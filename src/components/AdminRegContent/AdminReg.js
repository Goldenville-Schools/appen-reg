import React from 'react'
import {FaUserCheck} from "react-icons/fa";
import '../AdminRegContent/AdminReg.css'

const AdminReg = () => {
    const Admin = JSON.parse(localStorage.getItem('admin')).userName
    let users = JSON.parse(localStorage.getItem('adminUser'))
  return (
    <div className='RegDash'>
    <h2>Hello, <span>{Admin}</span></h2>
    <div className='card_cta'>
     <div className='cards'>
      <div className='user'>
        <h1>Total Regiseration</h1>
        <h3>1232</h3>
      </div>
        <div className='users_icon1'>
        <FaUserCheck className='icons2'/>
        </div>
     </div>
    </div>

  {/* <div> */}
    <div className='table_cta'>
        <div className='table_header'>
          <h2>REGISTERATION DETAILS</h2>
          <div className='liner'></div>
        </div>
        <div className='container2'> 
            <table>
              <tr>
                  <th>Fullname</th>
                  <th>Email</th>
                  <th>Category</th>
                  <th>Accommodation</th> 
                  <th>Location</th>
                  <th>Lodging</th>
                  <th>Shirt Size</th>
                  <th>Amount</th> 
                </tr>
                <tr>
                  <td>Frank Jordan</td>
                  <td>frankelvis46@gmail.com</td>
                  <td>Parent</td>
                  <td>Boarding</td>
                  <td>Greenspring</td>
                  <td>Five star</td>
                  <td>S</td>
                  <td>180000</td>
                </tr>
                <tr>
                <td>Frank Jordan</td>
                  <td>frankelvis46@gmail.com</td>
                  <td>Parent</td>
                  <td>Boarding</td>
                  <td>Greenspring</td>
                  <td>Five star</td>
                  <td>L</td>
                  <td>180000</td>
                </tr>
                <tr>
                <td>Frank Jordan</td>
                  <td>frankelvis46@gmail.com</td>
                  <td>Parent</td>
                  <td>Boarding</td>
                  <td>Greenspring</td>
                  <td>Five star</td>
                  <td>M</td>
                  <td>180000</td>
                </tr>
            </table>
    </div>

  </div>
  </div>
  // </div>
  )
}

export default AdminReg
