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
      <MDBCol>
        <MDBCard>
          <MDBCardImage
            src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.jpg"
            alt="..."
            position="top"
          />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </div>
  );
};

export default SmallCard;
