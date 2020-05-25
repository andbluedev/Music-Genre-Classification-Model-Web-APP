import React, { useEffect, useState } from 'react';
import './HomePage.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { get } from '../../../data/api';
import NDCjpg from '../../../img/NDC.jpg';
import NDLjpg from '../../../img/NDL.jpg';
import roomfixLogo from '../../../img/roomfix_light_325x325.png';

function CampusButton({ campusName, href }) {
  let img;
  switch (campusName) {
    case 'NDC':
      img = NDCjpg;
      break;
    case 'NDL':
      img = NDLjpg;
      break;
    default:
      img = roomfixLogo;
  }

  return (
    <a href={href}>
      <Card className='text-white campus'>
        <Card.Img src={img} alt='Card image' />
        <Card.ImgOverlay>
          <Card.Title className='campus-title'>{campusName}</Card.Title>
        </Card.ImgOverlay>
      </Card>
    </a>
  );
}

export function HomePage() {
  const [buildings, setBuildings] = useState([]);

  useEffect(() => {
    get('/buildings').then((result) => {
      setBuildings(result.payload);
    });
  }, []);

  return (
    <div>
      <Container fluid>
        <Row fluid>
          {buildings.length > 0 &&
            buildings.map((building) => (
              <Col sm='12' md='6'>
                <CampusButton
                  campusName={building.name}
                  href={'/building/' + building.id}
                />
              </Col>
            ))}
        </Row>
      </Container>
    </div>
  );
}
