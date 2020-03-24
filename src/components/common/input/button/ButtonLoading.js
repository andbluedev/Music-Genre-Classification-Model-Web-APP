import React from 'react';
import { SpinningCircle } from '../../spinner';
import './ButtonLoading.scss';

export const ButtonLoading = (props) => {
  return (
    <button className='button-loading' {...props}>
      {props.loading ? <SpinningCircle /> : props.children}
    </button>
  );
};
