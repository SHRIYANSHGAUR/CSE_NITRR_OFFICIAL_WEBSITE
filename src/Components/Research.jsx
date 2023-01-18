import React from 'react';
import './style.css';

const Research = (props) => {
  return (
    <div class="container">
      <section class="text-center rs">
      <div class="title-section text-center mission1">
          <h2>{props.title}</h2>
          <span></span>
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-12 mb-4">
            <div class="card">
              <div
                class="bg-image hover-overlay ripple"
                data-mdb-ripple-color="light"
              >
                <img
                  src="https://i.postimg.cc/3wvBkz80/Research1.png" alt="Research1"
                  class="img-fluid"
                />
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
                  src="https://i.postimg.cc/kGzNMy0v/Research2.png" alt="Research2"
                  class="img-fluid"
                />
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
                  src="https://i.postimg.cc/5ynqcV3T/Research3.png" alt="Research3"
                  class="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Research;
