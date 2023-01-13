import React from 'react';
import './style.css';

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar nb " align="center">
        <div class="container-fluid d-flex justify-content-center flex-row">
          <a class="navbar-brand bb" href="#">
            <img
              src="https://i.postimg.cc/Z0H6W0zV/logo.png"
              class="me-2"
              height="40"
              alt="Logo"
              loading="lazy"
            />
            <small className="headd">COMPUTER SCIENCE ENGINEERING</small>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
