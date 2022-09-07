import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import '../Auth/Auth.css'
import { toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import Navbar3 from '../Navigation/Navbar3'


const Signin = () => {

    const[isLoad, setisLoad] = useState(false)
    
    

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
    //To handle keypress event for the login   
    useEffect(() => {
      const keyDownHand = event =>{
        console.log('pressed', event.key)
        if(event.key === 'Enter'){ 
            handleSubmit();
        }
      };
        window.addEventListener('keydown', keyDownHand)
      return () => {
        window.removeEventListener('keydown', keyDownHand)
      }
    }, [])
    
    //Handle submit 
    const handleSubmit = (e)=>{
        e.preventDefault();
        setisLoad(true);
        
        const {email,  password} = form;  
        if(email === ""){
            toast.error('email is required', {
                position:"top-center"
            });
        }else if ( password === ""){
            toast.error('password should not be empty', {
                position:"top-center" 
            });
                
        }

        let axiosConfig = {
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json;charset=UTF-8',
                'Access-Control-Allow-Origin': "*",
            }
        };

        axios.post( `${process.env.REACT_APP_API_URL}/auth/`, {
            email: form.email,
            password: form.password 
        }, axiosConfig )
        .then(response => {
            console.log(typeof response.status)
           
           localStorage.setItem('user', JSON.stringify(response.data.user))
           setisLoad(false);
            toast.success('Login successful', {
                position:"top-right",
                hideProgressBar: false,
                autoClose: 5000,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                
            });
          
            window.location = '/Dashboard'
        })
        .catch ((err) => {
            setisLoad(false);
            toast.error(err.response.data.message, {
              position:"top-center"
          }); 
          
        })   
    }    
   


return (
    <div className='auth_signin'>
    <Navbar3/>
        <div className='auth_body'>
            <div className='auth_container'>
                <div className='auth_header'>
                    <h2>Sign In</h2>
                </div>
                <form onSubmit={handleSubmit} className='form' autoComplete = 'off'>
                    <div className='form-control'>
                        <label>Email</label>
                        
                        <input type='email'  name='email'   value={form.email}   onChange = {(e) => handleChange (e)} placeholder='Email'/>
                    </div>
                    <div className='form-control'>
                        <label>Password</label>
                        <input type='password' name='password'value={form.password}   onChange = {(e) => handleChange (e)} placeholder='Password' />
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
                {/* <button type='submit' >Login</button> */}
                <input type="button" className="btn1" value={isLoad ? "Authenticating..." : "Login"} 
                disabled={isLoad} onClick={handleSubmit}/>
                    
                </form>   
            </div>
        </div>
          <ToastContainer/>  
         
    </div>
        
  )
}



export default Signin
