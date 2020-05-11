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
import Col from 'react-bootstrap/Col';
const active = { textDecoration: 'none' };

export function AppNav() {
  const { dispatch } = useContext(UserContext);

  const [buildings, setBuildings] = useState([]);

  useEffect(() => {
    get('/buildings').then((result) => {
      setBuildings(result.payload);
    });
  }, []);

  const allBuildingsDropdowns = [];
  buildings.forEach((building) =>
    allBuildingsDropdowns.push(
      <NavDropdown.Item href={'/building/' + building.id}>
        {building.name}
      </NavDropdown.Item>
    )
  );

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
            {allBuildingsDropdowns}
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
