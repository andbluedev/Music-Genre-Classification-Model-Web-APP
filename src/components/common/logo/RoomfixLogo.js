import React from 'react';
import './RoomfixLogo.scss';
import logoSvg from '../../../img/roomfix_light_325x325.png';

export const RoomfixLogo = (props) => (
  <section className='logo-wrapper'>
    <img src={logoSvg} alt='react-logo' className={props.className} />
  </section>
);
