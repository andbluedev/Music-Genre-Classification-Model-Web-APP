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

// Have a look at this https://react-bootstrap.github.io/layout/grid/
export function HomePage() {
  return (
    <div>
      <Container fluid>
        <Row fluid>
          {/* A ROW IS 12  sm is small width, md: is long width*/}
          <Col sm='12' md='6'>
            <Campus style={{ backgroundColor: '#F9F9F9' }} />
          </Col>
          <Col sm='12' md='6'>
            <Campus style={{ backgroundColor: 'rgba(195,126,10,0.21)' }} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
