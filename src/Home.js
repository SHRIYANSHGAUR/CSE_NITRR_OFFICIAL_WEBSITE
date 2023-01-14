import React, { useEffect } from 'react';
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

import About from './Components/About.jsx';
import Faculty from './Components/Faculty.jsx';
import Gallary from './Components/Gallary.jsx';
import Post from './Components/Post.jsx';
import Footer from './Components/Footer.jsx';

import Card from './Components/Card.jsx';
import Achievements from './Components/Achievements.jsx';
import MediaCoverage from './Components/MediaCoverage';

import Navbar from './Components/navbar.jsx';
import Nav from './Components/nav.js';
import Video from './Components/video.js';

import News from './Components/News.jsx';
import SmallCard from './Components/SmallCard.jsx';
import Carousal from './Components/Carousal.jsx';

function useEffect() {
  console.log('use');
}

function Header() {
  return (
    <>
      <Navbar />
      <Nav />
      <Video />
      <About />
      <Faculty />
      <News />
      <News />
      <News />
      <Post />
      <Gallary />
      {/* <Achievements />
      <MediaCoverage />
      <Card /> */}
      {/* <div>
        <main
          id="intro"
          class="bg-image"
          style={{
            backgroundImage:
              "url('https://mdbootstrap.com/img/new/fluid/city/018.jpg')",
            height: '100vh',
          }}
        ></main>
      </div> */}
    </>
  );
}

function GridList() {
  return (
    <MDBRow
      className="row-cols-1 row-cols-md-3 g-4"
      style={{
        marginTop: '2px',
      }}
    >
      <SmallCard />
      <SmallCard />
      <SmallCard />
      <SmallCard />
      <SmallCard />
      <SmallCard />
      <SmallCard />
      <SmallCard />
      <SmallCard />
    </MDBRow>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <GridList />
      <Footer />
    </>
  );
}
