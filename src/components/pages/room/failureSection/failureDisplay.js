import React, { useEffect, useState } from 'react';
//import Card from 'react-bootstrap/Card';
//import Button from 'react-bootstrap/Button';
//import Accordion from 'react-bootstrap/Accordion';
import './failureDisplay.scss';
import { get } from '../../../../data/api';

export function FailureDisplay() {
  const [failure, setFailure] = useState([]);
  useEffect(() => {
    get('/rooms/1').then((result) => {
      console.log(result);
    });
  }, []);

  return (
    <div>
      <h1>prout</h1>
    </div>
  );
}
/*
 return (
   <div>
     <Accordion defaultActiveKey='1'>
       <Card>
         <Card.Header>
           Appareil : (Nom Appareil) Type de panne : (Type de panne) Date : (Date)
           Etat : (Etat)
           <Accordion.Toggle as={Button} variant='link' eventKey='0'>
             Description
           </Accordion.Toggle>
         </Card.Header>
         <Accordion.Collapse eventKey='0'>
           <Card.Body>Description</Card.Body>
         </Accordion.Collapse>
       </Card>
     </Accordion>
   </div>
 );
}
*/
