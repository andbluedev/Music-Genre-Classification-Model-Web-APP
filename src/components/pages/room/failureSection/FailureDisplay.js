import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import './FailureDisplay.scss';
import { put, failureState } from '../../../../data/api';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { UserContext } from '../../../../data/auth/UserContext';
import Dropdown from 'react-bootstrap/Dropdown';

function RoomActionButton(props) {
  function changeUpvote(e) {
    e.preventDefault();
    console.log(props.upvoters,'1');
    let hasUpvote = false;
    props.upvoters.map((upvoter) =>
      props.userId === upvoter.id ? (hasUpvote = true) : (hasUpvote = false)
    );
    if (!hasUpvote) {
      put('/failures/upvote?failureId=' + props.failureid, '').then((result) => {
        let updatedFailures = props.failures;
        updatedFailures.map((failure) => {
          if (failure.id === props.failureid) {
            result.payload.upvoters.map((upvoter) => {
              if (props.userId === upvoter.id) {
                failure.upvoters.push(upvoter);
              }
            });
          }
        });
        return props.setFailures([...updatedFailures]);
      });
    } else {
      put('/failures/upvote/remove?failureId=' + props.failureid, '').then(() => {
        let updatedFailures = props.failures;
        updatedFailures.map((failure) => {
          if (failure.id === props.failureid) {
            const index = failure.upvoters.indexOf(props.upvoters);
            failure.upvoters.splice(index, 1);
          }
        });
        return props.setFailures([...updatedFailures]);
      });
    }
  }
  function changeFailureState(newState) {
    put(
      '/failures/state?failureId=' + props.failureid + '&newState=' + newState
    ).then(() => {
      let updatedFailures = props.failures;
      updatedFailures.map((failure) => {
        if (failure.id === props.failureid) {
          failure.state = newState;
        }
      });
      return props.setFailures([...updatedFailures]);
    });
  }

  return props.role === 'STUDENT' || props.role === 'TEACHER' ? (
    <Button onClick={changeUpvote}>
      <i className='fas fa-thumbs-up'></i>
    </Button>
  ) : (
    <Dropdown onSelect={changeFailureState}>
      <Dropdown.Toggle id='dropdown-basic'>Résoudre</Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item eventKey='ONGOING'>{failureState.ONGOING}</Dropdown.Item>
        <Dropdown.Item eventKey='CLOSED'>{failureState.CLOSED}</Dropdown.Item>
        <Dropdown.Item eventKey='UN_RESOLVED'>
          {failureState.UN_RESOLVED}
        </Dropdown.Item>
        <Dropdown.Item eventKey='USELESS'>{failureState.USELESS}</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

function FailureStateDisplay(props) {
  switch (props.state) {
    case 'UN_RESOLVED':
      return (
        <div className='unresolved'>
          <i className='fas fa-exclamation-triangle'></i> {failureState.UN_RESOLVED}
        </div>
      );
    case 'ONGOING':
      return (
        <div className='ongoing'>
          <i className='fas fa-tools'></i> {failureState.ONGOING}
        </div>
      );
    case 'CLOSED':
      return (
        <div className='closed'>
          <i className='fas fa-hard-hat'></i> {failureState.CLOSED}
        </div>
      );
    case 'USELESS':
      return (
        <div className='useless'>
          <i className='fas fa-frown-open'></i> {failureState.USELESS}
        </div>
      );
  }
}

export function FailureDisplay(props) {
  console.log(props.upvoters,'0');
  const { state } = useContext(UserContext);
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
                <Col md='auto'>
                  <Row>
                    <strong>Etat : </strong>
                  </Row>
                  <Row>
                    <FailureStateDisplay state={props.state} />
                  </Row>
                </Col>
                <Col>
                  <Accordion.Toggle as={Button} variant='link' eventKey='0'>
                    Description
                  </Accordion.Toggle>
                </Col>
                <Col>
                  <RoomActionButton
                    role={state.role}
                    userId={state.id}
                    failureid={props.id}
                    upvoters={props.upvoters}
                    setFailures={props.setFailures}
                    currentFailure={props.currentFailure}
                    failures={props.failures}
                  />
                  + {props.upvoters && props.upvoters.length}
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
