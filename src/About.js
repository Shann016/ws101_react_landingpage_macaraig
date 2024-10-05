import React from 'react';

const About = () => {
  return (
    <section id="about" className="about-section">
      <h1>Welcome to the World of Web Development!</h1>
      <p>Are you ready to unlock the power of the web and create something amazing? We're excited to have you join our community of web developers, where you'll find a supportive and inclusive environment to learn, grow, and thrive.</p>
      <div className="about-container">
        <div className="about-text">
          <p>Web development is an incredible field that offers endless opportunities for creativity, innovation, and problem-solving. Whether you're just starting out or looking to take your skills to the next level, we're here to help you every step of the way.</p>
          <p>Our community is dedicated to providing you with the resources, tools, and expertise you need to succeed in web development. From coding tutorials and workshops to mentorship and networking opportunities, we've got you covered.</p>
        </div>
        <div className="about-image">
          <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Web Development" />
        </div>
      </div>
      <button className="btn">Get Started with Web Development</button>
    </section>
  );
};

export default About;