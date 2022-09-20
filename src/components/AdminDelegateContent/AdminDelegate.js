import React, {useState, useEffect} from 'react'
import {FaUserCheck} from "react-icons/fa";
import '../AdminDelegateContent/AdminDelegate.css'

const AdminDelegate = () => {
    const Admin = JSON.parse(localStorage.getItem('admin')).userName

    const[delegates, setDelegates] = useState([])
    const[totalDelegates, setTotalDelegates] = useState(0)
    
    useEffect(() => {
        let delegates = JSON.parse(localStorage.getItem('groupRegistration-admin')).delegates
        setDelegates(delegates)
        setTotalDelegates(delegates.length)
    }, [])
  return (
    <div className='RegDash'>
    <h2>Hello, <span>{Admin}</span></h2>
    <div className='card_cta'>
     <div className='cards'>
      <div className='user'>
        <h1>Total Delegates</h1>
        <h3>{totalDelegates}</h3>
      </div>
        <div className='users_icon1'>
        <FaUserCheck className='icons2'/>
        </div>
     </div>
    </div>

  {/* <div> */}
    <div className='table_cta'>
        <div className='table_header'>
          <h2>DELEGATES DETAILS</h2>
          <div className='liner'></div>
        </div>
        <div className='container2'> 
        { delegates.length > 0 ? 
          <table>
           <tr>
               <th>Fullname</th>
               <th>Email</th>
               <th>Category</th>
               <th>Accommodation</th> 
               <th>Location</th>
               <th>Lodging</th>
               <th>Shirt Size</th>
             </tr>
             { delegates.map(delegate => {
              return (
                <tr>
                  <td>{delegate.fullName}</td>
                  <td>{delegate.email}</td>
                  <td>{delegate.category}</td>
                  <td>{delegate.accommodation}</td>
                  <td>{delegate.location}</td>
                  <td>{delegate.lodging}</td>
                  <td>{delegate.size}</td>
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

export default AdminDelegate
