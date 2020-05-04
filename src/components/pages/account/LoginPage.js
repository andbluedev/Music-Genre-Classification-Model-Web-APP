import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useLogin } from '../../../data/auth/useLogin';
import './LoginPage.scss';
import { RoomfixLogo } from '../../common/logo/RoomfixLogo';
import Alert from 'react-bootstrap/Alert';

export function LoginPage() {
  const {
    submitLogin,
    username,
    password,
    setUsername,
    error,
    setError,
    setPassword
  } = useLogin();

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
        <Col sm='12' md='6' lg='4' xl='3'>
          <div className='login-form'>
            <form
              className='login100-form'
              onSubmit={(e) => {
                e.preventDefault();
                return submitLogin();
              }}
            >
              <div className='wrap-input100 '>
                <input
                  className='input100'
                  type='email'
                  placeholder='Entrez votre mail ISEP.'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <span className='focus-input100'></span>
                <span className='symbol-input100'>
                  <i className='fa fa-envelope' aria-hidden='true'></i>
                </span>
              </div>

              <div className='wrap-input100'>
                <input
                  className='input100'
                  type='password'
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  name='pass'
                  placeholder='Password'
                />
                <span className='focus-input100'></span>
                <span className='symbol-input100'>
                  <i className='fa fa-lock' aria-hidden='true'></i>
                </span>
              </div>

              {/* ERROR MESSAGE*/}
              <div className='login-error_wrapper'>
                {error && (
                  <Alert
                    variant='danger'
                    className='login-error_alert'
                    dismissible
                    onClose={() => setError('')}
                  >
                    <p>{error}</p>
                  </Alert>
                )}
              </div>

              {/* SUBMIT BUTTON */}
              <div className='button-container'>
                <div id='button-container' className='login-button'>
                  <button className='learn-more' type='submit'>
                    <span className='circle' aria-hidden='true'>
                      <span className='icon arrow'></span>
                    </span>
                    <span className='button-text'>Se Connecter</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
