import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
        <h1>Sri Sai Matriculation School</h1>
        <ul>
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Contact">Contact</Link>
            <Link to="/Login">Login</Link>
        </ul>
    </nav>
  )
}

export default Navbar