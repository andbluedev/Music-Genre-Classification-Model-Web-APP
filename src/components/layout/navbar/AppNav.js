import React from 'react';
import './AppNav.scss';
import { NavLink } from 'react-router-dom';
import { RoomfixLogo } from '../../common/logo/RoomfixLogo';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

const active = { textDecoration: 'none' };

export function AppNav() {
  return (
    <Navbar className='nav-wrapper' expand='md'>
      <Navbar.Brand>
        <RoomfixLogo className='nav-logo' />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <NavLink className='nav-link' to='/' exact activeStyle={active}>
            Accueil
          </NavLink>
          <NavDropdown title='Batiments' id='basic-nav-dropdown'>
            <NavDropdown.Item href='/'>NDC</NavDropdown.Item>
            <NavDropdown.Item href='/'>NDL</NavDropdown.Item>
          </NavDropdown>
          <NavLink
            className='nav-link'
            to='/'
            activeClassName='active'
            activeStyle={active}
          >
            Se déconnecter
          </NavLink>
        </Nav>
        <Nav>
          <NavLink className='btn-secondary' to='/' exact activeStyle={active}>
            Déclarer une panne
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
