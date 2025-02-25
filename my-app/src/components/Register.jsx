import React from 'react';
import { Link } from "react-router";
import "../App.css";

const Register = () => {
  return (
    <div className='login-page'>
      <form>
        <h1>Register Here</h1>
        <div className="input-field">
          <label htmlFor="username">Username</label>
          <input type="text" placeholder='Enter username' id='username'/>
        </div>
        <div className="input-field">
          <label htmlFor="type">Chose Role</label>
            <select name="type" id="type">
              <option value="lecturer">Student</option>
              <option value="lecturer">Lecturer</option>
            </select>
          <input type="text" placeholder='Enter username' id='username'/>
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input type="password" placeholder='Enter password' id='password'/>
        </div>
        <button type='submit'>Register</button>
        <p>Already have an account? Login <Link to={"/login"} className='link'>Here</Link></p>
      </form>
    </div>
  );
}

export default Register;
