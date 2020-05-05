import React from 'react';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import { useLogin } from '../../../../data/auth/useLogin';

export function RegisterForm({ switchForm }) {
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
    <Col sm='12' md='6' lg='4' xl='3'>
      <div className='login-form'>
        <form
          className='auth100-form'
          autoComplete={false}
          onSubmit={(e) => {
            e.preventDefault();
            return submitLogin();
          }}
        >
          <input type='hidden' value='something' />
          <div className='wrap-input100 '>
            <input
              autoComplete={false}
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
              autoComplete='new-password'
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

          <div className='wrap-input100'>
            <input
              autoComplete='new-password'
              disabled
              className='input100'
              type='password'
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              name='confirm-pass'
              placeholder='Confirmer mot-de-passe'
            />
            <span className='focus-input100'></span>
            <span className='symbol-input100'>
              <i className='fa fa-lock' aria-hidden='true'></i>
            </span>
          </div>

          {/* ERROR MESSAGE*/}
          <div className='auth-error_wrapper'>
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

          {/* Need Goto login */}
          <div className='auth-link'>
            <p onClick={() => switchForm()}>
              <span>J'ai déjà un compte</span>
            </p>
          </div>

          {/* SUBMIT BUTTON */}
          <div className='button-container'>
            <div id='button-container' className='login-button'>
              <button className='learn-more' type='submit'>
                <span className='circle' aria-hidden='true'>
                  <span className='icon arrow'></span>
                </span>
                <span className='button-text'>Créer compte</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </Col>
  );
}
