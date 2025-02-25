import React, { useState } from 'react';
import { Link } from 'react-router-dom';  
import "../App.css";




const Login = () => {
    const [loginUsername,setLoginUsername]=useState("")
const [loginPasword,setLoginPassword]=useState("");
const [loginErrors,setLoginErrors]=useState("");
const [isInputmpty,setIsInputEmpty]=useState(true);
    const handleFormData=(e)=>{
        e.preventDefault();
        if(loginPasword.trim()==""||loginUsername.trim()==""){
             setIsInputEmpty(false);
              setLoginErrors("Kindly fill all fields");
              setTimeout(() => {
                setLoginErrors("")
              }, 6000);
        }else if(setIsInputEmpty){
            setLoginErrors("Registered Sucesfully")
             setTimeout(()=>{
                 setLoginErrors("")
             },6000)
        }else{
            setLoginErrors("Invalid username or password")
        }
    }
  return (
    <div className='login-page'>

      <form action="" onSubmit={handleFormData}>
        <h1>Login Here</h1> 
        <div className="input-field">
          <label htmlFor="username">Username</label> 
          <input 
          type="text" 
          placeholder='Enter username' 
          id='username'
          value={loginUsername}
          onChange={(e)=>setLoginUsername(e.target.value)}
          />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input
           type="password"
            placeholder='Enter password' 
            id='password'
            value={loginPasword}
            onChange={(e)=>setLoginPassword(e.target.value)}
            />
        </div>
        {!isInputmpty &&<p style={{color:"red"}}>{loginErrors}</p>}
        <button type='submit'>Login</button> 
        {isInputmpty &&<p style={{color:"green",background:"white",textAlign:"center"}}>{loginErrors}</p>}
        <p>Don't have an account? Register <Link to={"/register"} className='link'>Here</Link></p> 
        <p>Forgot paswword? Reset <Link to={"/reset-password"} className='link'>Here</Link></p> 
      </form>
    </div>
  );
}

export default Login;
