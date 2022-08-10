import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import '../Auth/Auth.css'
import Navbar2 from '../Navigation/Navbar2'
import { toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'

const Signin = () => {

    const baseSignInUrl = 'REACT_APP_SignIn_Api' 
    useEffect(() => {
      axios.get('')
      .then(response => console.log(response.form))
    }, [])
    

    const[form, setform] = useState([{
        email:"",
        password:""
        
    }])

    //Handle change event
    const handleChange =(e)=>{
        const {name, value} = e.target
        setform( ()=>{
            return {...form, [name]:value}})
        
    }   

    //Handle submit 
    const handleSubmit = (e)=>{
    e.preventDefault();

        const {email,  password } = form;  
        if(email === ""){
            toast.error('email is required', {
                position:"top-center"
            });
        }else if ( password === ""){
            toast.error('password does not match', {
                position:"top-center" 
            });
                
        }
        axios.post( `${process.env.REACT_APP_API_URL}/auth/`, {
            email: form.email,
            password: form.password 
        })
        .then(response => {
            console.log(response)
            localStorage.setItem('user', JSON.stringify(response.data.user))
            toast.success('Login successful', {
                position:"top-right"
            });
            window.location = '/Dashboard'

        })
    }    
   


return (
    <div className='auth_signin'>
    <Navbar2/>
        <div className='auth_body'>
            <div className='auth_container'>
                <div className='auth_header'>
                    <h2>Sign In</h2>
                </div>
                <form onSubmit={handleSubmit} className='form' autoComplete = 'off'>
                    <div className='form-control'>
                        <label>Email</label>
                        
                        <input type='email'  name='email'   value={form.email}  onChange = {(e) => handleChange (e)} placeholder='Email'/>
                    </div>
                    <div className='form-control'>
                        <label>Password</label>
                        <input type='password' name='password'value={form.password} onChange = {(e) => handleChange (e)} placeholder='Password' />
                    </div>
                    <div className='create_acc'>
                        <div className='forgot_password'>
                            <Link to='/ForgotPassword'><label>Forgot Password</label></Link>
                        </div>
                        <div className='account'>
                            <p>Don't have an account?</p>
                            <Link to='/SignUp'><label>SignUp here </label></Link>
                        </div> 
                    </div>
                <button type='submit'>Login</button>
                    
                </form>   
            </div>
        </div>
          <ToastContainer/>  
    </div>
        
  )
}



export default Signin
