import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../Auth/Auth.css'
import Navbar2 from '../Navigation/Navbar2'
import { toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Signin = () => {

//    const history = useNavigate();

    const[form, setform] = useState([{
        email:"",
        password:""
        
    }])

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
      console.log(form)
}   


//Handle submit 
const handleSubmit = (e)=>{
  e.preventDefault();
  
  const getAdminUser = localStorage.getItem('adminUser')
  console.log(getAdminUser)

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
   if (getAdminUser && getAdminUser.length){
    const admindata = JSON.parse(getAdminUser)
    // console.log(admindata)
    const adminLogin = admindata.filter((el, key) =>{
        return el.email === email && el.password === password
    });
    if(adminLogin.length === 0){
        toast.error('Invalid details', {
            position:"top-center"
        });
    }else{
        toast.success('Login successful', {
            position:"top-right"
        });
        localStorage.setItem('admin_login', JSON.stringify(getAdminUser))
        window.location = '/Dashboard'
    }
   }
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
                        <p>Don't have an account?</p>
                    <Link to='/SignUp'><label>SignUp here </label></Link>
                    </div>
                <button type='submit' >Login</button>
                    
                </form>   
            </div>
        </div>
          <ToastContainer/>  
    </div>
        
  )
}



export default Signin
