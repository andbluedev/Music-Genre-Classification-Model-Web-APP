import React from 'react';
import './TexInput.scss';

export const TextInput = (props) => (
  <input className='text-input' type='text' onKeyUp={props.onKeyUp} {...props} />
);
