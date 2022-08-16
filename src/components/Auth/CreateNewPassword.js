import React from 'react'
import Navbar2 from '../Navigation/Navbar2'
import '../Auth/Auth.css'


const CreateNewPassword = () => {

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

      const { email } = formInput;  
      if(email === ""){
        toast.error('email is required', {
            position:"top-center"
        });
      }
      // localStorage.setItem('checkUser', JSON.stringify({...formInput}))
      // const CheckUser = JSON.parse(localStorage.getItem("checkUser")).email

      axios.post( `${process.env.REACT_APP_API_URL}/user/`, { email })
        .then(response => {
          console.log(response)
          localStorage.setItem('checkUser', JSON.stringify(response.data.user))
          toast.success('email matched', {
            position:"top-center"  
          });  
          window.location = '/CreateNewPassword'

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
              <form className='form' autoComplete = 'off'>
                  <div className='form-control'>
                      <label>New Password</label>
                      <input type='password'  name='newPassword'    placeholder='New Password'/>
                  </div>
                  <div className='form-control'>
                      <label>Confirm Password</label>
                      <input type='password'  name='confirmPasswords'    placeholder='Confirm Password'/>
                  </div>
                  <button type='submit'>Create</button>  
              </form>   
          </div>
      </div>
  </div>
  )
}

export default CreateNewPassword
