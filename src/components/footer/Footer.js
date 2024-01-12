import React from 'react';
import { FaFacebookF, FaInstagramSquare, FaTwitter } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import "./Footer.css";

const Footer = () => {
  return (
   <>
   <footer className='footer'>
    <div className='footer-container'>
      
     <div className='about-brummm'>
      <h3><u>About</u></h3>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer massa elit, laoreet nec placerat non.</p>
     </div>
          
          <div className='footer-links'>
            <h3><u>Links</u></h3>
          
       <ul>
       <li>
        <NavLink to ='/'>HOME</NavLink>
    </li>

    <li>
        <NavLink to='/about'>ABOUT</NavLink>
    </li>

    <li>
        <NavLink to='/contact'>CONTACT</NavLink>
    </li>

    <li>
        <NavLink to ='/services'>SERVICES</NavLink>
    </li>
    <li>
        <NavLink to ='/login'>LOGIN</NavLink>
    </li>
       </ul>
          </div>

          <div className='contact-Brummm'>
            <h3><u>Contact</u></h3>
           <a href='tel:+31 5552546' target='_blank'><span> +31 5552546</span></a>
          <a href='https://www.email.com' target='_blank'><span> Brummm@1245.com</span></a> 
            <a href='https://www.email.com' target='_blank'><span>help@brummm123.in</span></a>
            </div>

          <div className='social-links'>
            <a href='https://www.facebook.com' target='_blank'>
          <FaFacebookF /> </a>
          <a href='https://www.twitter.com' target='_blank'><FaTwitter /></a>
          <a href='https://www.instagram.com' target='_blank'><FaInstagramSquare /></a>
          
          </div>
</div>

   </footer>
   
   </>
  )
}

export default Footer