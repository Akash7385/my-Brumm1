import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import './Contact.css';
const Contact = () => {
  return (
    <>
    <section className="hero-section">
       <div className='contact-lorem'>
        <h2><u>Contact</u></h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer massa elit, laoreet nec placerat non, facilisis eget velit. Morbi suscipit urna nisi, nec euismod arcu egestas sit amet. Vestibulum ipsum nulla, tincidunt a porttitor et, varius at dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis vitae leo eu mauris venenatis egestas. Praesent purus lacus, vulputate sed porta eu, cursus id tellus. Nulla in ante iaculis, vestibulum leo eu, congue odio. Praesent fermentum finibus diam. Nam ut feugiat erat. In hac habitasse platea dictumst. Ut non ligula ac velit sodales blandit at id lacus.
</p>
       </div>

       <div className='cont'>
       <FaPhoneAlt /> <a href='tel:+53 25653212'>+53 25653212</a>
       <div className='email'>
       <MdEmail /> <a href='https://www.email.com' target='_blank'><span>help@brummm123.in</span></a>
       </div>
       </div>
      </section>
    </>
  )
}

export default Contact