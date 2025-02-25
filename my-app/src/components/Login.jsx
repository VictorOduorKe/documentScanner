import React from 'react';
import { Link } from 'react-router-dom';  
import "../App.css";

const Login = () => {
  return (
    <div className='login-page'>

      <form action="">
        <h1>Login Here</h1> 
        <div className="input-field">
          <label htmlFor="username">Username</label> 
          <input type="text" placeholder='Enter username' id='username'/>
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input type="password" placeholder='Enter password' id='password'/>
        </div>
        <button type='submit'>Login</button> 
        <p>Don't have an account? Register <Link to={"/register"} className='link'>Here</Link></p> 
        <p>Forgot paswword? Reset <Link to={"/reset-password"} className='link'>Here</Link></p> 
      </form>
    </div>
  );
}

export default Login;
