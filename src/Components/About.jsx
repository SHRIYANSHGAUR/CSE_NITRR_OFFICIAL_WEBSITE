import React from 'react';
import './cstyle.css';

function About() {
  return (
    <div id="about" class="section-cotent">
      <div class="container">
        <div class="title-section text-center about1">
          <h2>About CSE Department</h2>
          <span></span>
        </div>
        <div class="row">
          <div class="col-md-12">
            <h4 class="widget-title">National Institute Of Technology</h4>
            <p>
              The institute is committed to the challenging task of development
              of technical education by preparing seasoned graduates in highly
              sophisticated field of engineering and technology.
              <br /> Development of India as an emerging industrial power is a
              demanding exercise as it involves the combination of cost
              effectiveness and efficiency along with producing world-class
              technology at the cutting edge. For about five decades we have
              been doing it with sincerity and commitment at NIT Raipur. At
              present the institute offers graduate level courses in twelve
              disciplines.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
