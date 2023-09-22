import React, {useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import './SignIn.css'
import loginLiz from '../assets/login-liz.png'

const SignIn = ({ login }) => {
  const formRef = useRef()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(formRef.current)
    const data = Object.fromEntries(formData)
    const userInfo = {
      user: {email: data.email, password: data.password }
    }

    login(userInfo)
    navigate("/mydecks")
    e.target.reset()
  }

  return (
    <div className="login-container">
      <h1>Log In</h1>
      <img src={loginLiz}alt='login-liz'/>
      <form className="login-card" ref={formRef} onSubmit={handleSubmit}>
        <label>Email</label>
        <input type='email' name='email' placeholder='email'/>
        <label>Password</label>
        <input type='text' name='password' placeholder='enter password'/>
        <input className='submit-button' type='submit' value='Submit' />
        <span>No Quizard Account?
        <a href='/signup' className='sign-up'>Register Now</a></span>
      </form>
    </div>
  )
}

export default SignIn