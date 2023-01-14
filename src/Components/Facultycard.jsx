import React from 'react';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import './cstyle.css';

function Facultycard({ title, description, imgUrl, websiteLink }) {
  return (
    <Container className="cardBox">
      <Card className="Cardclass">
        <span className="overlay"></span>
        <div className="card-image">
          <Card.Img class="FacultyImage card-img" variant="top" src={imgUrl} />
        </div>
        <Card.Body>
          <Container>
            <Card.Title className="cardTitle">{title}</Card.Title>
          </Container>
          <Card.Text>
              <div className="description">{description}</div>
          </Card.Text>
            <Card.Link className='button1' href={websiteLink}>
              <Button  variant="outline-warning">Profile Link</Button>
            </Card.Link>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Facultycard;
