import React from 'react';
import { Container } from 'react-bootstrap';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import './cstyle.css';

function Gallary() {
  const images = [
    {
      src: 'https://i.postimg.cc/pLMbnLhc/Whats-App-Image-2023-01-14-at-00-01-52.jpg',
    },
    {
      src: "https://i.postimg.cc/7bWN06Xs/Whats-App-Image-2023-01-14-at-00-01-54.jpg' border='0' alt='Whats-App-Image-2023-01-14-at-00-01-54",
    },
    {
      src: 'https://i.postimg.cc/pLMbnLhc/Whats-App-Image-2023-01-14-at-00-01-52.jpg',
    },
    {
      src: 'https://i.postimg.cc/pLMbnLhc/Whats-App-Image-2023-01-14-at-00-01-52.jpg',
    },
    {
      src: 'https://i.postimg.cc/pLMbnLhc/Whats-App-Image-2023-01-14-at-00-01-52.jpg',
    },
    {
      src: 'https://i.postimg.cc/pLMbnLhc/Whats-App-Image-2023-01-14-at-00-01-52.jpg',
    },
    {
      src: 'https://i.postimg.cc/pLMbnLhc/Whats-App-Image-2023-01-14-at-00-01-52.jpg',
    },
    {
      src: 'https://i.postimg.cc/pLMbnLhc/Whats-App-Image-2023-01-14-at-00-01-52.jpg',
    },
    {
      src: 'https://i.postimg.cc/pLMbnLhc/Whats-App-Image-2023-01-14-at-00-01-52.jpg',
    },
    {
      src: 'https://i.postimg.cc/pLMbnLhc/Whats-App-Image-2023-01-14-at-00-01-52.jpg',
    },
  ];
  images.map((number) => ({
    src: `{number}`,
  }));

  return (
    <div id="gallary1" class="section-cotent">
      <div class="container1">
        <div class="title-section text-center gallary1">
          <h2>Gallery</h2>
          <span></span>
        </div>
        <Container className="container2">
          <div className="gallary">
            <Carousel
              className="gallaryRes"
              images={images}
              hasIndexBoard={false}
            />
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Gallary;
