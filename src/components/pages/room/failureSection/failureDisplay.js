import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import './failureDisplay.scss';
import { get } from '../../../../data/api';

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
    LastElement = () => <Button>UpVote</Button>;
  } else if (role == 'ADMIN') {
    LastElement = () => <Button>Résoudre</Button>;
  }

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
            <LastElement />
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
