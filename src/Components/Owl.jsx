import React from 'react';

import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';

import './style.css';

class Owl extends React.Component {
  render() {
    const settings = {
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
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
