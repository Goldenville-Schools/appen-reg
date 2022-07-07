// import { GroupContext } from 'antd/lib/checkbox/Group'
import React from 'react'
import NavbarDash from '../../DashboardNav/NavbarDash'
import Sidebar from '../../Dashboard_sidebar/Sidebar'
import './registered.css'

const RegMembers = () => {

  
  let  GroupDelegates= JSON.parse(localStorage.getItem('GroupOnlineAttendeeDetails'))
 

  console.log(GroupDelegates)
  
  return (
    <div className='reg_members'>
      <Sidebar/>
      <div className='members_container'>
          <NavbarDash/>
        <div className='table_cta'>
          <table>
            <thead>
            <tr>
                  <th>Fullname</th>
                  <th>Email</th>
                  <th>Phone number</th>
                  <th>gender</th> 
              </tr>
            </thead>
           <tbody>

                  {/* {
                    GroupDelegates.map( (group, index)=>{
                      return(
                      <tr key={index}>
                          <td> {group.name}</td>
                          <td> {group.school}</td>
                          <td> {group.email}</td>
                          <td> {group.name}</td>
                      </tr>

                    

                      )
                    })
  
                  } */}
               
           </tbody>

            
          </table>
        </div>
      </div>
             
    </div>
  )
}

export default RegMembers