import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Register = () => {
  const [isValid, setIsValid] = useState(true);
  const [passwordError, setPasswordError] = useState("");
  const [formErrors, setFormErrors] = useState("");

  const [formData, setFormData] = useState({
    username: "",
    role: "student",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+={}\[\]:;"'<>,.?/\\|-]).{8,}$/;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.username.trim() === "" || formData.password.trim() === "") {
      setIsValid(false);
      setFormErrors("Please fill all fields");
      setTimeout(() => setFormErrors(""), 6000);
      return;
    }

    if (!regex.test(formData.password)) {
      setPasswordError(
        "Password must include uppercase, lowercase, special characters, and be at least 8 characters long."
      );
      setTimeout(() => setPasswordError(""), 6000);
      return;
    }

    try {
      const response = await fetch(
        "http://localhost/dashboard/scannerBackend/register.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include", 
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setPasswordError("");
        setIsValid(true);
        setFormErrors(data.message || "Registered Successfully!");

        setTimeout(() => {
          setFormErrors("");
          setFormData({
            username: "",
            role: "student",
            password: "",
          });
        }, 6000);
      } else {
        setIsValid(false);
        setFormErrors(data.message || "Registration failed. Try again.");
      }
    } catch (error) {
      setIsValid(false);
      setFormErrors(`Error connecting to the server. Please try again. `+error);
    }
  };

  return (
    <div className="login-page">
      <form onSubmit={handleSubmit}>
        <h1>Register Here</h1>

        <div className="input-field">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            placeholder="Enter username"
            value={formData.username}
            onChange={handleChange}
            id="username"
          />
        </div>

        <div className="input-field">
          <label htmlFor="role">Choose Role</label>
          <select
            name="role"
            id="role"
            value={formData.role}
            onChange={handleChange}
          >
            <option value="student">Student</option>
            <option value="lecturer">Lecturer</option>
          </select>
        </div>

        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            id="password"
            value={formData.password}
            onChange={handleChange}
          />
          {passwordError && <p style={{ color: "red", fontSize: "14px" }}>{passwordError}</p>}
        </div>

        {formErrors && <p style={{ color: isValid ? "green" : "red" }}>{formErrors}</p>}

        <button type="submit">Register</button>

        <p>
          Already have an account? Login{" "}
          <Link to="/login" className="link">
            Here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
