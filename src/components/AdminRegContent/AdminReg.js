import React, {useState, useEffect} from 'react'
import {FaUserCheck} from "react-icons/fa";
import '../AdminRegContent/AdminReg.css'
import axios from 'axios'

const AdminReg = () => {
    const Admin = JSON.parse(localStorage.getItem('admin')).userName
    // let users = JSON.parse(localStorage.getItem('adminUser'))

    const[registrations, setRegistrations] = useState([])
    const[totalRegistrations, setTotalRegistrations] = useState(0)

    const handleClick = (registration) => {
      console.log(registration);
      if (registration.delegates.length > 0) {
        localStorage.setItem('groupRegistration-admin', JSON.stringify(registration))
        window.location = '/delegate-details'
      }
    }
    
    useEffect(() => {
      const headers = {
        Accept: '*/*',
        // Authorization: `Bearer ${token}`
      }
      axios.get(`${process.env.REACT_APP_API_URL}/admin/registrations`, { headers })
      .then(response => {
        console.log(response.data.registrations);
        setRegistrations(response.data.registrations)
        setTotalRegistrations(response.data.registrations.length)
      })
      
    }, [])
  return (
    <div className='RegDash'>
    <h2>Hello, <span>{Admin}</span></h2>
    <div className='card_cta'>
     <div className='cards'>
      <div className='user'>
        <h1>Total Regiseration</h1>
        <h3>{totalRegistrations}</h3>
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
        { registrations.length > 0 ? 
          <table>
           <tr>
               <th>Fullname</th>
               <th>Email</th>
               <th>Category</th>
               <th>Accommodation</th> 
               <th>Location</th>
               <th>Lodging</th>
               <th>Shirt Size</th>
               <th>Reg Type</th>
               <th>Att. Type</th>
               <th>Amount</th> 
             </tr>
             { registrations.map(registration => {
              return (
                <tr onClick={() => handleClick(registration)}>
                  <td>{registration.fullName}</td>
                  <td>{registration.email}</td>
                  <td>{registration.category}</td>
                  <td>{registration.accommodation}</td>
                  <td>{registration.location}</td>
                  <td>{registration.lodging}</td>
                  <td>{registration.size}</td>
                  <td>{registration.category === 'N/A' ? 'Group' : 'Individual'}</td>
                  <td>{registration.accommodation === 'N/A' && registration.delegates[0].size === 'N/A' ? 'Online' : 'Physical'}</td>
                  <td>{registration.amount}</td>
                </tr>
              )
             })
             }
             
         </table>
         :
         <p>No user has registered yet</p>
        }
           
    </div>

  </div>
  </div>
  // </div>
  )
}

export default AdminReg
