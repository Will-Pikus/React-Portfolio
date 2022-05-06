import React from 'react';
import '../styles/Navbar.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
            {/* <li>
                <NavLink to="/" className="navLink">Home</NavLink>
            </li> */}
            <li>
                <NavLink to="/" className="navLink">About</NavLink>
            </li>
            <li>
                <NavLink to="/projects" className="navLink">Projects</NavLink>
            </li>
            <li>
                <NavLink to="/resume" className="navLink">Resume</NavLink>
            </li>
            <li>
                <NavLink to="/contact" className="navLink">Contact</NavLink>
            </li>
        </ul>
    </nav>
  );
}

export default Navbar;
