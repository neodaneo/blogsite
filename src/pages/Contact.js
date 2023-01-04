import React from 'react'
import {Link} from 'react-router-dom'

function Contact() {
  return (
    <div className="auth">
      <div className="auth__card">
        <h3 className="auth__card-title">Contact Us</h3>

        <form action="">
          <div className="auth__card-form-input">
            <label for="email">Email</label>
            <input type="email" placeholder="alperen.kurt@windowslive.com" disabled/>
          </div>
          <div className="auth__card-form-input">
            <label for="password">Phone Number</label>
            <input type="password" placeholder="+90 553 577 4212" disabled/>
          </div>
          <div className="auth__card-buttons">
          <a href='https://www.google.com.tr/?hl=tr'><i  className="bx bxl-twitter"></i></a>
          <a href='https://www.google.com.tr/?hl=tr'><i className="bx bxl-facebook"></i></a>
          <a href='https://www.google.com.tr/?hl=tr'><i className="bx bxl-linkedin-square"></i></a>

          </div>
          <br/>
          <Link to="/" className="asd">Home Page</Link>
        </form>
      </div>
    </div>
  )
}

export default Contact