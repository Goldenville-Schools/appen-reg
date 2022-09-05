import React, {useEffect, useState} from 'react'
import Navbar2 from '../../Navigation/Navbar2'
import './GroupOnline.css'

import calcAmount from '../../../util/calcAmount'

const GroupOnline = () => {
//For group form validation
const[groupFormValid, setgroupFormValid] = useState(false)

//For attendee form validation
const[attendeeFormValid, setattendeeFormValid] = useState(false)
// This is the State that manages Group form field
const[groupFormField, setgroupFormField] = useState({
  fullName:"",
  email:"",
  phone:"",
  address:""
})

//This is the State that manages the Attendees
const [attendeesForm, setAttendeesForm] = useState([
  {fullName:"", school:"", email:"", phone:"", address:"", category:""}
 
])

//Use UseEffect to reload the page n validate the Group form
useEffect( ()=>{
  if(
    groupFormField.fullName !==" "&&
    groupFormField.email !==" "&&
    groupFormField.phone !== ""&&
    groupFormField.address!==""
  ){
      setgroupFormValid(true)
  }else{
    setgroupFormValid(false)
  }
},[
  groupFormField.fullName,
  groupFormField.email,
  groupFormField.phone,
  groupFormField.address
])
//Use UseEffect to reload the page n validate the Group form
useEffect ( ()=>{
  if(
    attendeesForm.fullName !== ""&&
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
  attendeesForm.fullName,
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

}
//A function to add the forms for the attendee form
const handleAttendeeAdd = () => {
  setAttendeesForm([...attendeesForm, {fullName:"", school:"", email:"", phone:"", address:"", category:""} ])
  
}

//A function to remove the form 
const handleAttendeeRemove = (index)=>{
  const attendeeList = [...attendeesForm];
  attendeeList.splice(index, 1);
  setAttendeesForm(attendeeList)
}

// Handle Attendee Change Event
const handleAttendeeChange =(e, index)=>{
  const {name, value} = e.target
  const attendeeList =[...attendeesForm];
  attendeeList[index][name]= value;
  setAttendeesForm(attendeeList);

}
//Add An onsubmit eevent to the form
const handleSubmit=(e)=>{
  e.preventDefault();
  if (attendeesForm.length === 5 || attendeesForm.length < 5){
    const amount = calcAmount(groupFormField, attendeesForm, 190000)
    console.log(amount)
    window.location.href = `${process.env.REACT_APP_PAYSTACK_URL}?amount=${amount}&readonly=amount`
  }else{
    return false
  }
 
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
                  <input type='text' required placeholder='Name Of Group/Organisation' name='fullName'  
                  value={groupFormField.fullName}  onChange={(e) => handleChanges (e)} />
                </div>
                <div className='input001'>
                  <input type='email' required placeholder='Email' name='email' 
                  value={groupFormField.email} onChange={(e) => handleChanges (e)}/>
                </div>
                <div className='input001'>
                  <input type='text'required placeholder='Phone Number'name='phone'
                   value={groupFormField.phone} onChange={(e) => handleChanges (e)}/>
                </div>
                <div className='input001'>
                  <input type='text'required placeholder='Address'name='address'
                   value={groupFormField.address} onChange={(e) => handleChanges (e)}/>
                </div>

                <h2>DELEGATE DETAILS</h2>
                  {attendeesForm.map( (attendee, index)=>(
                     
                    <div key= {index} className='input001'>
                      <div  className='form-wrapper'>
                        <input type='text'required placeholder='Fullname' name='fullName' 
                            value={attendee.fullName} onChange = {(e) => handleAttendeeChange (e, index)}/>
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
                             <option  value="Parent">Parent</option>
                             <option  value="Admin Staff">Admin Staff</option>
                             <option value="School Leader">School Leader</option>
                             <option value="School Owner">School Owner</option>
                           </select> 
                         </div>
                      </div>
                        {
                          attendeesForm.length!== 1 &&
                          ( 
                            <div className='input-add'>
                              <button type='text' onClick={ ()=>handleAttendeeRemove(index)}> - </button>
                            </div>
                        )}    
                         {attendeesForm.length - 1 === index && attendeesForm.length < 5 &&
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
