import React, {useState, useEffect} from 'react'
import Navbar4 from '../Navigation/Navbar4'
import '../Auth/Auth.css'
import { toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'



const CreateNewPassword = () => {

    const[formValid, setFormValid] = useState(false)

    //Using Usestate
    const [formInput, setformInput] = useState({
      password:"",
      confirmPassword:""
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
        formInput.confirmPassword !== ""
      ){
        setFormValid (true)
      }else if ( formInput.password.length < 5 ){
        toast.error('password length greater than five', {
            position:"top-center"
        });
      }
      else if (formInput.password !== formInput.confirmPassword){
          toast.error('password does not match', {
              position:"top-center"
          });

      }else{
          setFormValid (false)
        }
      }, [
        formInput.password,
        formInput.confirmPassword
    ])
    
   //Handle the submit event
   const handleSubmit =(e)=>{
      e.preventDefault();
      const user = JSON.parse(localStorage.getItem('checkUser'))

      const { email } = user
      const { password, confirmPassword } = formInput;  
      if(email === ""){
        toast.error('email is required', {
            position:"top-center"
        });
      }
      if ( password === ""){
        toast.error('password field is required', {
            position:"top-center"
        });
    }if ( password.length < 5 ){
        toast.error('password length greater than five', {
            position:"top-center"
        });
    }
    if (password !== confirmPassword){
        toast.error('passwords do not match', {
            position:"top-center"
        });

    }
      // localStorage.setItem('checkUser', JSON.stringify({...formInput}))
      // const CheckUser = JSON.parse(localStorage.getItem("checkUser")).email
      let axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
        }
      };
      console.log(process.env.REACT_APP_API_URL);
      axios.post( `${process.env.REACT_APP_API_URL}/user/reset-password`, { email, password }, axiosConfig )
        .then(response => {
          console.log(response)
          toast.success('password successfully reset', {
            position:"top-center"  
          });  
          window.location = '/Signin'

        })
        .catch ((err) => {
          toast.error(err.response.data.message, {
            position:"top-center"
        });  
      })        
    }
    
  return (
    <div className='auth_signin'>
    <Navbar4/>
      <div className='auth_body'>
          <div className='auth_container'>
              <div className='auth_header'>
                  <h2>Reset Password</h2>
              </div>
              <form onSubmit={handleSubmit} className='form' autoComplete = 'off'>
                  <div className='form-control'> 
                      <input type='password'  name='password'  onChange = {(e) => handleChange (e)}  placeholder='New Password'/>
                  </div>
                  <div className='form-control'>
                      <input type='password'  name='confirmPassword' onChange = {(e) => handleChange (e)}   placeholder='Confirm Password'/>
                  </div>
                  <button type='submit'>Create</button>  
              </form>   
          </div>
      </div>
  </div>
  )
}

export default CreateNewPassword
