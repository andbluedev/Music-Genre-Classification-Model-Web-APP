import React from 'react';
import './AppNav.scss';
import { NavLink } from 'react-router-dom';
import { ReactLogo } from '../../common/logo';

const active = { textDecoration: 'underline' };

export function AppNav() {
  return (
    <nav className='nav-wrapper'>
      <div className='nav-side_left'>
        <ReactLogo className='nav-logo' />
        <ul className='nav-side_left'>
          <li>
            <NavLink className='nav-link' to='/' exact activeStyle={active}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className='nav-link'
              to='/about'
              activeClassName='active'
              activeStyle={active}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className='nav-link'
              to='/tp'
              activeClassName='active'
              activeStyle={active}
            >
              Tp React
            </NavLink>
          </li>
        </ul>
      </div>

      <div className='nav-side_right'>No user atm</div>
    </nav>
  );
}
