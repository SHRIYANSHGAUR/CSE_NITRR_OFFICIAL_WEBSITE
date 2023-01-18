import React from 'react';
import { Row, Col} from 'react-bootstrap';
import './cstyle.css';


function Mission() {
  return (
    <div id="mission" class="section-cotent">
      <div class="container">
        <div class="title-section text-center mission1">
          <h2>Word from H.O.D.</h2>
          <span></span>
        </div>
        <Row >
          <Col sm={12} md={2}>
            <img
              class="hod"
              src="https://i.postimg.cc/fVdbRHgW/img1.png"
              alt="React Image"
            />
            </Col>
            <Col sm={12} md={10}>
            <p>
            Dr. Dilip Singh Sisodia is Working as Associate Professor at the
              Department of Computer Science and Engineering, National Institute
              of Technology Raipur, Raipur, India.Dr. Sisodia have expertise in
              various fields of computer science including Artificial
              Intelligence, Machine Learning, Soft Computing, Computation
              intelligence, Theoretical computer science and many more.
              <br></br>
              Dr. Sisodia has contributed to more than 100 refereed articles,
              including 78 papers in Web of Science/Scopus indexed journals, his
              conference proceedings and book chapters have been published by
              reputed international publishers.Some notable publication
              destinations of Dr. Sisodia are IEEE Transactions on Systems: Man,
              and Cybernetics Systems, Knowledge base systems, Expert system,
              and applications, Information Sciences and more. He has also
              shared his work at various international conferences in countries
              like Israel, Spain, Singapore, Thailand, and more.
            </p>
            </Col>
        </Row>
      </div>
      <Row>
      <Col xs={12} md={6}>
      <div class="container">
        <div class="mission1-section text-center mission1">
          <h2>Mission</h2>
          <span></span>
        </div>
        <div class="row">
          <div class="col-md-13">
            <p className='content2'>
            To impart effective education at undergraduate levels in the field
              of Computer Science and Engineering. To strive steadily for the
              overall growth and development of intellect and personality of the
              students who, as professionals, would be confident to face the
              challenges of the world of work. To conduct Research and
              Development and offer consultancy services. To improve
              continuously the quality of teaching-learning process.
            </p>
          </div>
        </div>
      </div>
      </Col>
      <Col xs={12} md={6}>
      <div class="container">
        <div class="mission1-section text-center mission1">
          <h2>Vision</h2>
          <span></span>
        </div>
        <div class="row">
          <div class="col-md-13">
            <p>
            To promote Research and Development in the frontier areas of
              Computer Science & Engineering. To generate Competent
              Professionals to become part of the industry and Research
              Organizations at the National and International levels. To provide
              necessary strengths to enable the students to Innovate and to
              become Entrepreneurs.
            </p>
          </div>
        </div>
      </div>
      </Col>
      </Row>
    </div>
  );
}

export default Mission;

