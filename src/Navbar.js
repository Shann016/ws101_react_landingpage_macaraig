import React from 'react';

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <div className="logo">S H A N </div>
          </div>
          <div className="col-md-10">
            <ul className="nav-list">
              <li><a href="#home" className="nav-link">Home</a></li>
              <li><a href="#info" className="nav-link">Info</a></li>
              <li><a href="#about" className="nav-link">About</a></li>
              <li><a href="#contact" className="nav-link">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;