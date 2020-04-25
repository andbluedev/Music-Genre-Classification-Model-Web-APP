import React from 'react';
import './HomePage.scss';
import { SubTitle, Title } from '../../common/text/Basics';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const PlaceHolder = ({ style }) => (
  <div className='placeholder_box' style={style}>
    test
  </div>
);

// Have a look at this https://react-bootstrap.github.io/layout/grid/
export function HomePage() {
  return (
    <div>
      <Title>HomePage</Title>
      <SubTitle>Lorem ipsum dolor sit amet</SubTitle>
      <Container fluid>
        <Row fluid>
          {/* A ROW IS 12  sm is small width, md: is long width*/}
          <Col sm='12' md='4'>
            <PlaceHolder style={{ backgroundColor: '#F9F9F9' }} />
          </Col>
          <Col sm='12' md='8'>
            <PlaceHolder style={{ backgroundColor: 'rgba(195,126,10,0.21)' }} />
          </Col>
        </Row>
        <Row className='justify-content-md-center'>
          <Col sm='12' md='6'>
            <PlaceHolder style={{ backgroundColor: '#BDBDBD' }} />
          </Col>
          <Col sm='12'>
            <PlaceHolder style={{ backgroundColor: '#F9F9F9' }} />
          </Col>
          <Col sm='12'>
            <PlaceHolder style={{ backgroundColor: 'rgba(3,169,244,0.25)' }} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
