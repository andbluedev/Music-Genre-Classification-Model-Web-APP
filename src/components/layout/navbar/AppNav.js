import React, { useContext } from 'react';
import './AppNav.scss';
import { NavLink } from 'react-router-dom';
import { RoomfixLogo } from '../../common/logo/RoomfixLogo';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { UserContext } from '../../../data/auth/UserContext';
import { UserActionType } from '../../../data/auth/reducer';
const active = { textDecoration: 'none' };

export function AppNav() {
  const { dispatch } = useContext(UserContext);

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
            <NavDropdown.Item href='/'>NDC</NavDropdown.Item>
            <NavDropdown.Item href='/'>NDL</NavDropdown.Item>
          </NavDropdown>
          <NavLink className='nav-link' to='/' exact>
            <span onClick={() => dispatch({ type: UserActionType.AUTH_FAILURE })}>
              Se déconnecter
            </span>
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
