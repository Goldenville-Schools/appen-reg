import React, {useState, useEffect} from 'react'
import Navbar2 from '../../Navigation/Navbar2'
import './IndiviOnline.css'

const IndiviOnline = () => {
  //Validate the form
  const[formValid, setFormValid] = useState(false)
  //Track the changes to the formfield

  const [form, setForm] = useState([{
    title: "",
    name:"",
    school:"",
    email:"",
    phone:"",
    address:"",
    category:""
  }]);

  //Use The useEffect to reload

  useEffect( ()=>{
    if (
      form.title !== "" &&
      form.name !== ""  &&
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
    form.title,
    form.name,
    form.school,
    form.email,
    form.phone, 
    form.address,
    form.category                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
  ])

  //Submit  form
  const submitHandler =(e)=>{
    e.preventDefault()
    sessionStorage.setItem('IndividualOnlineDetails', JSON.stringify({...form}))
    window.location = "/payment"
    
  }
  

  //Add an onChnage event to the form to check for changes
  const handleChange = (e) =>{
    setForm({...form, [e.target.name]:e.target.value})
    console.log(form)
  }
  

  return (
    <div className='individual-cta'>
      <Navbar2/>
      <div className='individual-wrapper'>
        <div className='indivi-box'>
          <form  onSubmit={submitHandler}  autoComplete = 'off'>
            <div className='input100'>
              <input type='text' required placeholder='Title' name='title' value={form.title} onChange={handleChange}  />
           
            </div>
            <div className='input100'>
                <input type='text'required placeholder='Fullname' name='name' value={form.name}onChange={handleChange}/>
              
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