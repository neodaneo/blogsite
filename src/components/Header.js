import React from 'react'
import {Link} from 'react-router-dom'

function Header(auth) {
  return (
    
    
    <header className="header">
      <nav className="nav container">
        <Link to="/" className="nav__logo">Alperen Kurt<span>.</span></Link>

        <div className="nav__auth" id="nav-auth">
        <Link to="/write" className="nav__auth-write"
            ><i className="bx bx-edit"></i> Write</Link
          >
          <Link to="/login" className="nav__auth-login">Login</Link>
          <Link to="/register" className="button nav__auth-register">Register</Link>
          <Link to="/About" className="button nav__auth-register">About Us</Link>

        </div>

        <div className="nav__toggle" id="nav-toggle">
          <i className="bx bx-menu"></i>
        </div>
      </nav>
    </header>
  )
}

export default Header