import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h1>Get in Touch</h1>
      <p>Have a question or want to learn more about our services? Fill out the form below and we'll get back to you as soon as possible.</p>
      <div className="contact-container">
        <div className="contact-form">
          <form>
            <div className="form-group">
              <input type="text" placeholder="Name" />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email" />
            </div>
            <div className="form-group">
              <textarea placeholder="Message" />
            </div>
            <button className="btn">Send Message</button>
          </form>
        </div>
        <div className="contact-info">
          <h2>Get in Touch with Us</h2>
          <p>Phone: 0992 200 7714</p>
          <p>Email: <a href="mailto:christianmacaraig16@gmail.com">christianmacaraig16@gmail.com</a></p>
          <p>Address: Barangay Ibabang Iyam, Lucena City, Quezon, Philippines</p>
          <div className="social-media">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f" /> ⓕ
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter" /> ✖
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram" /> 🅾
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github" /> 👨🏻‍💻
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;