import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/logo.png'

const Navigation = () => {
    const [open, setOpen] = useState(false);
  return (
    <nav className='nav'>
        <a href="https://github.com/abdirama16">My <img src={logo} alt="logo" className="logo" /> Portfolio</a>
        <ul className={open ? "nav-links active" : "nav-links"}>
        <li>
          {" "}
          <Link to="/header">Home</Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="/service">Service</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>

        <Link to="/signUp">
          {" "}
          <button className="btn">Sign Up</button>
        </Link>
        <Link to="/logIn">
          <button className="btn">Login</button>
        </Link>
      </ul>
      <i
        className={open ? "fas fa-bars close" : "fas fa-bars open"}
        onClick={() => setOpen(true)}
      ></i>
      <i
        className={open ? "fas fa-times open" : "fas fa-times close"}
        onClick={() => setOpen(false)}
      ></i>
    </nav>
  )
}

export default Navigation