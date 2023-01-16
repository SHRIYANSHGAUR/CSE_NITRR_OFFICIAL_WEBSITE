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
import Gallary1 from './Components/Gallary1.jsx';
import Reseacrh from './Components/Research.jsx';

import Card from './Components/Card.jsx';
import Achievements from './Components/Achievements.jsx';
import MediaCoverage from './Components/MediaCoverage';
import Owl from './Components/Owl.jsx';

import Navbar from './Components/navbar.jsx';
import Nav from './Components/nav.js';
import Video from './Components/video.js';

import News from './Components/News.jsx';
import SmallCard from './Components/SmallCard.jsx';
import Carousal from './Components/Carousal.jsx';
import Mission from './Components/Mission.jsx';

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
      <Mission />
      <Faculty />
      <News year={'Year - 2022'} title={'Placement Records'} />
      <News year={'Year - 2021'} />
      <News year={'Year - 2020'} />
      <News year={'Year - 2021'} title={'Placement Trends'} />
      <News year={'Year - 2020'} />
      <Reseacrh title={'Research and Publications'} />
      <Owl />
      <Gallary />
      <Post />
      <Gallary1 />
    </>
  );
}

function GridList() {
  return (
    <div classname="container last">
      <section class="text-center">
        <h4 class="mb-5">
          <strong>Conferences and Talks</strong>
        </h4>

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
      </section>
    </div>
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
