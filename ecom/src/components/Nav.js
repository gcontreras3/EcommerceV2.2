import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

function Navbar () {
  return (
    <div className="nav">
        <li className="nav-li">
            <Link to="/">Home</Link>
        </li>
      
        <li className="nav-li">
            <Link to="/Products">Products</Link>
        </li> 
        <li className="nav-li">
            <Link to="/Contact">Contact</Link>
        </li>
    </div>
  )
}

export default Navbar;
