import React from 'react';
import { AppNav } from './components/layout/navbar/AppNav';
import { appRoutes } from './components/routes/AppRoutes';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Route, Router, Redirect } from 'react-router-dom';
import history from './components/routes/history';
import './App.scss';

function App() {
  return (
    <div>
      <Router history={history}>
        <Redirect from='/' to='/home' />
        <Route path={['/about', '/home', '/links']}>
          <AppNav />
          <Container className='flex-column justify-content-center' fluid>
            {appRoutes.map(({ path, Component }) => (
              <Route key={path} exact path={path}>
                <Row>
                  <Col />
                  <Col sm={10} md={10} lg={8}>
                    <div className='app-pages_container'>
                      <Component />
                    </div>
                  </Col>
                  <Col />
                </Row>
              </Route>
            ))}
          </Container>
        </Route>
      </Router>
    </div>
  );
}

export default App;
