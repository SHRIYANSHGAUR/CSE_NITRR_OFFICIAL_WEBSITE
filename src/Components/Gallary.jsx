import React from 'react';
import { Container } from 'react-bootstrap';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import './cstyle.css';

function Gallary() {
  const images = [9, 8, 7, 6, 5, 4, 3, 2, 1].map((number) => ({
    src: `https://placedog.net/${number}00/${number}00?id=${number}`,
  }));

  return (
    <div id="gallary1" class="section-cotent">
      <div class="container">
        <div class="title-section text-center gallary1">
          <h2>Gallary</h2>
          <span></span>
        </div>
        <Container>
          <div className="gallary">
            <Carousel
              images={images}
              /* style={{height: 500, width: 800 }}*/
              hasIndexBoard={false}
            />
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Gallary;
