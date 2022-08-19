import React, {useState, useEffect} from 'react'
import Navbar2 from '../Navigation/Navbar2'
import '../Auth/Auth.css'
import { toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'



const CreateNewPassword = () => {

    const[formValid, setFormValid] = useState(false)

    //Using Usestate
    const [formInput, setformInput] = useState({
      password:"",
      password1:""
    })

    //Handle the change event
   function handleChange(e){
      setformInput ({...formInput, [e.target.name]:e.target.value})
      console.log(formInput.password)
   }
    //Use The UseEffect to validate the form/ Check
    useEffect(() => {
      if(
        formInput.password !== ""
      ){
        setFormValid (true)
      }else if (
        formInput.password1 !== ""
      ){
        setFormValid (true)
      }else if ( password.length < 5 ){
        toast.error('password length greater than five', {
            position:"top-center"
        });
      }
      else if (password !== password1){
          toast.error('password does not match', {
              position:"top-center"
          });

      }else{
          setFormValid (false)
        }
      }, [
        formInput.password,
        formInput.password1
    ])
    
   //Handle the submit event
   const handleSubmit =(e)=>{
      e.preventDefault();

      const { email, password } = formInput;  
      if(email === ""){
        toast.error('email is required', {
            position:"top-center"
        });
      }
      // localStorage.setItem('checkUser', JSON.stringify({...formInput}))
      // const CheckUser = JSON.parse(localStorage.getItem("checkUser")).email

      axios.post( `${process.env.REACT_APP_API_URL}/user/reset-password`, { email, password })
        .then(response => {
          console.log(response)
          toast.success('email matched', {
            position:"top-center"  
          });  
          window.location = '/Signin'

        })
        .catch ((err) => {
          toast.error('An error occured', {
            position:"top-center"
        });  
      })        
    }
    
  return (
    <div className='auth_signin'>
    <Navbar2/>
      <div className='auth_body'>
          <div className='auth_container'>
              <div className='auth_header'>
                  <h2>Reset Password</h2>
              </div>
              <form onSubmit={handleSubmit} className='form' autoComplete = 'off'>
                  <div className='form-control'>
                      <label>New Password</label>
                      <input type='password'  name='newPassword'  onChange = {(e) => handleChange (e)}  placeholder='New Password'/>
                  </div>
                  <div className='form-control'>
                      <label>Confirm Password</label>
                      <input type='password'  name='confirmPasswords' onChange = {(e) => handleChange (e)}   placeholder='Confirm Password'/>
                  </div>
                  <button type='submit'>Create</button>  
              </form>   
          </div>
      </div>
  </div>
  )
}

export default CreateNewPassword
