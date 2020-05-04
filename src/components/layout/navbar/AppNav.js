import React, { useContext } from 'react';
import './AppNav.scss';
import { NavLink } from 'react-router-dom';
import { RoomfixLogo } from '../../common/logo/RoomfixLogo';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { UserContext } from '../../../data/auth/UserContext';
import { UserActionType } from '../../../data/auth/reducer';
import { Button } from 'react-bootstrap';
import { FormReportBreakdown } from './FormReportBreakdown/FormReportBreakdown';

const active = { textDecoration: 'none' };

export function AppNav() {
  const { dispatch } = useContext(UserContext);

  let showFormReportBreakdown = false;

  const handleButtonClick = () => {
    showFormReportBreakdown = !showFormReportBreakdown;
  };

  return (
    <Navbar className='nav-wrapper' expand='md'>
      <Navbar.Brand>
        <RoomfixLogo className='nav-logo' />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <NavLink className='nav-link' to='/' exact activeStyle={active}>
            <span onClick={() => dispatch({ type: UserActionType.AUTH_FAILURE })}>
              Logout
            </span>
          </NavLink>
          <NavLink
            className='nav-link'
            to='/about'
            activeClassName='active'
            activeStyle={active}
          >
            About
          </NavLink>
          <NavLink
            className='nav-link'
            to='/tp'
            activeClassName='active'
            activeStyle={active}
          >
            Tp React
          </NavLink>
          <Button onClick={handleButtonClick()} variant='outline-primary'>
            Signaler une panne
          </Button>
          <FormReportBreakdown show={showFormReportBreakdown} />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
