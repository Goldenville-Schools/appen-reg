// import { GroupContext } from 'antd/lib/checkbox/Group'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

import NavbarDash from '../../DashboardNav/NavbarDash'
import Sidebar from '../../Dashboard_sidebar/Sidebar'
import './registered.css'

const RegMembers = () => {

  const[GroupPhysicalDelegates, setGroupPhysicalDelegates] = useState({})
  // const[GroupOnlineDelegates, setGroupOnlineDelegates] = useState({}) //Will I need to create grouponline state here
  

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('user')).refreshToken

    const headers = {
      Accept: '*/*',
      Authorization: `Bearer ${token}`
    }
    axios.get(`http://localhost:4000/register`, { headers })
    .then(response => {
      setGroupPhysicalDelegates( () => {
        let registeration = response.data.registeration
        return registeration
      } )
      console.log(GroupPhysicalDelegates)
    })
  }, [])
  // console.log(GroupDelegates)
  
  return (
    <div className='reg_members'>
      <Sidebar/>
      <div className='members_container'>
          <NavbarDash/>
        <div className='table_cta'>
          <div className='table_header'>
            <h2>LIST OF ATTENDEES</h2>
            <div className='liner'></div>
          </div>
          <div className='container'>
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
           <tr key={GroupPhysicalDelegates._id}>
              <td> {GroupPhysicalDelegates.fullName}</td>
              <td> {GroupPhysicalDelegates.school || 'N/A'}</td>
              <td> {GroupPhysicalDelegates.email}</td>
              <td> {GroupPhysicalDelegates.phone}</td>
              <td> {GroupPhysicalDelegates.category || 'N/A'}</td>
              <td> {GroupPhysicalDelegates.size || 'N/A'}</td>
              <td> {GroupPhysicalDelegates.accommodation || 'N/A'}</td>
          </tr>
           </tbody>
          </table>

          <table id='delegates'>
      
            <tbody>
            {/* <tr key={GroupOnlineDelegates._id}>
              <td> {GroupOnlineDelegates.fullName}</td>
              <td> {GroupOnlineDelegates.school || 'N/A'}</td>
              <td> {GroupOnlineDelegates.email}</td>
              <td> {GroupOnlineDelegates.phone}</td>
              <td> {GroupOnlineDelegates.category}</td>              
              <td> {GroupOnlineDelegates.size}</td>
              <td> {GroupOnlineDelegates.accommodation}</td>
          </tr> */}
            </tbody>
          </table>
         


          </div>
        </div>
      </div>
             
    </div>
  )
}

export default RegMembers