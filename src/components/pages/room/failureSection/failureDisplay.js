import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import './failureDisplay.scss';

export function FailureDisplay(props) {
  return (
    <div>
      <Accordion defaultActiveKey='1'>
        <Card>
          <Card.Header>
            Appareil : {props.device} Type de panne : {props.type} Date :{' '}
            {props.date} Etat : {props.state}
            <Accordion.Toggle as={Button} variant='link' eventKey='0'>
              Description
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey='0'>
            <Card.Body>{props.description}</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
}
