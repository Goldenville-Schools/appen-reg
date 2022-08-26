import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NavbarDash from '../../DashboardNav/NavbarDash'
import Sidebar from '../../Dashboard_sidebar/Sidebar'
import './registered.css'

const RegMembers = () => {

  const[GroupPhysicalDelegates, setGroupPhysicalDelegates] = useState({})

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('user')).refreshToken

    const headers = {
      Accept: '*/*',
      Authorization: `Bearer ${token}`
    }
    axios.get(`${process.env.REACT_APP_API_URL}/register`, { headers })
    .then(response => {
      setGroupPhysicalDelegates( () => {
        let registeration = response.data.registeration
        console.log(response)
        return registeration
      } )
      console.log(GroupPhysicalDelegates)
    })
  }, [])
  console.log(GroupPhysicalDelegates.delegates)
  
  return (
    <div className='reg_members'>
      <Sidebar/>
      <div className='members_container'>
          <NavbarDash/>
        <div className='table_cta'>
          <div className='table_header'>
            <h2>REGISTERATION DETAILS</h2>
            <div className='liner'></div>
          </div>
          <div className='container2'> 
            { GroupPhysicalDelegates ? 
              <table>
                {/* <thead> */}
                <tr>
                    <th>Fullname</th>
                    <th>School</th>
                    <th>Email</th>
                    <th>Phone</th> 
                    <th>Category</th>
                    <th>Size</th> 
                    <th>Accommodation</th> 
                  </tr>
                {/* </thead> */}
                {/* <tbody> */}
                  <tr key={GroupPhysicalDelegates._id}>
                    <td> {GroupPhysicalDelegates.fullName}</td>
                    <td> {GroupPhysicalDelegates.school || 'N/A'}</td>
                    <td> {GroupPhysicalDelegates.email} </td>
                    <td> {GroupPhysicalDelegates.phone}</td>
                    <td> {GroupPhysicalDelegates.category || 'N/A'}</td>
                    <td> {GroupPhysicalDelegates.size || 'N/A'}</td>
                    <td> {GroupPhysicalDelegates.accommodation || 'N/A'}</td>
                  </tr>
                {/* </tbody> */}
              </table>
              :
              <p>You have not registered for this event.</p>
            }
            
            <div className='table_header2'> 
              <h2>LIST OF DELEGATES</h2>
              <div className='liner'></div>
            </div> 
            
                  {/* { GroupPhysicalDelegates.delegates.length > 0 ? 
                    GroupPhysicalDelegates.delegates.map( (delegate, idx)=>{
                      return (
                        <table id='delegates'>
                          <thead>
                            <tr>
                                <th>Fullname</th>
                                <th>School</th>
                                <th>Email</th>
                                <th>Phone</th> 
                                <th>Category</th>
                                <th>Size</th> 
                                <th>Accommodation</th> 
                              </tr>
                            </thead>
                            <tbody>
                              <tr key={idx}>
                                  <td>{delegate.fullName}</td>
                                  <td>{delegate.school}</td>
                                  <td>{delegate.email}</td>
                                  <td>{delegate.phone}</td>
                                  <td>{delegate.category}</td>
                                  <td>{delegate.size}</td>
                                  <td>{delegate.accommodation}</td>
                              </tr>
                            </tbody>
                          </table>
                      )
                    })
                      :
                    <div></div>
                  } */}
              
            </div>
        </div>
      </div>
    </div>
  )
}

export default RegMembers