import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useLogin } from '../../../data/auth/useLogin';

export function LoginPage() {
  const {
    isFormValid,
    submitLogin,
    username,
    password,
    setUsername,
    error,
    setPassword
  } = useLogin();

  return (
    <Container fluid>
      <Row fluid>
        {/* A ROW IS 12  sm is small width, md: is long width*/}
        <Col sm='12' md='4'>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              return submitLogin();
            }}
          >
            <Form role='form'>
              <Form.Group controlId='formBasicEmail'>
                <Form.Label>Addresse Mail</Form.Label>
                <Form.Control
                  type='email'
                  placeholder='Enter email'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <Form.Text className='text-muted'>
                  L'addresse mail doit être de l'isep.
                </Form.Text>
              </Form.Group>
              <Form.Group controlId='formBasicPassword'>
                <Form.Label>Mot-de-passe</Form.Label>
                <Form.Control
                  type='password'
                  placeholder='Mot-de-passe'
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </Form.Group>

              <Button variant='primary' type='submit'>
                Se Connecter
              </Button>
            </Form>
          </form>
        </Col>
      </Row>
    </Container>
  );
}
