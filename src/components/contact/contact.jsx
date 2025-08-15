import React from 'react';
import "./contact.css";

const Contact = () => {
  return (
    <section className='contact container section' id='contact'>

      <h3 className='contact_desc'> Let’s connect if you're working on search infrastructure, semantic ranking, Gen AI search, or hiring engineers who love solving search problems with clean code, creative thinking, and real-world impact</h3>
      <div className="socials_contact">
      <div className="contact-info">
        <a href="mailto:hpkanda13@gmail.com" className="button button--flex" target="_blank" rel="noopener noreferrer" aria-label="Send email to hpkanda13@gmail.com">
          <i className="fa-regular fa-envelope"></i>
          <span className="email-text">hpkanda13@gmail.com</span>
        </a>
        <a href="https://www.linkedin.com/in/harinu/" className="button button--flex" target="_blank" rel="noopener noreferrer" aria-label="Visit LinkedIn profile">
          <i className="fa-brands fa-linkedin"></i>
          <span className="linkedin-text">LinkedIn</span>
        </a>
      </div>
      </div>
    </section>
  )
}

export default Contact