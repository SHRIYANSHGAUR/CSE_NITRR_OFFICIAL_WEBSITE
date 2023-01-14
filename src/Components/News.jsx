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
    <div class="nn">
      <section class="text-center tk">
        <h4 class="mb-5">
          <strong>Latest posts</strong>
        </h4>

        <div class="container news">
          <div class="card bg-dark text-white shadow-1-strong">
            <img
              src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(55).jpg"
              class="card-img"
              alt="..."
            />
            <div class="card-img-overlay">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">one liner</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
