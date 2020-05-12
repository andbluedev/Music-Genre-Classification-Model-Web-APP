import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import './failureDisplay.scss';
import { get } from '../../../../data/api';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function FailureDisplay(props) {
  const [role, setRole] = useState('');

  useEffect(() => {
    get('/account/me').then((result) => {
      setRole(result.payload.role);
    });
  }, []);

  console.log(role);

  let LastElement = () => <p></p>;
  if (role == 'STUDENT' || role == 'TEACHER') {
    LastElement = () => (
      <Button>
        <i className='fas fa-thumbs-up'></i>
      </Button>
    );
  } else if (role == 'ADMIN') {
    LastElement = () => <Button>Résoudre</Button>;
  }
  var sta = '';
  switch (props.state) {
    case 'UN_RESOLVED':
      sta = 'À traiter';
      break;
    case 'ONGOING':
      sta = 'En cours';
      break;
    case 'CLOSED':
      sta = 'Réparé';
      break;
    case 'USELESS':
      sta = 'Inadéquat';
      break;
  }

  var currentTime = new Date(props.date);
  return (
    <div>
      <Accordion defaultActiveKey='1'>
        <Card>
          <Card.Header>
            <Container>
              <Row>
                <Col>
                  <Row>
                    <strong>Appareil :</strong>
                  </Row>
                  <Row>{props.device}</Row>
                </Col>
                <Col>
                  <Row>
                    <strong>Type de panne :</strong>
                  </Row>
                  <Row>{props.type}</Row>
                </Col>
                <Col>
                  <Row>
                    <strong>Date :</strong>{' '}
                  </Row>
                  <Row>{currentTime.toLocaleDateString()} </Row>
                </Col>
                <Col>
                  <Row>
                    <strong>Etat : </strong>
                  </Row>
                  <Row>{sta}</Row>
                </Col>
                <Col>
                  <Accordion.Toggle as={Button} variant='link' eventKey='0'>
                    {' '}
                    Description{' '}
                  </Accordion.Toggle>
                </Col>
                <Col>
                  <LastElement /> {props.upvote}
                </Col>
              </Row>
            </Container>
          </Card.Header>
          <Accordion.Collapse eventKey='0'>
            <Card.Body>{props.description}</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      <br />
    </div>
  );
}
