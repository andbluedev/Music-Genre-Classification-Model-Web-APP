import React from 'react';
import './WarningText.scss';

export const WarningText = (props) => {
  let text = '';
  switch (props.status) {
    case 'success':
      text = props.successText ? props.successText : 'Sucess!';
      break;
    case 'error':
      text = props.errorText ? props.errorText : 'Error...';
      break;
    default:
      text = props.defaultText ? props.defaultText : '';
  }
  return (
    <div className='warning-text'>
      <span className={props.status ? props.status : ''}>{text}</span>
    </div>
  );
};
