import React from "react";
import "./style.css";

const Post = () => {
  return (
    <div>
      <div class="post">
        <section class="text-center">
          <h4 class="mb-5">
            <strong>Events and Workshops</strong>
          </h4>
          <div class="row">
            <div class="col-lg-4 col-md-12 mb-4">
              <div class="card">
                <div
                  class="bg-image hover-overlay ripple"
                  data-mdb-ripple-color="light"
                >
                  <img
                    // src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
                    src="https://i.postimg.cc/SKzqG1H0/Screenshot-264.png"
                    class="img-fluid"
                  />
                  <a href="#!">
                    <div
                      class="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                    ></div>
                  </a>
                </div>
                <div class="card-body">
                  <h5 class="card-title">STTP & FDP</h5>
                  <p class="card-text">
                    Short-term training program and FDP has been organized by
                    department.
                  </p>
                  {/* <a href="#!" class="btn btn-primary">
                    Read
                  </a> */}
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
                    // src="https://mdbootstrap.com/img/new/standard/nature/023.jpg"
                    src="https://i.postimg.cc/4xz7mV2s/Screenshot-271.png"
                    class="img-fluid"
                  />
                  <a href="#!">
                    <div
                      class="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                    ></div>
                  </a>
                </div>
                <div class="card-body">
                  <h5 class="card-title">Workshop</h5>
                  <p class="card-text">
                    Workshop on Artificial Intelligence has been organized by department.
                  </p>
                  {/* <a href="#!" class="btn btn-primary">
                    Read
                  </a> */}
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
                    // src="https://mdbootstrap.com/img/new/standard/nature/111.jpg"
                    src="https://i.postimg.cc/8PKSgVSQ/Screenshot-266.png"
                    class="img-fluid"
                  />
                  <a href="#!">
                    <div
                      class="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                    ></div>
                  </a>
                </div>
                <div class="card-body">
                  <h5 class="card-title">Workshops</h5>
                  <p class="card-text">
                    different workshops has been organized for students and faculty.
                  </p>
                  {/* <a href="#!" class="btn btn-primary">
                    Read
                  </a> */}
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-12 mb-4">
              <div class="card">
                <div
                  class="bg-image hover-overlay ripple"
                  data-mdb-ripple-color="light"
                >
                  <img
                    // src="https://mdbootstrap.com/img/new/standard/nature/002.jpg"
                    src="https://i.postimg.cc/4xYTJFfK/Screenshot-267.png"
                    class="img-fluid"
                  />
                  <a href="#!">
                    <div
                      class="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                    ></div>
                  </a>
                </div>
                <div class="card-body">
                  <h5 class="card-title">Guest Lectures</h5>
                  <p class="card-text">
                    Guest lectures were organized by department for students.
                  </p>
                  {/* <a href="#!" class="btn btn-primary">
                    Read
                  </a> */}
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
                    // src="https://mdbootstrap.com/img/new/standard/nature/022.jpg"
                    src="https://i.postimg.cc/Dfch5Xpz/Screenshot-268.png"
                    class="img-fluid"
                  />
                  <a href="#!">
                    <div
                      class="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                    ></div>
                  </a>
                </div>
                <div class="card-body">
                  <h5 class="card-title">Training Progarms</h5>
                  <p class="card-text">
                    Training Progarmas were organized by department.
                  </p>
                  {/* <a href="#!" class="btn btn-primary">
                    Read
                  </a> */}
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
                    // src="https://mdbootstrap.com/img/new/standard/nature/035.jpg"
                    src="https://i.postimg.cc/8ztfVWy5/Screenshot-275.png"
                    class="img-fluid"
                  />
                  <a href="#!">
                    <div class="mask"></div>
                  </a>
                </div>
                <div class="card-body">
                  <h5 class="card-title">Training Program</h5>
                  <p class="card-text">
                    Training Program on deep learning has been organised by department.
                  </p>
                  {/* <a href="#!" class="btn btn-primary">
                    Read
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Post;
