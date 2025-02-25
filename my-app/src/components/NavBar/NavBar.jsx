import React from 'react'
import './NavBar.css';
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <div className='navBar'>
      <nav>
        <Link to={"/"} className='link'>Home</Link>
        <ul>
          <li><Link to={"/login"} className='link'>Login</Link></li>
          <li><Link to={"/register"} className='link'>Register</Link></li>
          <li><Link className='link'>Help</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar