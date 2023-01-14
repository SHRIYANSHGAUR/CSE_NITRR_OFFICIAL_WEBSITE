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
      imgUrl: 'https://i.postimg.cc/fVdbRHgW/img1.png" alt="img1',
      websiteLink: 'http://www.nitrr.ac.in/viewdetails.php?q=cs.dsisodia',
    },
    {
      title: 'Dr. Naresh K. Nagwani',
      description: 'Associate Professor',
      imgUrl: 'https://i.postimg.cc/DWgnSRQh/img2.png',
      websiteLink: 'http://www.nitrr.ac.in/viewdetails.php?q=cs.nnagwani',
    },
    {
      title: 'Dr. Pradeep Singh',
      description: 'Associate Professor',
      imgUrl: 'https://i.postimg.cc/r0wcxggr/img3.png',
      websiteLink: 'http://www.nitrr.ac.in/viewdetails.php?q=cs.psingh',
    },
    {
      title: 'Dr.(Mrs).Aakanksha Sharaff',
      description: 'Assistant Professor',
      imgUrl: 'https://i.postimg.cc/3d48tShj/img4.png',
      websiteLink: 'http://www.nitrr.ac.in/viewdetails.php?q=cs.asharaff',
    },
    {
      title: 'Dr. Veena Anand',
      description: 'Assistant Professor',
      imgUrl: 'https://i.postimg.cc/6TTtQj8s/img5.png',
      websiteLink: 'http://www.nitrr.ac.in/viewdetails.php?q=cs.vanand',
    },
    {
      title: ' Dr. Manu Vardhan',
      description: 'Assistant Professor',
      imgUrl: 'https://i.postimg.cc/CBsBLv5n/img6.png',
      websiteLink: 'http://www.nitrr.ac.in/viewdetails.php?q=cs.mvardhan',
    },
    {
      title: 'Dr. Preeti Chandraka',
      description: ' Assistant Professor',
      imgUrl: 'https://i.postimg.cc/V5z0HcZq/img7.png',
      websiteLink: 'http://www.nitrr.ac.in/viewdetails.php?q=cse.pchandrakar',
    },
    {
      title: 'Dr. K. Jairam Naik',
      description: 'Assistant Professor',
      imgUrl: 'https://i.postimg.cc/BLSZNJZt/img8.png" alt="img8',
      websiteLink: 'http://www.nitrr.ac.in/viewdetails.php?q=cse.jnaik',
    },
    {
      title: 'Dr. Deepak Singh',
      description: 'Assistant Professor',
      imgUrl: 'https://i.postimg.cc/560YbSVj/img9.png" alt="img9',
      websiteLink: 'http://www.nitrr.ac.in/viewdetails.php?q=cse.dsingh',
    },
    {
      title: ' Dr. Sonal Yadav',
      description: 'Assistant Professor',
      imgUrl: 'https://i.postimg.cc/tngTRp88/img10.png" alt="img10',
      websiteLink: 'http://www.nitrr.ac.in/viewdetails.php?q=cse.syadav',
    },
    {
      title: 'Dr. Jitendra Kumar Rout',
      description: 'Assistant Professor',
      imgUrl: 'https://i.postimg.cc/nj2rtCSv/img11.png" alt="img11',
      websiteLink: 'http://www.nitrr.ac.in/viewdetails.php?q=cse.jkrout',
    },
    {
      title: 'Mr. Ravi Kumar',
      description: 'Temporary Faculty',
      imgUrl: 'https://i.postimg.cc/tYwTy0km/img12.png" alt="img12',
      websiteLink: '',
    },
    {
      title: 'Mr. Abhishek Shrivastava',
      description: 'Temporary Faculty',
      imgUrl: 'https://i.postimg.cc/nMVMGGMT/img13.png" alt="img13',
      websiteLink: '',
    },
    {
      title: ' Mr. Vishal Sathawane',
      description: 'Temporary Faculty',
      imgUrl: 'https://i.postimg.cc/Y4wCG1J6/img14.png" alt="img14',
      websiteLink: '',
    },
    {
      title: ' Ms. Swati saha',
      description: 'Temporary Faculty',
      imgUrl: 'https://i.postimg.cc/JG2ynHrx/img15.png" alt="img15',
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
