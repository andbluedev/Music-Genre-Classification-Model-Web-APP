import React from 'react';
import './Basics.scss';

export const Title = (props) => (
  <div className='title-wrapper'>
    <h1>{props.children}</h1> <hr />
  </div>
);

export const SubTitle = (props) => (
  <div className='subtitle-wrapper'>
    <h2>{props.children}</h2>
  </div>
);

export const FooterText = (props) => (
  <div className='footer-wrapper'>
    <p>{props.children}</p>
  </div>
);
