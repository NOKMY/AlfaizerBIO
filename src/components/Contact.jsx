import React, { useRef } from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaDiscord } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import "../css/Contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ijr9zz2",  
        "template_zcgs3or",  
        form.current,
        "4_TryNwJwAgjrh0jp"    
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          console.error(error.text);
        }
      );
  };

  return (
    <div className="contact-page">
      <h1 className="contact-title">Contact Me</h1>

      <div className="contact-info">
        <h2>Get in Touch</h2>
        <p>
          Feel free to reach out to me via social media, email or phone. <br></br>Send message now. I'm git initopen to new opportunities and connections!
        </p>

        <div className="contact-details">
          <div className="phone">
            <strong>Phone:</strong> (+63) 966 3257 423
          </div>
          <div className="email">
            <strong>Email:</strong> <a href="mailto:alfaizerc@email.com">alfaizerc@email.com</a>
          </div>
        </div>

        <div className="social-media">
          <h3>Follow me on social media</h3>
          <div className="social-icons">
            <a href="https://github.com/NOKMY" target="_blank" rel="noopener noreferrer">
              <FaGithub size={40} className="social-icon" />
            </a>
            <a href="https://www.linkedin.com/in/afzclink/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={40} className="social-icon" />
            </a>
            <a href="https://www.facebook.com/therealALFAIZER" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={40} className="social-icon" />
            </a>
            <a
            href="https://www.instagram.com/afzc_gram" 
            target="_blank"
            rel="noopener noreferrer"
            >
            <FaInstagram size={40} className="social-icon" />
            </a>
            <a
              href="https://discord.gg/bGA4aGjTA6" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDiscord size={40} className="social-icon" />
            </a>
          </div>
        </div>
      </div>

      <div className="contact-form">
        <h2>Send a Message</h2>
        <form ref={form} onSubmit={sendEmail}>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" name="name" placeholder="Mary Loi Yves Kipte Ricalde" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input type="email" name="email" placeholder="abc123@gmail.com" required />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" name="subject" placeholder="Subject" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea name="message" rows="5" placeholder="Feedbacks" required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
