import React, {useState, useEffect} from 'react'
import Navbar2 from '../../Navigation/Navbar2'
import './IndiviPhy.css'

import calcAmount from '../../../util/calcAmount'

const IndiviPhy = () => {

  //Forvalidate 
  const[formValid, setFormValid] = useState(false)

  //Set the state for the form
 const [formField, setFormField] = useState({
  fullName: "",
  school: "",
  email:"",
  phone:"",
  address: "",
  category:"",
  size:"",
  accommodation:""
})

 //Use The UseEffect to validate the form and reload on every Input
 useEffect( ()=>{
  if(
    formField.fullName !== "" &&
    formField.school !== "" &&
    formField.email !== "" &&
    formField.phone !== "" &&
    formField.address !== "" &&
    formField.category !== "" &&
    formField.size !== "" &&
    formField.accommodation !== ""
  ){
    setFormValid(true)
  }else{
    setFormValid(false)
  }
 }, [
  formField.fullName,
  formField.school,
  formField.email,
  formField.phone, 
  formField.address,
  formField.category, 
  formField.size,
  formField.accommodation
 ])

 //Create a function to handle the change event for the form data
 const handlerChange = (e)=>{
 
    setFormField({...formField, [e.target.name]:e.target.value})
    console.log(formField)
 }
  
 
  //Submit  form
 const submitHandler =(e)=>{
  e.preventDefault()

  const amount = calcAmount(formField, [], 85500)
  console.log(amount);
  // localStorage.setItem('IndividualPhysicalDetails', JSON.stringify([{...formField}]))
  window.location = "/Payment"
}


  return (
    <div className='individual-cta-p'>
    <Navbar2/>
    <div className='individual-wrapper-p'>
      <div className='indivi-box-p'>
        <form  onSubmit={submitHandler} autoComplete = 'off'>
            <div className='input100'>
                <input type='text' placeholder='Fullname' name='fullName' value={formField.fullName} onChange={handlerChange} required/>
            </div>
            <div className='input100'>
              <input type='text' required placeholder='Name Of School' name='school' value={formField.school} onChange={handlerChange}/>
            </div>
            <div className='input100'>
              <input type='email' required placeholder='Email' name='email' value={formField.email} onChange={handlerChange} />
            </div>
            <div className='input100'>
              <input type='text'required placeholder='Phone Number'name='phone' value={formField.phone} onChange={handlerChange} />
            </div>
            <div className='input100'>
              <input type='text'required placeholder='Address'name='address' value={formField.address} onChange={handlerChange}/>
            </div>
            <div className='input100'>
              <select name="category" value={formField.category}  onChange = {(e) => handlerChange(e)} >
                <option  value="category" selected>Category</option>
                <option value="Teacher">Teacher</option>
                <option  value="Admin Staff">Admin Staff</option>
                <option value="School Leader">School Leader</option>
                <option value="School Owner">School Owner</option>
              </select> 
            </div>
            <div className='input100'>
              <select name="size" value={formField.size}   onChange = {(e) => handlerChange(e)}>
                <option  value="size" selected>Tshirt Size</option>
                <option value="s">s</option>
                <option value="m">m</option>
                <option value="l">L</option>
                <option value="xl">xL</option>
              </select> 
            </div>
            <div className='input100'>
              <select name="accommodation" value={formField.accommodation}  onChange = {(e) => handlerChange (e)} >
                <option  value="accommodation" selected>Accommodation Preference</option>
                <option value="Boarding">Boarding</option>
                <option value="Not Boarding">Not Boarding</option>
              </select> 
            </div>
            <div className='input-submit'>    
              <button type='submit' onClick={formValid}>Submit</button>
            </div>   
        </form>
      </div>
    </div>
  </div>
  )
}

export default IndiviPhy
