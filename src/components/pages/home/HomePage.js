import React from 'react';
import './HomePage.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Campus = ({ style }) => (
  <div className='campus_box' style={style}>
    test
  </div>
);

function CampusButton({ campusName }) {
  return (
    <button className='campus'>
      {' '}
      <p className='name'> {campusName}</p>{' '}
    </button>
  );
}

export function HomePage() {
  return (
    <div>
      <Container fluid>
        <Row fluid>
          <Col sm='12' md='6'>
            <CampusButton campusName='NDC' href='#' />
          </Col>
          <Col sm='12' md='6'>
            <CampusButton campusName='NDL' href='#' />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
