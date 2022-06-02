import React, {useState, useEffect} from 'react'
import Navbar2 from '../../Navigation/Navbar2'
import './IndiviPhy.css'

const IndiviPhy = () => {

  //Forvalidate 
  const[formValid, setFormValid] = useState(false)

  //Set the state for the form
 const [formField, setFormField] = useState( {
  name: "",
  school: "",
  email:"",
  phone:"",
  address: "",
  category:"",
  size:"",
  accomodation:""
})

 //Use The UseEffect to validate the form and reload on every Input
 useEffect( ()=>{
  if(
    formField.name !== "" &&
    formField.school !== "" &&
    formField.email !== "" &&
    formField.phone !== "" &&
    formField.address !== "" &&
    formField.category !== "" &&
    formField.size !== "" &&
    formField.accomodation !== ""
  ){
    setFormValid(true)
  }else{
    setFormValid(false)
  }
 }, [
  formField.name,
  formField.school,
  formField.email,
  formField.phone, 
  formField.address,
  formField.category, 
  formField.size,
  formField.accomodation
 ])

 //Create a function to handle the change event for the form data
 const handle_Change = (e)=>{
    setFormField({...formField, [e.target.name]:e.target.value})
    console.log(formField)
 }
  


  return (
    <div className='individual-cta-p'>
    <Navbar2/>
    <div className='individual-wrapper-p'>
      <div className='indivi-box-p'>
        <form autoComplete = 'off'>
            <div className='input100'>
                <input type='text'required placeholder='Fullname' name='name' value={formField.name} onChange={handle_Change}/>
            </div>
            <div className='input100'>
              <input type='text' required placeholder='Name Of School' name='school' value={formField.school} onChange={handle_Change}/>
            </div>
            <div className='input100'>
              <input type='email' required placeholder='Email' name='email' value={formField.email} onChange={handle_Change} />
            </div>
            <div className='input100'>
              <input type='text'required placeholder='Phone Number'name='phone' value={formField.phone} onChange={handle_Change} />
            </div>
            <div className='input100'>
              <input type='text'required placeholder='Address'name='address' value={formField.address} onChange={handle_Change}/>
            </div>
            <div className='input100'>
              <select name="category" value={formField.category}  onChange={handle_Change} >
                <option selected  disabled value="category" >Category</option>
                <option value="Teacher">Teacher</option>
                <option value="School Leader">School Leader</option>
                <option value="School Owner">School Owner</option>
              </select> 
            </div>
            <div className='input100'>
              <select name="size" value={formField.size} onChange={handle_Change} >
                <option selected disabled value="size">Size</option>
                <option value="s">s</option>
                <option value="m">m</option>
                <option value="l">L</option>
                <option value="xl">xL</option>
              </select> 
            </div>
            <div className='input100'>
              <select name="accomodation" value={formField.accomodation} onChange={handle_Change} >
                <option selected disabled value="accomodation">accomodation preference</option>
                <option value="Boarding">Boarding</option>
                <option value="Not Boarding">Not Boarding</option>
              </select> 
            </div>
            <div className='input-submit'>    
              <button type='submit' onClick={formValid}>Click to Submit</button>
            </div>   
        </form>
    
      </div>
    </div>
  </div>
  )
}

export default IndiviPhy
