import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './AuthPage.scss';
import { RoomfixLogo } from '../../common/logo/RoomfixLogo';
import { LoginForm } from './login/LoginForm';

export function AuthPage() {
  return (
    <Container fluid className='justify-content-md-center'>
      <Row>
        <Col sm={12} className='d-flex justify-content-center'>
          <RoomfixLogo className='login-logo_element' />
        </Col>
      </Row>
      <Row>
        <Col sm={12} className='d-flex justify-content-center'>
          <h5 className='login-title_element'>Identifiez-vous</h5>
        </Col>
      </Row>
      <Row fluid noGutters className='d-flex justify-content-center'>
        <LoginForm />
      </Row>
    </Container>
  );
}
