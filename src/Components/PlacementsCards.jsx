import React from 'react';
import { Row,Col } from 'react-bootstrap';
import { useEffect } from 'react';
import TrackVisibility from 'react-on-screen';
import 'animate.css'
import './style.css';

const News = (props) => {
  return (
    <TrackVisibility>
          {({ isVisible }) => (

        <div class="container news cd">
            <div>
          <h4 class="mb-5 font1">
           <h3 class="title-section text-center" className={isVisible ? 'animate__animated animate__swing':''}>{props.year}</h3>
          </h4>
          <div class="card  text-white shadow-1-strong ">
            <img
              src={props.src}
              class="card-img"
              alt="..."
            />
          </div>
          </div>
        </div>
        )}
</TrackVisibility>

  );
};

export default News;
