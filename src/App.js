import React from 'react';
import './App.scss';
import { AppRouter } from './components/routes/AppRouter';
import { AppNav } from './components/layout/navbar/AppNav';
import { AppRoutes } from './components/routes';
import Fade from 'react-bootstrap/Fade';
import UserContext, {
  emptyUser as initialUser,
  reducer
} from './data/context/UserContext';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  const [state, dispatch] = React.useReducer(reducer, initialUser);
  return (
    <AppRouter>
      <UserContext.Provider value={{ state, dispatch }}>
        <AppNav />
        <Container className='row flex-column justify-content-center ' fluid>
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
      </UserContext.Provider>
    </AppRouter>
  );
}

export default App;
