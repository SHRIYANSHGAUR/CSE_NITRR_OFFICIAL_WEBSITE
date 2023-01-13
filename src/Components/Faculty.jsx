import React from 'react';
import { Container } from 'react-bootstrap';
import Facultycard from './Facultycard';
import './cstyle.css';
// import img1 from '../assests/Faculty/img1.png';
// import img2 from '../assests/Faculty/img2.png';
// import img3 from '../assests/Faculty/img3.png';
// import img4 from '../assests/Faculty/img4.png';
// import img5 from '../assests/Faculty/img5.png';
// import img6 from '../assests/Faculty/img6.png';
// import img7 from '../assests/Faculty/img7.png';
// import img8 from '../assests/Faculty/img8.png';
// import img9 from '../assests/Faculty/img9.png';
// import img10 from '../assests/Faculty/img10.png';
// import img11 from '../assests/Faculty/img11.png';
// import img12 from '../assests/Faculty/img12.png';
// import img13 from '../assests/Faculty/img13.png';
// import img14 from '../assests/Faculty/img14.png';
// import img15 from '../assests/Faculty/img15.png';
import TrackVisibility from 'react-on-screen';
import Carousel from 'react-elastic-carousel';

function Faculty() {
  const Teachers = [
    {
      title: 'Dr. Dilip Singh Sisodia',
      description: ' Head of the Department',
      imgUrl: 'https://i.postimg.cc/Z0H6W0zV/logo.png',
      websiteLink: 'http://www.nitrr.ac.in/viewdetails.php?q=cs.dsisodia',
    },
    {
      title: 'Dr. Naresh K. Nagwani',
      description: 'Associate Professor',
      imgUrl: 'https://i.postimg.cc/Z0H6W0zV/logo.png',
      websiteLink: 'http://www.nitrr.ac.in/viewdetails.php?q=cs.nnagwani',
    },
    {
      title: 'Dr. Pradeep Singh',
      description: 'Associate Professor',
      imgUrl: 'https://i.postimg.cc/Z0H6W0zV/logo.png',
      websiteLink: 'http://www.nitrr.ac.in/viewdetails.php?q=cs.psingh',
    },
    {
      title: 'Dr.(Mrs).Aakanksha Sharaff',
      description: 'Assistant Professor',
      imgUrl: 'https://i.postimg.cc/Z0H6W0zV/logo.png',
      websiteLink: 'http://www.nitrr.ac.in/viewdetails.php?q=cs.asharaff',
    },
    {
      title: 'Dr. Veena Anand',
      description: 'Assistant Professor',
      imgUrl: 'https://i.postimg.cc/Z0H6W0zV/logo.png',
      websiteLink: 'http://www.nitrr.ac.in/viewdetails.php?q=cs.vanand',
    },
    {
      title: ' Dr. Manu Vardhan',
      description: 'Assistant Professor',
      imgUrl: 'https://i.postimg.cc/Z0H6W0zV/logo.png',
      websiteLink: 'http://www.nitrr.ac.in/viewdetails.php?q=cs.mvardhan',
    },
    {
      title: 'Dr. Preeti Chandraka',
      description: ' Assistant Professor',
      imgUrl: 'https://i.postimg.cc/Z0H6W0zV/logo.png',
      websiteLink: 'http://www.nitrr.ac.in/viewdetails.php?q=cse.pchandrakar',
    },
    {
      title: 'Dr. K. Jairam Naik',
      description: 'Assistant Professor',
      imgUrl: 'https://i.postimg.cc/Z0H6W0zV/logo.png',
      websiteLink: 'http://www.nitrr.ac.in/viewdetails.php?q=cse.jnaik',
    },
    {
      title: 'Dr. Deepak Singh',
      description: 'Assistant Professor',
      imgUrl: 'https://i.postimg.cc/Z0H6W0zV/logo.png',
      websiteLink: 'http://www.nitrr.ac.in/viewdetails.php?q=cse.dsingh',
    },
    {
      title: ' Dr. Sonal Yadav',
      description: 'Assistant Professor',
      imgUrl: 'https://i.postimg.cc/Z0H6W0zV/logo.png',
      websiteLink: 'http://www.nitrr.ac.in/viewdetails.php?q=cse.syadav',
    },
    {
      title: 'Dr. Jitendra Kumar Rout',
      description: 'Assistant Professor',
      imgUrl: 'https://i.postimg.cc/Z0H6W0zV/logo.png',
      websiteLink: 'http://www.nitrr.ac.in/viewdetails.php?q=cse.jkrout',
    },
    {
      title: 'Mr. Ravi Kumar',
      description: 'Temporary Faculty',
      imgUrl: 'https://i.postimg.cc/Z0H6W0zV/logo.png',
      websiteLink: '',
    },
    {
      title: 'Mr. Abhishek Shrivastava',
      description: 'Temporary Faculty',
      imgUrl: 'https://i.postimg.cc/Z0H6W0zV/logo.png',
      websiteLink: '',
    },
    {
      title: ' Mr. Vishal Sathawane',
      description: 'Temporary Faculty',
      imgUrl: 'https://i.postimg.cc/Z0H6W0zV/logo.png',
      websiteLink: '',
    },
    {
      title: ' Ms. Swati saha',
      description: 'Temporary Faculty',
      imgUrl: 'https://i.postimg.cc/Z0H6W0zV/logo.png',
      websiteLink: '',
    },
  ];
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 5 },
    { width: 1200, itemsToShow: 2 },
  ];
  return (
    <section className="faculty" id="facultys">
      <Container>
        <TrackVisibility>
          {({ isVisible }) => (
            <div
              className={isVisible ? 'animate__animated animate__fadeIn' : ''}
            >
              <div id="Faculty1" class="section-cotent">
                <div class="container">
                  <div class="title-section text-center">
                    <h2>Faculty</h2>
                    <span></span>
                  </div>
                  <div className="carousel-wrapper">
                    <Carousel breakPoints={breakPoints}>
                      {Teachers.map((teacher, index) => {
                        return <Facultycard key={index} {...teacher} />;
                      })}
                    </Carousel>
                  </div>
                </div>
              </div>
            </div>
          )}
        </TrackVisibility>
      </Container>
    </section>
  );
}

export default Faculty;
