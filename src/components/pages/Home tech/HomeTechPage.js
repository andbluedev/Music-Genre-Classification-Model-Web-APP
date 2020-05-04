import React from 'react';
import './HomeTechPage.scss';
import { Title } from '../../common/text/Basics';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function DeviceType({ name }) {
  return <div> {name}</div>;
}

export function HomeTechPage() {
  return (
    <div>
      <Container fluid>
        <Row fluid>
          <Title>Liste des types d'appareil</Title>
          <DeviceType name='1' />
        </Row>
      </Container>
    </div>
  );
}
