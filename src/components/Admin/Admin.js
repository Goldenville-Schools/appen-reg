import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Navbar3 from '../Navigation/Navbar3'
import '../Admin/Admin.css'

const Admin = () => {

    //For form validation
    const[FormValid, setFormValid] = useState(false)
    //Create a State to manage the form
    const [form, setform] = useState({
        userName: "",
        password: ""
    })

    //Create an onchange event to handle change
    const handleChange = (e)=>{
        const {name, value} = e.target;
            setform( ()=>{
                return{...form, [name]:value}
            })
            console.log(form)
    }
    //Use UseEffect to reload the page n validate the form
    useEffect(() => {
      if(
        form.userName !== "" &&
        form.password !== ""
      ){
        setFormValid(true)
      }else{
        setFormValid(false)
      }
 
    }, [
        form.userName,
        form.password
    ])
    //A function that sumits the form
    const handleSubmit = (e) =>{
        e.preventDefault();
        const {userName, password} = form;
        if (userName === ''){
            toast.error('email is required',{
                position:"top-center" 
            });
        }else if(password == ''){
            toast.error('password is required' ,{
                position:"top-center" 
            });
        }else{
            localStorage.setItem('admin', JSON.stringify({...form}));
            window.location = '/AdminDashboard'
        }  
    }
   
  return (
    <div className='admin_signin'>
        <Navbar3/>
        <div className='admin_body'>
            <div className='admin_container'>
                <div className='admin_header'>
                    <h2>Admin Login</h2>
                </div>
                <form className='form' onSubmit={handleSubmit} autoComplete = 'off'>
                    <div className='form-control'>
                       <input type='text'  name='userName' placeholder='Username' value={form.userName} onChange={(e) => handleChange (e) } />
                    </div>
                    <div className='form-control'>
                         <input type='password' name='password'  placeholder='Password' value={form.password} onChange={(e)=> handleChange (e)} />
                    </div>
                        <div className='forgot_password'>
                            <Link to='/ForgotPassword'><label>Forgot Password?</label></Link>
                        </div>
                    <div className='input_submit'>
                        <input type="button" className="btn1" value="Login" onClick={handleSubmit}/>   
                    </div>
                   
                </form>   
            </div>
        </div>
          <ToastContainer/>  
    </div>
  )
}

export default Admin
