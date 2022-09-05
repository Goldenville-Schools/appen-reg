import React, {useState, useEffect} from 'react'
import Navbar2 from '../../Navigation/Navbar2'
import './IndiviPhy.css'

import calcAmount from '../../../util/calcAmount'
import { hasFormSubmit } from '@testing-library/user-event/dist/utils'

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
  accommodation:"",
  location:"",
  lodging:""
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
   
 }
  
  //Submit  form
 const submitHandler =(e)=>{
  e.preventDefault()

  const amount = calcAmount(formField, [], 72000)
  console.log(amount);
  const url = `${process.env.REACT_APP_PAYSTACK_URL}?amount=${amount}&readonly=amount`
  // localStorage.setItem('IndividualPhysicalDetails', JSON.stringify([{...formField}]))
  window.location.href = url
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
                <option value="Parent">Parent</option>
                <option  value="Admin Staff">Admin Staff</option>
                <option value="School Leader">School Leader</option>
                <option value="School Owner">School Owner</option>
              </select> 
            </div>
            <div className='input100'>
              <select name="size" value={formField.size}   onChange = {(e) => handlerChange(e)}>
                <option  value="TSHIRT SIZE" selected>Tshirt Size</option>
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
            { formField.accommodation == 'Boarding' ?
              <div className='input001'>
                <select name="location"  
                value={formField.location}  onChange = {(e) => handlerChange (e)} >
                  <option  value="Please Select" selected>Please Select</option>
                  <option value="Greensprings Campus Lekki">Greensprings Campus Lekki</option>
                  <option value="Swiss International Hotel VGC">Swiss International Hotel VGC</option>
                  <option value="The Patron Hotel">The Patron Hotel</option>
                </select> 
              </div>
              :
              <div></div>
            }

            { formField.accommodation == 'Boarding' && formField.location == "Greensprings Campus Lekki" ?
              <div className='input001'>
                <select name="lodging"  
                value={formField.lodging}  onChange = {(e) => handlerChange (e)} >
                  <option  value="Please Select" selected>Please Select</option>
                  <option value="Single Bed">Single Bed - N35,000</option>
                  <option value="Dormitory Style">Dormitory Style - N25,000</option>
                </select> 
              </div>
              :
              <div></div>
            }
            { formField.accommodation == 'Boarding' && formField.location == "Swiss International Hotel VGC" ?
              <div className='input001'>
                <select name="lodging"  
                value={formField.lodging}  onChange = {(e) => handlerChange (e)} >
                  <option  value="Please Select" selected>Please Select</option>
                  <option value="Superior Room">Standard Room - N65,000</option>
                  <option value="Deluxe Room">Deluxe Room - N75,000</option>
                </select> 
              </div>
              :
              <div></div>
            }
            { formField.accommodation == 'Boarding' && formField.location == "The Patron Hotel" ?
              <div className='input001'>
                <select name="lodging"  
                value={formField.lodging}  onChange = {(e) => handlerChange (e)} >
                  <option  value="Please Select" selected>Please Select</option>
                  <option value="Standard Room">Standard Room - N27,000</option>
                  <option value="Executive Room">Executive Room - N37,000</option>
                </select> 
              </div>
              :
              <div></div>
            }
            <div className='input-submit'>    
              <button type='submit' onClick={submitHandler}>Next</button>
            </div>   
        </form>
      </div>
    </div>
  </div>
  )
}

export default IndiviPhy
