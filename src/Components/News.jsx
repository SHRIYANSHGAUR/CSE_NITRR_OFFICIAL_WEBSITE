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

const News = (props) => {
  return (
    <div class="nn">
      <section class="text-center tk">
        <h4 class="mb-5">
          <strong>{props.title}</strong>
        </h4>

        <div class="container news cd">
          <div class="card  text-white shadow-1-strong ">
            <img
              src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(55).jpg"
              class="card-img"
              alt="..."
            />
            <div class="card-img-overlay">
              <h5 class="card-title">{props.year}</h5>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
