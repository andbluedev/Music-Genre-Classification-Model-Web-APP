import React, { useContext, useEffect, useState } from 'react';
import './AppNav.scss';
import { NavLink } from 'react-router-dom';
import { RoomfixLogo } from '../../common/logo/RoomfixLogo';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { UserContext } from '../../../data/auth/UserContext';
import { UserActionType } from '../../../data/auth/reducer';
import { get } from '../../../data/api';
import { Button } from 'react-bootstrap';
import { FormReportBreakdown } from './FormReportBreakdown/FormReportBreakdown';
import { FormContextProvider } from './formContext/FormContext';

const active = { textDecoration: 'none' };

export function AppNav() {
  const { dispatch } = useContext(UserContext);
  const { state } = useContext(UserContext);
  const [showFormReportBreakdown, setShowFormReportBreakdown] = useState(false);
  const [buildings, setBuildings] = useState([]);

  useEffect(() => {
    get('/buildings').then((result) => {
      setBuildings(result.payload);
    });
  }, []);

  const handleButtonClick = () => {
    setShowFormReportBreakdown(true);
  };

  return (
    <Navbar collapseOnSelect expand='lg' variant='light' bg='light'>
      <Navbar.Brand href='/home'>
        <RoomfixLogo className='nav-logo' />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <NavLink className='nav-link' to='/home' exact activeStyle={active}>
            Accueil
          </NavLink>
          <NavDropdown title='Batiments' id='basic-nav-dropdown'>
            {buildings.length > 0 &&
              buildings.map((building) => (
                <NavDropdown.Item href={'/building/' + building.id}>
                  {building.name}
                </NavDropdown.Item>
              ))}
          </NavDropdown>
          {state.role === 'ADMIN' && (
            <NavLink className='nav-link' to='/admin' exact activeStyle={active}>
              Administration
            </NavLink>
          )}
          <NavDropdown
            title={
              <span>
                <i className='fas fa-user'></i> {state.username}
              </span>
            }
            id='basic-nav-dropdown'
          >
            <NavDropdown.Item href='/'>
              <span onClick={() => dispatch({ type: UserActionType.AUTH_FAILURE })}>
                Se déconnecter
              </span>
            </NavDropdown.Item>
            <NavDropdown.Item href='/user'>Mon Profil</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Button
            onClick={() => {
              handleButtonClick();
            }}
            variant='outline-primary'
          >
            Signaler une panne
          </Button>
          <FormContextProvider>
            <FormReportBreakdown
              show={showFormReportBreakdown}
              onHide={() => {
                setShowFormReportBreakdown(false);
              }}
            />
          </FormContextProvider>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
