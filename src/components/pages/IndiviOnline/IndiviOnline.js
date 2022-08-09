import React, {useState, useEffect} from 'react'
import Navbar2 from '../../Navigation/Navbar2'
import './IndiviOnline.css'

import calcAmount from '../../../util/calcAmount'

const IndiviOnline = () => {
  //Validate the form
  const[formValid, setFormValid] = useState(false)
  //Track the changes to the formfield

  const [form, setForm] = useState({
    fullName:"",
    school:"",
    email:"",
    phone:"",
    address:"",
    category:""
  });

  //Use The useEffect to reload

  useEffect( ()=>{
    if (
      form.fullName !== ""  &&
      form.school !== "" &&
      form.email !== ""  &&
      form.phone !== ""  &&
      form.address !== ""&&
      form.category !== "" 
    ){
      setFormValid(true)
    }else{
      setFormValid(false)
    }
  },[
    form.fullName,
    form.school,
    form.email,
    form.phone, 
    form.address,
    form.category                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
  ])

  //Submit  form
  const submitHandler =(e)=>{
    e.preventDefault()

    const amount = calcAmount(form, [], 54000)
    console.log(amount);
    // localStorage.setItem('IndividualOnlineDetails', JSON.stringify([{...form}]))
    window.location = "/Payment"
    
  }
  

  //Add an onChnage event to the form to check for changes
  const handleChange = (e) =>{
    setForm({...form, [e.target.name]:e.target.value})
    
  }
  

  return (
    <div className='individual-cta'>
      <Navbar2/>
      <div className='individual-wrapper'>
        <div className='indivi-box'>
          <form  onSubmit={submitHandler}  autoComplete = 'off'>
            <div className='input100'>
                <input type='text'required placeholder='Fullname' name='fullName' value={form.fullName}onChange={handleChange}/>
              
            </div>
            <div className='input100'>
              <input type='text' required placeholder='Name Of School' name='school'value={form.school} onChange={handleChange}/>
              
            </div>
            <div className='input100'>
              <input type='email' required placeholder='Email' name='email'value={form.email} onChange={handleChange}/>
            
            </div>
            <div className='input100'>
              <input type='text'required placeholder='Phone Number'name='phone' value={form.phone}onChange={handleChange}/>
            
            </div>
            <div className='input100'>
              <input type='text'required placeholder='Address'name='address'value={form.address} onChange={handleChange}/>
           
            </div>
              <div className='input100'>
                <select name='category' value={form.category} onChange={handleChange} >
                  <option selected disabled value="category" >Category</option>
                  <option value="Teacher">Teacher</option>
                  <option value="Parent">Parent</option>
                  <option  value="Admin Staff">Admin Staff</option>
                  <option value="School Leader" >School Leader</option>
                  <option value="School Owner"  >School Owner</option>
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

export default IndiviOnline
