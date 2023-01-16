import React from 'react';
import './style.css';
import Navbar from './navbar.jsx';
import Nav from './nav.js';
import Footer from './Footer.jsx';
const Policy = (props) => {
  return (
    <div>
      <Navbar />
      <Nav />
      <div>
        <main role="main" class="container">
          <div class="starter-template">
            <h1>{props.head}</h1>
            <p class="lead">{props.content}</p>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Policy;
