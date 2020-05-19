import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import React, { useEffect, useState } from 'react';
import { get } from '../../../../data/api';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export function FailureTypeManagement({ roomId }) {
  const [failureTypes, setFailureTypes] = useState([]);

  useEffect(() => {
    get(`/rooms/${roomId}/device/categories`).then((result) => {
      setFailureTypes(result.payload);
    });
  }, []);

  return (
    <Row>
      <Col sm='12' md='8'>
        {failureTypes.length > 0 ? (
          failureTypes.map((failureType) => (
            <Card>
              <Card.Body>{failureType.name}</Card.Body>
            </Card>
          ))
        ) : (
          <p>Aucun type de panne associé à cette salle</p>
        )}
      </Col>
      <Col sm='12' md='4'>
        <Button> Ajouter</Button>
      </Col>
    </Row>
  );
}
