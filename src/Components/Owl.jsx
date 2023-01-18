import React from 'react';

import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';

import './style.css';
class Owl extends React.Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      initialSlide: 0,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
            infinite: true,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
          },
        },
      ],
    };
    return (
      <div class="container owll">
        <section class="text-center rs">
          <h4 class="mb-5">
            <strong>Companies hiring from C.S.E.</strong>
          </h4>

          <div>
            <Slider {...settings}>
              <div>
                <img
                  className="companies1"
                  src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
                  class="owl companies1"
                />
              </div>
              <div>
                <img
                  src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
                  class="owl"
                />
              </div>
              <div>
                <img
                  src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
                  class="owl"
                />
              </div>
              <div>
                <img
                  src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
                  class="owl"
                />
              </div>
              <div>
                <img
                  src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
                  class="owl"
                />
              </div>
              <div>
                <img
                  src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
                  class="owl"
                />
              </div>
              <div>
                <img
                  src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
                  class="owl"
                />
              </div>
              <div>
                <img
                  src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
                  class="owl"
                />
              </div>
            </Slider>
          </div>
        </section>
      </div>
    );
  }
}

export default Owl;
