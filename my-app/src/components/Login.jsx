import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Login = () => {
  const [loginErrors, setLoginErrors] = useState("");
  const [isInputEmpty, setIsInputEmpty] = useState(true);

  const [loginData, setLoginData] = useState({
    loginUsername: "",
    loginPassword: "",
  });

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleFormData = async (e) => {
    e.preventDefault();

    if (loginData.loginUsername.trim() === "" || loginData.loginPassword.trim() === "") {
      setIsInputEmpty(false);
      setLoginErrors("Kindly fill all fields");

      setTimeout(() => {
        setIsInputEmpty(true);
        setLoginErrors("");
      }, 6000);

      return; 
    }

    try {
      const response = await fetch("http://localhost/dashboard/scannerBackend/login.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(loginData),
      });

      const dataLogin = await response.json();

      if (response.ok) {
        setIsInputEmpty(false);
        setLoginErrors(dataLogin.message || "Logged in successfully");

        setTimeout(() => {
          setIsInputEmpty(true);
          setLoginErrors("");
        }, 6000);
      } else {
        setIsInputEmpty(false);
        setLoginErrors(dataLogin.message || "Invalid username or password");

        setTimeout(() => {
          setIsInputEmpty(true);
          setLoginErrors("");
        }, 6000);
      }
    } catch (error) {
      setIsInputEmpty(false);
      setLoginErrors("Unable to connect to the server. Please try again later.");

      setTimeout(() => {
        setIsInputEmpty(true);
        setLoginErrors("");
      }, 6000);
    }
  };

  return (
    <div className="login-page">
      <form onSubmit={handleFormData}>
        <h1>Login Here</h1>
        <div className="input-field">
          <label htmlFor="username">Username</label>
          <input
            name="loginUsername"
            type="text"
            placeholder="Enter username"
            id="username"
            value={loginData.loginUsername}
            onChange={handleChange}
          />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input
            name="loginPassword"
            type="password"
            placeholder="Enter password"
            id="password"
            value={loginData.loginPassword}
            onChange={handleChange}
          />
        </div>
        {!isInputEmpty && <p style={{ color: "red" }}>{loginErrors}</p>}
        <button type="submit">Login</button>
        {isInputEmpty && loginErrors && (
          <p style={{ color: "green", background: "white", textAlign: "center" }}>{loginErrors}</p>
        )}
        <p>
          Don't have an account? Register{" "}
          <Link to="/register" className="link">
            Here
          </Link>
        </p>
        <p>
          Forgot password? Reset{" "}
          <Link to="/reset-password" className="link">
            Here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
