import React from 'react'
import { Link } from 'react-router-dom'
const ResetPassword = () => {
  return (
    <div className='login-page'>
    <form action="">
      <h1>Reset Password</h1> 
      <div className="input-field">
        <label htmlFor="username">Username</label>
        <input type="text" placeholder='Enter username' id='username'/>
      </div>
      <div className="input-field">
        <label htmlFor="password">Password</label>
        <input type="password" placeholder='Enter password' id='password'/>
      </div>
      <div className="input-field">
        <label htmlFor="-confirm-password">Confirm Password</label>
        <input type="password" placeholder='Enter confirm password' id='confirm-password'/>
      </div>
      <button type='submit'>Login</button> 
      <p>Remember? login <Link to={"/login"} className='link'>Here</Link></p> 
    </form>
  </div>
  )
}

export default ResetPassword