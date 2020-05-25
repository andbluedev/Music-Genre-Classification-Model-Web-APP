import React, { useReducer } from 'react';
import { AppNav } from './components/layout/navbar/AppNav';
import { AppRoutes } from './components/routes/AppRoutes';
import { UserReducer } from './data/auth/reducer';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { UserContext, emptyUserContextState } from './data/auth/UserContext';
import { Route, Router } from 'react-router-dom';
import history from './components/routes/history';
import { AuthRoutes } from './components/routes/AuthRoutes';
import { AuthWrapper } from './components/layout/auth/AuthWrapper';
import './App.scss';

function App() {
  const [state, dispatch] = useReducer(UserReducer, emptyUserContextState);

  return (
    <div>
      <UserContext.Provider value={{ state, dispatch }}>
        <Router history={history}>
          <AuthWrapper>
            <Route path={['/login', '/']}>
              <AuthRoutes />
            </Route>
            <Route
              path={[
                '/about',
                '/home',
                '/tp',
                '/building/:id',
                '/room/:id',
                '/user',
                '/admin'
              ]}
            >
              <AppNav />
              <Container className='flex-column justify-content-center' fluid>
                <Row>
                  <Col />
                  <Col sm={10} md={10} lg={8}>
                    <div className='app-pages_container'>
                      <AppRoutes />
                    </div>
                  </Col>
                  <Col />
                </Row>
              </Container>
            </Route>
          </AuthWrapper>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
