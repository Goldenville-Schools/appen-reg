import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import '../Auth/Auth.css'
import Navbar2 from '../Navigation/Navbar2'
import { toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const ForgotPassword = () => {
    //Forvalidate 
    const[formValid, setFormValid] = useState(false)

    //Using Usestate
    const [formInput, setformInput] = useState({
      email:"",
    })

    //Handle the change event
   function handleChange(e){
      setformInput ({...formInput, [e.target.name]:e.target.value})
      console.log(formInput.email)
   }
    //Use The UseEffect to validate the form/ Check
    useEffect(() => {
      if(
        formInput.email !== ""
      ){
        setFormValid (true)
      }else{
        setFormValid (false)
      }
    }, [
      formInput.email
    ])
    
   //Handle the submit event
   const handleSubmit =(e)=>{
      e.preventDefault();
      localStorage.setItem('checkUser', JSON.stringify({...formInput}))
      const CheckUser = JSON.parse(localStorage.getItem("checkUser")).email
      const email = JSON.parse(localStorage.getItem("user")).email

     if ( CheckUser !== email){
        toast.error('Please Enter a valid email', {
          position:"top-center"
      });   
      }else{
        toast.success('email matched', {
          position:"top-center"  
      });   
      window.location ="/CreateNewPassword"
      }
         

   }
  return (
    <div className='auth_signin'>
      <Navbar2/>
        <div className='auth_body'>
            <div className='auth_container'>
                <div className='auth_header'>
                    <h2>Forgot Password ?</h2>
                </div>
                <form  onSubmit={handleSubmit} className='form' autoComplete = 'off'>
                    <div className='form-control'>
                        <label>Email</label>
                        <input type='email'  name='email'   value={formInput.email} placeholder='Email' onChange={handleChange}/>
                        <p>{formInput.email}</p>
                    </div>
                   <button type='submit' onClick={formValid}>Send</button>
                </form>   
            </div>
        </div>
        <ToastContainer/>  
    </div>
  )
}


export default ForgotPassword
