import React, {useEffect, useState} from 'react'
import Navbar2 from '../../Navigation/Navbar2'
import './GroupOnline.css'

const GroupOnline = () => {
//For group form validation
const[groupFormValid, setgroupFormValid] = useState(false)

//For attendee form validation
const[attendeeFormValid, setattendeeFormValid] = useState(false)
// This is the State that manages Group form field
const[groupFormField, setgroupFormField] = useState([{
  group_name:"",
  group_email:"",
  group_phone:"",
  group_address:""
}])

//This is the State that manages the Attendees
const [attendeesForm, setAttendeesForm] = useState([
  {name:"", school:"", email:"", phone:"", address:"", category:""}
 
])

//Use UseEffect to reload the page n validate the Group form
useEffect( ()=>{
  if(
    groupFormField.group_name !==" "&&
    groupFormField.group_email !==" "&&
    groupFormField.group_phone !== ""&&
    groupFormField.group_address!==""
  ){
      setgroupFormValid(true)
  }else{
    setgroupFormValid(false)
  }
},[
  groupFormField.group_name,
  groupFormField.group_email,
  groupFormField.group_phone,
  groupFormField.group_address
])
//Use UseEffect to reload the page n validate the Group form
useEffect ( ()=>{
  if(
    attendeesForm.name !== ""&&
    attendeesForm.school !== ""&&
    attendeesForm.email !== ""&&
    attendeesForm.phone !== ""&&
    attendeesForm.address !== ""&&
    attendeesForm.category !== ""
  ){
    setattendeeFormValid(true)
  }else{
    setattendeeFormValid(false)
  }
},[
  attendeesForm.name,
  attendeesForm.school,
  attendeesForm.email,
  attendeesForm.phone,
  attendeesForm.address,
  attendeesForm.category 
])

// Handle group Change Event
const handleChanges= (e)=>{
// const {name, value} = e.target
setgroupFormField({...groupFormField,
  
  [e.target.name]: e.target.value})
console.log(groupFormField)
}
//A function to add the formsfor the attendee form
const handleAttendeeAdd = () => {
  setAttendeesForm([...attendeesForm, {name:"", school:"", email:"", phone:"", address:"", category:""} ])
  console.log(attendeesForm)
}

// Handle Attendee Change Event
const handleAttendeeChange =(e, index)=>{
  const {name, value} = e.target
  const attendeeList =[...attendeesForm];
  attendeeList[index][name]= value;
  setAttendeesForm(attendeeList);
  console.log(attendeesForm)
}
//Add An onsubmit eevent to the form
const handleSubmit=(e)=>{
  e.preventDefault();
  if (attendeesForm.length === 4 || attendeesForm.length < 4){
    console.log('Keep Adding');
    window.location = '/Payment'
  }else{
    return false
    
  }

  localStorage.setItem('GroupOnlineAttendeeDetails', JSON.stringify( attendeesForm ))
  localStorage.setItem('GroupOnlineGroupDetails', JSON.stringify( {...groupFormField} ) )
 
}

 
  return (
    <div className='group-cta'>
      <Navbar2/>
      <div className='group-wrapper'>
        <div className='group-box-cta'>
          <div className='group-box'>
            <h1>GROUP DETAILS</h1>
              <form autoComplete='on' onSubmit={handleSubmit}>
                <div className='input001'>
                  <input type='text' required placeholder='Name Of Group/Organisation' name='group_name'  
                  value={groupFormField.group_name}  onChange={(e) => handleChanges (e)} />
                </div>
                <div className='input001'>
                  <input type='email' required placeholder='Email' name='group_email' 
                  value={groupFormField.group_email} onChange={(e) => handleChanges (e)}/>
                </div>
                <div className='input001'>
                  <input type='text'required placeholder='Phone Number'name='group_phone'
                   value={groupFormField.group_phone} onChange={(e) => handleChanges (e)}/>
                </div>
                <div className='input001'>
                  <input type='text'required placeholder='Address'name='group_address'
                   value={groupFormField.group_address} onChange={(e) => handleChanges (e)}/>
                </div>

                <h2>DELEGATE DETAILS</h2>
                  {attendeesForm.map( (attendee, index)=>(
                     
                    <div key= {index} className='input001'>
                      <div  className='form-wrapper'>
                        <input type='text'required placeholder='Fullname' name='name' 
                            value={attendee.name} onChange = {(e) => handleAttendeeChange (e, index)}/>
                         <div className='input001'>
                           <input type='text' required placeholder='Name Of School' name='school' value={attendee.school}  onChange = {(e) => handleAttendeeChange (e, index)}/>
                         </div>
                         <div className='input001'>
                           <input type='email' required placeholder='Email' name='email' value={attendee.email}  onChange = {(e) => handleAttendeeChange (e, index)}/>
                         </div>
                         <div className='input001'>
                           <input type='text'required placeholder='Phone Number'name='phone' value={attendee.phone}  onChange = {(e) => handleAttendeeChange (e, index)}/>
                         </div>
                         <div className='input001'>
                           <input type='text'required placeholder='Address'name='address' value={attendee.address}  onChange = {(e) => handleAttendeeChange (e, index)}/>
                         </div>
                         <div className='input001'>
                           <select name="category" value={attendee.category}  onChange = {(e) => handleAttendeeChange (e, index)}>
                             <option value="category" selected>Category</option>
                             <option  value="Teacher">Teacher</option>
                             <option value="School Leader">School Leader</option>
                             <option value="School Owner">School Owner</option>
                           </select> 
                         </div>
                      </div>    
                         {attendeesForm.length - 1 === index && attendeesForm.length < 4 &&
                         (
                          <div className='input-add'>    
                            <button type='text' onClick={handleAttendeeAdd}>+</button>
                          </div> 
                        )}
                    
                    </div>
                       
                  ))}
               
                    <div className='input-submit'>    
                      <button type='submit' onClick={attendeeFormValid}>Submit</button>
                    </div> 
              </form>

          </div>
        </div>
      </div>
    </div>
  )
}

export default GroupOnline
