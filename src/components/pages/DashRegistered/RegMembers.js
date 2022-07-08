// import { GroupContext } from 'antd/lib/checkbox/Group'
import React from 'react'
import NavbarDash from '../../DashboardNav/NavbarDash'
import Sidebar from '../../Dashboard_sidebar/Sidebar'
import './registered.css'

const RegMembers = () => {

  
  let  GroupOnlineDelegates= JSON.parse(localStorage.getItem('GroupOnlineAttendeeDetails'))
  let  GroupPhysicalDelegates= JSON.parse(localStorage.getItem('GroupPhysicalAttendeeDetails'))
 

  // console.log(GroupDelegates)
  
  return (
    <div className='reg_members'>
      <Sidebar/>
      <div className='members_container'>
          <NavbarDash/>
        <div className='table_cta'>
          <div className='table_header'>
            <h2>LIST OF DELEGATES</h2>
            <div className='liner'></div>
          </div>
          <div className='container'>
          <table id='delegates'>
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
                  {
                    GroupPhysicalDelegates.map( (groupPhysical, index)=>{
                      return(
                        <tr key={index}>
                        <td> {groupPhysical.fullName}</td>
                        <td> {groupPhysical.school}</td>
                        <td> {groupPhysical.email}</td>
                        <td> {groupPhysical.category}</td>
                        <td> {groupPhysical.phone}</td>
                        <td> {groupPhysical.size}</td>
                        <td> {groupPhysical.accommodation}</td>
                    </tr>
                      )
                    })
                  }
               
           </tbody>
          </table>
          </div>
        </div>
      </div>
             
    </div>
  )
}

export default RegMembers