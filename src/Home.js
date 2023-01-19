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

import Policy from './Components/Policy.jsx';
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
import YouTube from './Components/YouTube.js';

import News from './Components/News.jsx';
import SmallCard from './Components/SmallCard.jsx';
import Carousal from './Components/Carousal.jsx';
import Mission from './Components/Mission.jsx';
import Placements from './Components/Placements.jsx';

// function useEffect() {
//   console.log('use');
// }

function Header() {
  return (
    <>
      <Navbar />
      <Nav />
      {/* <Video /> */}
      <YouTube video="tSQVgiwr3lU" autoplay="1" rel="0" modest="1" />
      <About />
      <Mission />
      <Faculty />
      <Placements />
      <Reseacrh title={'RESEARCH AND PUBLICATIONS'} />
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
          <div class="col-lg-4 col-md-6 mb-4">
              <div class="card">
                <div
                  class="bg-image hover-overlay ripple"
                  data-mdb-ripple-color="light"
                >
                  <img
                    // src="https://mdbootstrap.com/img/new/standard/nature/023.jpg"
                    src="https://i.postimg.cc/vZM2KRjy/Screenshot-276.png"
                    class="img-fluid"
                  />
                  <a href="#!">
                    <div
                      class="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                    ></div>
                  </a>
                </div>
                <div class="card-body">
                  <h5 class="card-title">ISMS 2021</h5>
                  <p class="card-text">
                    ISMS 2021 has been organized by department.
                  </p>
                  {/* <a href="#!" class="btn btn-primary">
                    Read
                  </a> */}
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 mb-4">
              <div class="card">
                <div
                  class="bg-image hover-overlay ripple"
                  data-mdb-ripple-color="light"
                >
                  <img
                    // src="https://mdbootstrap.com/img/new/standard/nature/023.jpg"
                    src="https://i.postimg.cc/85qh5m0B/Screenshot-277.png"
                    class="img-fluid"
                  />
                  <a href="#!">
                    <div
                      class="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                    ></div>
                  </a>
                </div>
                <div class="card-body">
                  <h5 class="card-title">MISP 2022</h5>
                  <p class="card-text">
                    MISP 2022 has been organized by department.
                  </p>
                  {/* <a href="#!" class="btn btn-primary">
                    Read
                  </a> */}
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 mb-4">
              <div class="card">
                <div
                  class="bg-image hover-overlay ripple"
                  data-mdb-ripple-color="light"
                >
                  <img
                    // src="https://mdbootstrap.com/img/new/standard/nature/023.jpg"
                    src="https://i.postimg.cc/mkC7FFxx/Screenshot-278.png"
                    class="img-fluid"
                  />
                  <a href="#!">
                    <div
                      class="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                    ></div>
                  </a>
                </div>
                <div class="card-body">
                  <h5 class="card-title">ICIINS 2022</h5>
                  <p class="card-text">
                  ICIINS 2022 has been organized by department.
                  </p>
                  {/* <a href="#!" class="btn btn-primary">
                    Read
                  </a> */}
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 mb-4">
              <div class="card">
                <div
                  class="bg-image hover-overlay ripple"
                  data-mdb-ripple-color="light"
                >
                  <img
                    // src="https://mdbootstrap.com/img/new/standard/nature/023.jpg"
                    src="https://i.postimg.cc/jj36Vb61/Screenshot-279.png"
                    class="img-fluid"
                  />
                  <a href="#!">
                    <div
                      class="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                    ></div>
                  </a>
                </div>
                <div class="card-body">
                  <h5 class="card-title">SCITSE 2017</h5>
                  <p class="card-text">
                  SCITSE 2017has been organized by department.
                  </p>
                  {/* <a href="#!" class="btn btn-primary">
                    Read
                  </a> */}
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 mb-4">
              <div class="card">
                <div
                  class="bg-image hover-overlay ripple"
                  data-mdb-ripple-color="light"
                >
                  <img
                    // src="https://mdbootstrap.com/img/new/standard/nature/023.jpg"
                    src="https://i.postimg.cc/Pxhqp5Vc/Screenshot-280-2.png"
                    class="img-fluid"
                  />
                  <a href="#!">
                    <div
                      class="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                    ></div>
                  </a>
                </div>
                <div class="card-body">
                  <h5 class="card-title">RAC2B 2017</h5>
                  <p class="card-text">
                  RAC2B 2017 has been organized by department.
                  </p>
                  {/* <a href="#!" class="btn btn-primary">
                    Read
                  </a> */}
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 mb-4">
              <div class="card">
                <div
                  class="bg-image hover-overlay ripple"
                  data-mdb-ripple-color="light"
                >
                  <img
                    // src="https://mdbootstrap.com/img/new/standard/nature/023.jpg"
                    src="https://i.postimg.cc/sXFhnz69/Screenshot-281-2.png"
                    class="img-fluid"
                  />
                  <a href="#!">
                    <div
                      class="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                    ></div>
                  </a>
                </div>
                <div class="card-body">
                  <h5 class="card-title">ATAL FDP</h5>
                  <p class="card-text">
                    ATAL FDP Artificial Intelligence has been organized by department.
                  </p>
                  {/* <a href="#!" class="btn btn-primary">
                    Read
                  </a> */}
                </div>
              </div>
            </div>
            {/* <SmallCard />
          <SmallCard />
          <SmallCard />
          <SmallCard />
          <SmallCard />
          <SmallCard />
          <SmallCard />
          <SmallCard />
          <SmallCard /> */}
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
