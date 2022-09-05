import React, {useState, useEffect} from 'react'
import axios from 'axios'
import PaystackPop from '@paystack/inline-js';
import Navbar2 from '../../Navigation/Navbar2'
import './Payment.css'

const Payment = () => {
  //Forvalidate 
  const[formValid, setFormValid] = useState(false)

  //Set the state for the form
 const [formField, setFormField] = useState({
  email:""
})

 //Use The UseEffect to validate the form and reload on every Input
 useEffect( ()=>{
  if(
    formField.email !== ""
  ){
    setFormValid(true)
  }else{
    setFormValid(false)
  }
 }, [
  formField.email
 ])

 //Create a function to handle the change event for the form data
 const handlerChange = (e)=>{
 
    setFormField({...formField, [e.target.name]:e.target.value})
   
 }
  
 
  //Submit  form
 const submitHandler =(e)=>{
  e.preventDefault()

  const amount = Number(JSON.parse(localStorage.getItem('amount')))
  let handler = PaystackPop.setup({
    key: process.env.REACT_APP_PUBLIC_KEY,
    email: formField.email,
    amount: amount * 100,
    onClose: function(){
      alert('Window closed.');
    },
    callback: function(response){
      const token = JSON.parse(localStorage.getItem('user')).refreshToken
      const form = JSON.parse(localStorage.getItem('form'))
      const headers = {
        Accept: '*/*',
        Authorization: `Bearer ${token}`
      }
      // console.log(form);
      axios.post(`${process.env.REACT_APP_API_URL}/register`, { ...form } ,{ headers })
      .then(response => {
        
        console.log(response)
      })
      let message = 'Payment complete! Reference: ' + response.reference;
      alert(message);
      window.location = '/Dashboard';
    }
  });
  handler.openIframe();
}
  return (
    <div className='individual-cta-p'>
      <Navbar2/>
      <div className='individual-wrapper-p'>
        <div className='indivi-box-p'>
          <div className='pay-email'>
            <h2>Enter Payment Email</h2>
          </div>
          <p className='pay-email'>Kindly provide the email you would like to receive your pay receipt with.</p>
          <form  onSubmit={submitHandler} autoComplete = 'off'>
              <div className='input100'>
                <input type='email' required placeholder='Email' name='email' value={formField.email} onChange={handlerChange} />
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

export default Payment
