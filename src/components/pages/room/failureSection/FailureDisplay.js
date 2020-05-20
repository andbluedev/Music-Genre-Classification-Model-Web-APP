import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import './FailureDisplay.scss';
import { put } from '../../../../data/api';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { UserContext } from '../../../../data/auth/UserContext';
import Dropdown from 'react-bootstrap/Dropdown';

function LastElement(content) {
  function changeUpvote(e) {
    e.preventDefault();
    let hasUpvote = false;
    content.upvoters.map((upvoter) =>
      content.id === upvoter.id ? (hasUpvote = true) : (hasUpvote = false)
    );
    if (!hasUpvote) {
      put('/failures/upvote?failureId=' + content.failureid, '');
    } else {
      put('/failures/upvote/remove?failureId=' + content.failureid, '');
    }
  }
  function changeState(e) {
    
  }

  return content.role === 'STUDENT' || content.role === 'TEACHER' ? (
    <Button onClick={changeUpvote}>
      <i className='fas fa-thumbs-up'></i>
    </Button>
  ) : (
    <Dropdown>
      <Dropdown.Toggle id='dropdown-basic'>Résoudre</Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item>Action</Dropdown.Item>
        <Dropdown.Item>Another action</Dropdown.Item>
        <Dropdown.Item>Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export function FailureDisplay(props) {
  const { state } = useContext(UserContext);
  let failureState = '';
  switch (props.state) {
    case 'UN_RESOLVED':
      failureState = 'À traiter';
      break;
    case 'ONGOING':
      failureState = 'En cours';
      break;
    case 'CLOSED':
      failureState = 'Réparé';
      break;
    case 'USELESS':
      failureState = 'Inadéquat';
      break;
  }

  let currentTime = new Date(props.date);
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
                    <strong>Date :</strong>
                  </Row>
                  <Row>{currentTime.toLocaleDateString()} </Row>
                </Col>
                <Col>
                  <Row>
                    <strong>Etat : </strong>
                  </Row>
                  <Row>{failureState}</Row>
                </Col>
                <Col>
                  <Accordion.Toggle as={Button} variant='link' eventKey='0'>
                    Description
                  </Accordion.Toggle>
                </Col>
                <Col>
                  <LastElement
                    role={state.role}
                    id={state.id}
                    failureid={props.id}
                    upvoters={props.upvoters}
                  />
                  + {props.upvoters.length}
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
