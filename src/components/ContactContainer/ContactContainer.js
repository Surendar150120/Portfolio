import React from 'react'
import "./ContactContainer.css"
import { Element } from "react-scroll";

const ContactContainer = () => {
  return (
    <Element className='contact' id='ContactSection'>
    <h1>Get In Touch </h1>
    <form
    action="https://formsubmit.co/surendar152000@gmail.com" 
    method="POST"
    >
      <input type="text" placeholder="Full Name..." required />
      <input type="text" placeholder="Full Email Id..." required />
      <input type="text" placeholder="Full Mobile No..."required />
      <textarea placeholder="Enter Address..." required />
      <button className='ContactButton' type="submit">Submit</button>
    </form>
    <div class="footer">
    <div class="wrap1">
      <div class="footer-sect social-icon">
        <a href="#">
        <i class="fa-brands fa-facebook"></i>
        </a>
        <a href="#">
        <i class="fa-brands fa-instagram"></i>
        </a>
        <a href="#">
        <i class="fa-brands fa-linkedin"></i>
        </a>
        <a href="#">
        <i class="fa-brands fa-square-x-twitter"></i>
        </a>
      </div>
      <div class="footer-sect">CopyRight © 2024 Surendar.com Website Template. All Rights Reserved</div>
    </div>
  </div>
  </Element>
  );
};

export default ContactContainer;