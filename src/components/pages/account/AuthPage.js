import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './AuthPage.scss';
import { RoomfixLogo } from '../../common/logo/RoomfixLogo';
import { LoginForm } from './login/LoginForm';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { RegisterForm } from './register/RegisterForm';

export function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Container fluid className='justify-content-md-center'>
      <Row>
        <Col sm={12} className='d-flex justify-content-center'>
          <RoomfixLogo className='auth-logo_element' />
        </Col>
      </Row>
      <Row>
        <Col sm={12} className='d-flex justify-content-center'>
          <h5 className='auth-title_element'>
            {isLogin ? 'Se connecter' : 'Création de compte'}
          </h5>
        </Col>
      </Row>
      <Row fluid noGutters className='d-flex justify-content-center'>
        <SwitchTransition>
          <CSSTransition
            key={isLogin ? 'login' : 'register'}
            addEndListener={(node, done) =>
              node.addEventListener('transitionend', done, false)
            }
            classNames='fade'
          >
            {isLogin ? (
              <LoginForm key='login' switchForm={() => setIsLogin(false)} />
            ) : (
              <RegisterForm key='register' switchForm={() => setIsLogin(true)} />
            )}
          </CSSTransition>
        </SwitchTransition>
      </Row>

    </Container>
  );
}
