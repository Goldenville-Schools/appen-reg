import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Navbar2 from '../../Navigation/Navbar2'
import '../Styles.css';

const SingleSignUp = () => {
  const[form, setform] = useState({
    title: '',
    name: '',
    school:'',
    email: '',
    phone: '', 
    mor:''
     
  })
  /*Function to handle change event  */
  const handleChange = (e) =>{
      const {name, value} = e.target
      setform({...form,  [name] : value })
      console.log(form)
  }
  /*Function */
 
  

  return (
    <div className='signUp-cta'>
      <Navbar2/>
      <div className='signUp-wrapper'>
        <div className='signUp-box'>
          <form autoComplete>
            <p>Title</p>
            <input type='text' required name='title' onChange={handleChange}/>
            <p>NAME</p>
            <input type='text'required name='name' onChange={handleChange}/>
            <p>NAME OF SCHOOL</p>
            <input type='text' required name='school' onChange={handleChange}/>
            <p>EMAIL</p>
            <input type='email' required name='email' onChange={handleChange}/>
            <p>PHONE NUMBER</p>
            <input type='text'required name='phone' onChange={handleChange}/>
            <p className='mode'>Mode of Attendance</p>
            <div className='mode-cta'>
              <div className='mode-row'>
                    <input type='radio' name='mor' value='online' onChange={handleChange}/>
                    <h4>Physical</h4>
                    <input type='radio'  name='mor' value='physical' onChange={handleChange}/>
                    <h4>Online</h4>     
              </div>
            </div>
            <Link to='/payment'><button type='submit'>Click to Register</button></Link>
          </form>
      

        </div>
      </div>
    </div>
  )
}

export default SingleSignUp 
