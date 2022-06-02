import React, {useEffect, useState} from 'react'
import Navbar2 from '../../Navigation/Navbar2'
import './GroupOnline.css'

const GroupOnline = () => {
//For group form validation
const[groupFormValid, setgroupFormValid] = useState(false)
// This is the State that manages Group form field
const[groupFormField, setgroupFormField] = useState({
  group_name:"",
  group_email:"",
  group_phone:"",
  group_address:""
})

//This is the State that manages the Attendees
const [attendeesForm, setattendeesForm] = useState([
  {name:"", school:"", email:"", phone:"", address:""}

  
])

//Use UseEffect to reload the page n validate
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

const handleChanges= (e)=>{
setgroupFormField({...groupFormField, [e.target.name]:e.target.value})
console.log(groupFormField)
}
//A function to add the formsfor the attendee form
const handleAttendeeAdd = () => {
  setattendeesForm([...attendeesForm,  {name:"", school:"", email:"", phone:"", address:""}])
  console.log(attendeesForm)
}
 
  return (
    <div className='group-cta'>
      <Navbar2/>
      <div className='group-wrapper'>
        <div className='group-box-cta'>
          <div className='group-box'>
            <h1>Fill the Group Details</h1>
              <form>
                <div className='input001'>
                  <input type='text' required placeholder='Name Of Group' name='group_name'  value={groupFormField.group_name}  onChange={handleChanges} />
                </div>
                <div className='input001'>
                  <input type='email' required placeholder='Email' name='group_email' value={groupFormField.group_email} onChange={handleChanges}/>
                </div>
                <div className='input001'>
                  <input type='text'required placeholder='Phone Number'name='group_phone' value={groupFormField.group_phone} onChange={handleChanges}/>
                </div>
                <div className='input001'>
                  <input type='text'required placeholder='Address'name='group_address' value={groupFormField.group_address} onChange={handleChanges}/>
                </div>

                <h2>Form for the Attendees</h2>
                  {attendeesForm.map( (attendee, index)=>(
                    <div key= {index}className='input001'>
                        <input type='text'required placeholder='Fullname' name='name'/>
                         <div className='input001'>
                           <input type='text' required placeholder='Name Of School' name='school'/>
                         </div>
                         <div className='input001'>
                           <input type='email' required placeholder='Email' name='email'  />
                         </div>
                         <div className='input001'>
                           <input type='text'required placeholder='Phone Number'name='phone'  />
                         </div>
                         <div className='input001'>
                           <input type='text'required placeholder='Address'name='address' />
                         </div>
                         <div className='input001'>
                           <select name="category">
                             <option selected  disabled value="category" >Category</option>
                             <option value="Teacher">Teacher</option>
                             <option value="School Leader">School Leader</option>
                             <option value="School Owner">School Owner</option>
                           </select> 
                         </div>
                            <p></p>
                            <p></p>
                         {attendeesForm.length - 1 === index && attendeesForm.length <= 4 &&
                         (
                          <div className='input-add'>    
                            <button type='text' onClick={handleAttendeeAdd}>+</button>
                          </div> 
                        )}
                        
                         
                        
                     </div>
                    ))}
               
                    <div className='input-submit'>    
                      <button type='submit'>Submit</button>
                    </div> 
              </form>

          </div>
        </div>
      </div>
    </div>
  )
}

export default GroupOnline
