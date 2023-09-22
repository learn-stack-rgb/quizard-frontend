import React, {useRef} from 'react'
import './SignUp.css'
import { useNavigate } from 'react-router-dom'
import signUpLiz from '../assets/wiz-liz-flower2.png'

const SignUp = ({ signup }) => {

    const formRef = useRef()
    const navigate = useNavigate()
  
    const handleSubmit = (e) => {
      e.preventDefault()
      const formData = new FormData(formRef.current)
      const data = Object.fromEntries(formData)
      const userInfo = {
        user: {email: data.email, password: data.password }
      }
  
      signup(userInfo)
      navigate("/mydecks")
      e.target.reset()
    }

  return (
    <div className="sign-up-container">
      <h1>Sign Up</h1>
      <img src={signUpLiz} alt='signup-liz'/>
      <form className="sign-up-card" ref={formRef} onSubmit={handleSubmit}>
        <label>Email</label>
        <input type='email' name='email'placeholder='email'/>
        <label>Password</label>
        <input type='text' name='password' placeholder='create password'/>
        <label>Confirm Password</label>
        <input type='text' name='password_confirmation' placeholder='confirm password'/>
        <input type='submit' value='Submit' className='submit-button'/>
        <span>Already Have an Account?
        <a href='/login'className='login'>Log In!</a></span>
      </form>
    </div>
  )
}

export default SignUp