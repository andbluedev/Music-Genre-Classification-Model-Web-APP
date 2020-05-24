import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Accordion from 'react-bootstrap/Accordion';
import './FailureDisplay.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { UserContext } from '../../../../data/auth/UserContext';
import { FailureStateDisplay } from './FailureStateDisplay';
import { RoomActionButton } from './RoomActionButton';

export function FailureDisplay(props) {
  const { state } = useContext(UserContext);
  let currentTime = new Date(props.date);
  return (
    <div>
      <Accordion defaultActiveKey='1'>
        <Card>
          <Card.Header>
            <Container>
              <Row>
                <Col xs={12} md={2}>
                  <Row>
                    <strong>Appareil :</strong>
                  </Row>
                  <Row>{props.device.name}</Row>
                </Col>
                <Col xs={12} md={2}>
                  <Row>
                    <strong>Titre :</strong>
                  </Row>
                  <Row>{props.failureTitle}</Row>
                </Col>
                <Col xs={6} md={2}>
                  <Row>
                    <strong>Date :</strong>
                  </Row>
                  <Row>{currentTime.toLocaleDateString()} </Row>
                </Col>
                <Col xs={6} md={2}>
                  <Row>
                    <strong>Etat : </strong>
                  </Row>
                  <Row>
                    <FailureStateDisplay state={props.failureState} />
                  </Row>
                </Col>
                <Col xs={6} md={2} className='centered-btn'>
                  <Accordion.Toggle as={Button} variant='link' eventKey='0'>
                    Description
                  </Accordion.Toggle>
                </Col>
                <Col xs={6} md={2} className='centered-btn'>
                  <RoomActionButton
                    role={state.role}
                    userId={state.id}
                    failureid={props.id}
                    upvoters={props.upvoters}
                    setFailures={props.setFailures}
                    failures={props.failures}
                  />
                  <Badge pill variant='secondary' className='upvote-nb-badge'>
                    +{props.upvoters && props.upvoters.length}
                  </Badge>
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
