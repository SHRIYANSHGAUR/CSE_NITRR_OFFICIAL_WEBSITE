import React from 'react';
import { useEffect } from 'react';
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBContainer,
  MDBIcon,
  MDBNavbarToggler,
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
} from 'mdb-react-ui-kit';
import './style.css';

const News = () => {
  return (
    <div>
      <div class="card bg-dark text-white shadow-1-strong">
        <img
          src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(55).jpg"
          class="card-img"
          alt="..."
        />
        <div class="card-img-overlay">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <p class="card-text">Last updated 3 mins ago</p>
        </div>
      </div>
    </div>
  );
};

export default News;
