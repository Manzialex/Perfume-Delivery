import React from 'react'
import './Footer.css'
import { Placeholder } from 'react-bootstrap'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <h2>Ravishing.</h2>
            <p>Lorem ipsum dolor sit, amet consectetur 
              adipisicing elit. Esse excepturi cumque nulla saepe.
               Error, rem odio perferendis ullam facere veniam</p>

       <div className="social-icons">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <i className="bi bi-facebook"></i>
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <i className="bi bi-twitter"></i>
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <i className="bi bi-instagram"></i>
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <i className="bi bi-linkedin"></i>
      </a>
      </div>
        </div>
        <div className="footer-content-center">
              <h2>COMPANY</h2>
              <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
              </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+256769474658</li>
            <li>contact@ravishing.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className='footer-copyright'>Copyright 2024 Ravishing.com - All Right Reserved</p>
    </div>
  )
}

export default Footer
