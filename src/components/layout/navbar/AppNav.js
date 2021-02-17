import React from 'react';
import './AppNav.scss';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const active = { textDecoration: 'none' };

export function AppNav() {
  return (
    <Navbar collapseOnSelect expand='lg' variant='light' bg='light'>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <NavLink className='nav-link' to='/home' exact activeStyle={active}>
            Home
          </NavLink>
          <NavLink className='nav-link' to='/about' exact activeStyle={active}>
            About
          </NavLink>
          <NavLink className='nav-link' to='/links' exact activeStyle={active}>
            Links
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
