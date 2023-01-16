import React from 'react';
import './style.css';

import Policy from './Components/Policy.jsx';

const Footer = () => {
  return (
    <div>
      <footer
        class="text-center text-lg-start text-white"
        style={{ backgroundColor: 'maroon' }}
      >
        <div class="container p-4 pb-0">
          <section class="">
            <div class="row">
              <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 class="text-uppercase mb-4 font-weight-bold">
                  Company name
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </div>
              <hr class="w-100 clearfix d-md-none" />

              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 class="text-uppercase mb-4 font-weight-bold">Products</h6>
                <p>
                  <a class="text-white">MDBootstrap</a>
                </p>
                <p>
                  <a class="text-white">MDWordPress</a>
                </p>
                <p>
                  <a class="text-white">BrandFlow</a>
                </p>
                <p>
                  <a class="text-white" href="/policy">
                    Policy
                  </a>
                </p>
              </div>

              <hr class="w-100 clearfix d-md-none" />

              <hr class="w-100 clearfix d-md-none" />
              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 class="text-uppercase mb-4 font-weight-bold">Contact</h6>
                <p>
                  <i class="fas fa-home mr-3"></i> New York, NY 10012, US
                </p>
                <p>
                  <i class="fas fa-envelope mr-3"></i> info@gmail.com
                </p>
                <p>
                  <i class="fas fa-phone mr-3"></i> + 01 234 567 88
                </p>
                <p>
                  <i class="fas fa-print mr-3"></i> + 01 234 567 89
                </p>
              </div>
              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 class="text-uppercase mb-4 font-weight-bold">Follow us</h6>

                <a
                  class="btn btn-primary btn-floating m-1"
                  style={{ backgroundColor: '#3b5998' }}
                  href="#!"
                  role="button"
                >
                  <i class="fab fa-facebook-f"></i>
                </a>

                <a
                  class="btn btn-primary btn-floating m-1"
                  style={{ backgroundColor: '#55acee' }}
                  href="#!"
                  role="button"
                >
                  <i class="fab fa-twitter"></i>
                </a>

                <a
                  class="btn btn-primary btn-floating m-1"
                  style={{ backgroundColor: '#dd4b39' }}
                  href="#!"
                  role="button"
                >
                  <i class="fab fa-google"></i>
                </a>

                <a
                  class="btn btn-primary btn-floating m-1"
                  style={{ backgroundColor: '#ac2bac' }}
                  href="#!"
                  role="button"
                >
                  <i class="fab fa-instagram"></i>
                </a>

                <a
                  class="btn btn-primary btn-floating m-1"
                  style={{ backgroundColor: '#0082ca' }}
                  href="#!"
                  role="button"
                >
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a
                  class="btn btn-primary btn-floating m-1"
                  style={{ backgroundColor: '#333333' }}
                  href="#!"
                  role="button"
                >
                  <i class="fab fa-github"></i>
                </a>
              </div>
            </div>
          </section>
        </div>
        <div
          class="text-center p-3"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
        >
          © 2023-Present Copyright:
          <a class="text-white" href="http://nitrr.ac.in/">
            Computer Science Engineering Department N.I.T. Raipur
          </a>
          <br />
          <a
            class="text-white"
            href="https://www.linkedin.com/in/shriyansh-gaur-82b969a6/"
          >
            Designed and Developed by Web Team | A.C.E. |
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
