import React from 'react';
import './style.css';

const Carousal = () => {
  return (
    <div>
      <div
        id="carouselExampleCaptions"
        class="carousel slide carousel-fade shadow-3-strong"
        data-mdb-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-mdb-target="#carouselExampleCaptions"
            data-mdb-slide-to="0"
            class=""
          ></li>
          <li
            data-mdb-target="#carouselExampleCaptions"
            data-mdb-slide-to="1"
            class=""
          ></li>
          <li
            data-mdb-target="#carouselExampleCaptions"
            data-mdb-slide-to="2"
            class="active"
            aria-current="true"
          ></li>
        </ol>

        <div class="carousel-inner">
          <div class="carousel-item">
            <img
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
          </div>

          <div class="carousel-item">
            <img
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>

          <div class="carousel-item active">
            <img
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </div>
          </div>
        </div>

        <a
          class="carousel-control-prev"
          href="#carouselExampleCaptions"
          role="button"
          data-mdb-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleCaptions"
          role="button"
          data-mdb-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </a>
      </div>
    </div>
  );
};

export default Carousal;
