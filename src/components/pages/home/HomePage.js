import React, { useEffect, useState } from 'react';
import './HomePage.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { get } from '../../../data/api';

function CampusButton({ campusName, href }) {
  return (
    <a href={href}>
      <button className='campus'>
        <p className='name'> {campusName}</p>
      </button>
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

// center row + href
