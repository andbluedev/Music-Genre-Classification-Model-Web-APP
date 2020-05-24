import React, { useContext } from 'react';
import { UserContext } from '../../../../data/auth/UserContext';
import { Title } from '../../../common/text/Basics';
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';

export function UserPage() {
  const { state } = useContext(UserContext);
  let username = state.username;
  let [firstAndLastname, firstname, lastname] = '';
  if (username) {
    firstAndLastname = username.split('@')[0];
    if (firstAndLastname.includes('.')) {
      firstAndLastname = firstAndLastname.split('.');
      firstname = firstAndLastname[0];
      lastname = firstAndLastname[1];
    } else {
      firstname = firstAndLastname;
      lastname = firstAndLastname;
    }
  }
  return (
    <div>
      <Title> Mon Profil </Title>
      <Container>
        <Col>
          <Row>
            <Col>Adresse électronique :</Col>
            <Col>{state.username}</Col>
          </Row>
          <Row>
            <Col>Prénom :</Col>
            <Col>{firstname}</Col>
          </Row>
          <Row>
            <Col>Nom :</Col>
            <Col>{lastname}</Col>
          </Row>
          <Row>
            <Col>Statut :</Col>
            <Col>{state.role}</Col>
          </Row>
        </Col>
      </Container>
    </div>
  );
}
