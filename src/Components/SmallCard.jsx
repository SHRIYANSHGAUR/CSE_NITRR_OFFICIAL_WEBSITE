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

const SmallCard = () => {
  return (
    <div>
      <div class="post">
        <section class="text-center">
          <h4 class="mb-5">
            <strong>Latest posts</strong>
          </h4>
          <div class="col">
            <div class="card">
              <img
                class="card-img-top"
                src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.jpg"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SmallCard;
