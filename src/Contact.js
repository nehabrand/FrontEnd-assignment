import React from 'react';
import { Link } from 'react-router-dom';
function Contact() {
  return (
    <div style={{marginLeft:100}}>
      <h2>Contact Me</h2>
     <p>Welcome to our contact page! We value your feedback, inquiries, 
      and suggestions. Whether you're reaching out for business collaborations, 
      have questions about our services, or simply want to say hello, 
      we're thrilled to hear from you. Our team is dedicated to providing prompt 
      and helpful responses to your messages. Please feel free to fill out the 
      form below or use the provided contact information to get in touch with us. 
      Thank you for considering reaching out; we look forward to connecting with you!".</p>
<div>
<h2>Contact me </h2>
        <Link to="/loginpages">
        <button>Login pages</button>
      </Link>
       </div>
    </div>
  );
}

export default Contact;
