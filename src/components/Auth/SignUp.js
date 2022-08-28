import React, { useState, useEffect} from 'react'
import '../Auth/Auth.css'
import Navbar2 from '../Navigation/Navbar2'
import { toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'


const SignUp = () => {
    
    const baseUrl = process.env.REACT_APP_API_URL
    const[form, setform] = useState({ name:"", email:" ", password:"", confirmpassword:""})

    //Store the data
    const [data, setData] = useState([])

      //Handle change event
    const handleChange =(e)=>{
        const {name, value} = e.target
        setform( ()=>{
            return {
                ...form, 
                [name]:value
            }
        })
  
        
    }


//Handle submit 
const handleSubmit = (e)=>{
    e.preventDefault();
    
    const {email, name, password, confirmpassword} = form;
    
    if(name === ""){
        toast.error('name field is required', {
            position:"top-center"
        });
    }else if(email === ""){
        toast.error('email field is required', {
            position:"top-center"
        });
    }else if ( password === ""){
        toast.error('password field is required', {
            position:"top-center"
        });
    }else if ( password.length < 5 ){
        toast.error('password length greater than five', {
            position:"top-center"
        });
    }
    else if (password !== confirmpassword){
        toast.error('password does not match', {
            position:"top-center"
        });

    }else{
        console.log(process.env);

        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
          };
        //Use axios post request to send the form values to the baseUrl 
        axios.post( `${process.env.REACT_APP_API_URL}/auth/register`, {
            fullName: form.name,
            email: form.email,
            password: form.password
        }, axiosConfig )
        .then(response => {
            console.log(response)
            toast.success('SignUp Succesful', {
                position:"top-right"
             
            });
            window.location = '/Signin'
        })
        .catch ((err) => {
            toast.error(err.response.data.message, {
              position:"top-right"
          });  
        })   
        // localStorage.setItem('adminUser', JSON.stringify([...data,form]));
        // window.location = '/Signin'
           
    }       
     
}


  return (
    <div className='auth_signUp'>
    <Navbar2/>
        <div className='auth_body'>
            <div className='auth_container'>
                <div className='auth_header'>
                    <h2>SignUp</h2>
                </div>
                <form onSubmit={handleSubmit} className='form' autoComplete = 'on'>
                    
                    <div className='form-control'>
                        <label>Name</label>
                        <input type='text' name='name'value={form.name} onChange = {(e) => handleChange (e)} placeholder='Fullname'/>
                    </div>
                    <div className='form-control'>
                        <label>Email</label>
                        <input type='email' name='email' value={form.email} onChange = {(e) => handleChange (e)} placeholder='Email' />
                    
                    </div>
                    <div className='form-control'>
                        <label>Password</label>
                        <input type='password' name='password' value={form.password} onChange = {(e) => handleChange (e)} placeholder='Password'/>
                    </div>
                    <div className='form-control'>
                        <label> Confirm Password</label>
                        <input type='password'   name='confirmpassword' value={form.confirmpassword} onChange = {(e) => handleChange (e)} placeholder='Confirm Password'/>
                    </div>
                    <p></p>
                    <button type='submit' >Create account</button>   
                </form>   
            </div>
            </div>
         <ToastContainer/>   
    </div>
  )
}

export default SignUp
