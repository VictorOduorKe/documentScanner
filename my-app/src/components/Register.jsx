import React, { useState } from 'react';
import { Link } from "react-router-dom"; 
import "../App.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("student");
  const [role, setRole] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [passwordError, setPasswordError] = useState("");
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+={}\[\]:;"'<>,.?/\\|-]).{8,}$/;
  const[formErrors,setFormErrors]=useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() === "" || password.trim() === "") {
      setIsValid(false);
      setFormErrors("Please fill all fields");
      setTimeout(()=>{
         setFormErrors("")
      },6000)
      return;
    }

    if (!regex.test(password)) {
      setPasswordError("Password must include uppercase, lowercase, special characters, and be at least 8 characters long.");
      setTimeout(() => {
       setPasswordError("")
      }, 6000);
      return;
    } else {
      setPasswordError("");
      setIsValid(true);
    }

    setFormErrors("Registered Sucessfully");
    setTimeout(()=>{
      setFormErrors("")
      setPassword("")
      setRole("")
      setUsername("")
      setPasswordError("")
    },6000)


   
  };

  return (
    <div className="login-page">
      <form onSubmit={handleSubmit}>
        <h1>Register Here</h1>
        
        <div className="input-field">
          <label htmlFor="username">Username</label>
          <input 
            type="text" 
            placeholder="Enter username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            id="username"
          />
        </div>

        <div className="input-field">
          <label htmlFor="role">Choose Role</label>
          <select 
            name="role" 
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="student">Student</option>
            <option value="lecturer">Lecturer</option>
          </select>
        </div>

        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            placeholder="Enter password" 
            id="password" 
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && <p style={{ color: "red" }}>{passwordError}</p>} 
        </div>

        {!isValid && <p style={{ color: "red" }}>{formErrors}</p>} 

        <button type="submit">Register</button>
        {isValid &&<p style={{color:"green",background:"white",borderRadius:"10px",textAlign:"center"}}>{formErrors}</p>}
        
        <p>Already have an account? Login <Link to="/login" className="link">Here</Link></p>
      </form>
    </div>
  );
};

export default Register;
