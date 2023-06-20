import React from 'react'
import './Navbar.css';

import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <>
  
    <div className='container'>
      <Link to="/">
        <img src='woucast.png' className='logo' alt='woucast'/>
      </Link>
        <div className='menu'>
        <Link to="/" className='events'>Home</Link>
        <Link to="/about" className='about'>About Us</Link>
        <Link to="/contact" className='contacts'>Contacts</Link>
        </div>
    </div>

    </>
  )
}

export default Navbar