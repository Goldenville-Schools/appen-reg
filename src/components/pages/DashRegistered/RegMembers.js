// import { GroupContext } from 'antd/lib/checkbox/Group'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

import NavbarDash from '../../DashboardNav/NavbarDash'
import Sidebar from '../../Dashboard_sidebar/Sidebar'
import './registered.css'

const RegMembers = () => {

  
  // let  GroupOnlineDelegates= JSON.parse(localStorage.getItem('GroupOnlineAttendeeDetails'))
  // let  GroupPhysicalDelegates= JSON.parse(localStorage.getItem('GroupPhysicalAttendeeDetails'))

  const[GroupPhysicalDelegates, setGroupPhysicalDelegates] = useState({})

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('token')).refreshToken

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
              <td> {GroupPhysicalDelegates.category}</td>              
              <td> {GroupPhysicalDelegates.size}</td>
              <td> {GroupPhysicalDelegates.accommodation}</td>
          </tr>
                  {/* {
                    GroupPhysicalDelegates ? GroupPhysicalDelegates.map( (groupPhysical, index)=>{
                      return(
                        <tr key={GroupPhysicalDelegates._id}>
                        <td> {GroupPhysicalDelegates.fullName}</td>
                        <td> {GroupPhysicalDelegates.school || 'N/A'}</td>
                        <td> {GroupPhysicalDelegates.email}</td>
                        <td> {GroupPhysicalDelegates.category}</td>
                        <td> {GroupPhysicalDelegates.phone}</td>
                        <td> {GroupPhysicalDelegates.size}</td>
                        <td> {GroupPhysicalDelegates.accommodation}</td>
                    </tr>
                      )
                    }):null
                  } */}
           </tbody>
           <tbody>
        
           </tbody>
          </table>

          {/* <table id='delegates'>
          <thead>
            <tr>
                  <th>Fullname</th>
                  <th>School</th>
                  <th>Email</th>
                  <th>Category</th>
                  <th>Phone</th> 
                  <th>Size</th> 
                  <th>Accommodation</th> 
              </tr>
            </thead>
            <tbody>
            {
              GroupOnlineDelegates.map( (groupOnline, index)=>{
                return(
                <tr key={index}>
                    <td> {groupOnline.name}</td>
                    <td> {groupOnline.school}</td>
                    <td> {groupOnline.email}</td>
                    <td> {groupOnline.category}</td>
                    <td> {groupOnline.phone}</td>
                    <td> null</td>
                    <td> null</td>
                    
                </tr>

                )
              })

            }
            </tbody>
          </table> */}
         
          </div>
        </div>
      </div>
             
    </div>
  )
}

export default RegMembers