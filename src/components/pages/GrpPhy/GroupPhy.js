import React, { useEffect, useState } from 'react'
import Navbar2 from '../../Navigation/Navbar2'
import './GroupPhy.css'

import calcAmount from '../../../util/calcAmount'

const GroupPhy = () => {
  //Validate thegroup Form
  const[groupValid, setGroupValid] = useState(false)
  //Manage the group state
  const[groupForm, setgroupForm] = useState({
    fullName:"",
    email:"",
    phone:"",
    address:""
  })
  //Create an Onchange event to manage state
  const handleGroupChange =(e)=>{
  setgroupForm({...groupForm, [e.target.name]:e.target.value})
    console.log(groupForm)
  }
  ///Use UseEffect to reload the page n validate the Group form
  useEffect ( ()=>{
    if(
      groupForm.fullName !== "" &&
      groupForm.email !== "" &&
      groupForm.phone !== "" &&
      groupForm.address !== ""
    ){
      setGroupValid(true)
    }else{
      setGroupValid(false)
    }
  },[
    groupForm.fullName,
    groupForm.email,
    groupForm.phone,
    groupForm.address
  ])

   //Manage the Single attendee form state
   const[attendeesForm, setAttendeesForm] = useState([
     {fullName:"", school:"", email:"", phone:"", address:"", category:"", size:"", accommodation:"" }
   
    ])
  //HandleChange for Attendee Single Form
  const handleAttendeeChange =(e, index)=>{
    const{name, value} = e.target;
    const attendeeList = [...attendeesForm];
    attendeeList[index][name]= value;
    setAttendeesForm(attendeeList)
    // console.log(attendeeList)
  }  

  //A function to add the formsfor the attendee form
  const handleAdd =()=>{
    setAttendeesForm([...attendeesForm, {fullName:"", school:"", email:"", phone:"", address:"", category:"", size:"", accommodation:""} ])
    console.log(attendeesForm)
  }
  //Form Validation for Single attendee form
  const[attendeeFormValid, setAttendeeFormValid] = useState(false)
    ///Use UseEffect to reload the page n validate the ATTENDEE form
    useEffect ( ()=>{
      if(
        attendeesForm.fullName !== "" &&
        attendeesForm.email !== "" &&
        attendeesForm.school !== "" &&
        attendeesForm.phone !== "" &&
        attendeesForm.address !== "" &&
        attendeesForm.category !== "" &&
        attendeesForm.size !== "" &&
        attendeesForm.accommodation !== ""
      ){
        setAttendeeFormValid(true)
      }else{
        setAttendeeFormValid(false)
      }
    },[
      attendeesForm.fullName,
      attendeesForm.email,
      attendeesForm.school,
      attendeesForm.phone,
      attendeesForm.address,
      attendeesForm.category,
      attendeesForm.size,
      attendeesForm.accommodation
])

////Add An onsubmit eevent to the form
const handleSubmit =(e)=>{
  e.preventDefault();
  const amount = calcAmount(groupForm, attendeesForm, 200000)
  console.log(amount);
  // localStorage.setItem('GroupPhysicalGroupDetails', JSON.stringify({...groupForm}))
  // localStorage.setItem('GroupPhysicalAttendeeDetails', JSON.stringify( attendeesForm ))

  window.location = '/Payment'
  

}
  

  return (
    <div className='group-cta-p'>
      <Navbar2/>
      <div className='group-wrapper-p'>
        <div className='group-box-cta-p'>
          <div className='group-box-p'>
            <h1>Group Details</h1>
            <form onSubmit={handleSubmit} autoComplete = 'off'>
              <div className='input001'>
                  <input type='text' placeholder='Name Of Group/Organisation' name='fullName' 
                  value={groupForm.fullName} onChange={(e) => handleGroupChange (e)} required/>
                  {/* <p>{groupForm.fullName}</p> */}
              </div>
              <div className='input001'>
                <input type='email' placeholder='Email' name='email'
                value={groupForm.email} onChange={(e) => handleGroupChange (e)}  required />
              </div>
              <div className='input001'>
                <input type='tel'placeholder='Phone Number'name='phone' 
                  value={groupForm.phone} onChange={(e) => handleGroupChange (e)} required  />
              </div>
              <div className='input001'>
                <input type='text'placeholder='Address'name='address' 
                 value={groupForm.address}  onChange={(e) => handleGroupChange (e)} required />
              </div>

              <h2>DELEGATE DETAILS</h2>
              {
                attendeesForm.map( (attendee, index)=>(
                // <div className='form-wrapper'>
                  
                <div  key= {index} className='input001'>
                  <div  className='form-wrapper'>
                      <input type='text' placeholder='Fullname' name='fullName'
                      value={attendee.fullName}  onChange = {(e) => handleAttendeeChange (e, index)}required/>
                      {/* <p>{attendee.name}</p> */}
                   
                    <div className='input001'>
                      <input type='text' required placeholder='Name Of School' name='school' 
                        value={attendee.school}  onChange = {(e) => handleAttendeeChange (e, index)}/>
                    </div>
                    <div className='input001'>
                      <input type='email' required placeholder='Email' name='email' 
                        value={attendee.email}  onChange = {(e) => handleAttendeeChange (e, index)} />
                    </div>
                    <div className=''>
                      <input type='tel'required placeholder='Phone Number'name='phone' 
                        value={attendee.phone}  onChange = {(e) => handleAttendeeChange (e, index)} />
                    </div>
                    <div className='input001'>
                      <input type='text'required placeholder='Address'name='address' 
                        value={attendee.address}  onChange = {(e) => handleAttendeeChange (e, index)}/>
                    </div>
                    <div className='input001'>
                      <select name="category"   value={attendee.category}  onChange = {(e) => handleAttendeeChange (e, index)}>
                        <option  value="category" selected>Category</option>
                        <option value="Teacher">Teacher</option>
                        <option value="School Leader">School Leader</option>
                        <option value="School Owner">School Owner</option>
                      </select> 
                    </div>
                    <div className='input001'>
                      <select name="size"   value={attendee.size}  onChange = {(e) => handleAttendeeChange (e, index)}>
                        <option  value="size" selected>Size</option>
                        <option value="s">s</option>
                        <option value="m">m</option>
                        <option value="l">L</option>
                        <option value="xl">xL</option>
                      </select> 
                    </div>
                    <div className='input001'>
                      <select name="accommodation"  
                      value={attendee.accommodation}  onChange = {(e) => handleAttendeeChange (e, index)} >
                        <option  value="accommodation" selected>Accommodation Preference</option>
                        <option value="Boarding">Boarding</option>
                        <option value="Not Boarding">Not Boarding</option>
                      </select> 
                    </div>
                  </div>
                {attendeesForm.length - 1 === index &&
                  (
                    <div className='input-add'>    
                      <button type='text' onClick={handleAdd}>+</button>
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

export default GroupPhy
