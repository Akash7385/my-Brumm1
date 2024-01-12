import React, { useState } from 'react';
import { FaCartPlus } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
    const [OpenMenu, setOpenMenu]= useState(false);
  return (
    <>
   <nav className='main-nav'>
    <div className='logo'>
        <h2>
            <span>BRU</span>mmm
        </h2>
    </div>

{/* Dropmdown menu */}
    <div className='dropdown-menu'>

     <select>

     <option value="location">location</option>

       <option value="Indore">Indore</option>

       <option value="Bhopal">Bhopal</option>

       <option value="Gwalior">Gwalior</option>

       <option value="...More">...More</option>

     </select>

   </div>

   
   {/* menu links */}
    <div className={OpenMenu ? "menu-list mobile-menu-link":"menu-list"}>
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

    
</ul>
    </div>
  
    {/* cart logo */}
<div className='cart-icon'>
  <FaCartPlus />
</div>

 {/* Login || signup Menu   */}
<div className='login'>
       <NavLink to ='/login'> LOGIN | SIGNUP </NavLink>

       </div>

<div className='hamburger-menu'>
       <a href='#' onClick={()=>setOpenMenu(!OpenMenu)}><GiHamburgerMenu /></a>
       </div>
   </nav>
</>
  )
}

export default Navbar