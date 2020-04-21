import logoSvg from '../../../react-logo.svg';
import React from 'react';

export const RoomfixLogo = (props) => (
  <img src={logoSvg} alt='react-logo' className={props.className} />
);
