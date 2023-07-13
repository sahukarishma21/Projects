import React from 'react'
import './Contact.css';
import { AiOutlineMail,AiOutlineLinkedin,AiOutlineWhatsApp } from "react-icons/ai";


export default function Contact() {
 
  return (
    <section id='contact'>
      
      <h2>Contact Me</h2>
<div className="container contact__container">
          <div className="contact__options">
    <article className='contact__option'>
      <AiOutlineMail className='cantact__icon'/>
      <h4>Email</h4>
      <h5>sahukarishma21@gmail.com</h5>
      <a href="mailto:sahukarishma10@gmail.com">Send A message</a>
    </article>
    <article className='contact__option'>
      <AiOutlineLinkedin className='cantact__icon'/>
      <h4>Linkedin</h4>
      <h5>Karishma Sahu</h5>
      <a href="https://www.linkedin.com/in/karishma-sahu-28b459227/" target="blank" >Send A message</a>
    </article>
    <article className='contact__option'>
      <AiOutlineWhatsApp className='cantact__icon'/>
      <h4>WhatsApp</h4>
      <h5>9777044884</h5>
      <a>Send A message</a>
    </article>
    
  </div>
  <form action="https://formspree.io/f/mlekqzpk" method="POST">
<input type='text' name='name' placeholder='Name' required/>
<input type='email' name='email' placeholder='Email' required/>
<textarea name='message' rows='7' placeholder='Your message' required></textarea>
<button type='submit' className='btn btn-primary'>Send Message</button>
  </form>
</div>
    </section>
  )
}