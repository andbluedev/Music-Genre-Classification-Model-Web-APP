import React from 'react';

import { FooterText } from '../../common/text/Basics';
import './Footer.scss';

export const Footer = () => (
  <div className='footer'>
    <FooterText>
      A project by
      <a href='https://www.linkedin.com/in/andrew-pouret'>
        {' '}
        Andrew POURET{' '}
      </a> and{' '}
      <a href='https://www.linkedin.com/in/matthieu-jacquand-0b0ba6181/'>
        Matthieu JACQUAND
      </a>
    </FooterText>
  </div>
);
