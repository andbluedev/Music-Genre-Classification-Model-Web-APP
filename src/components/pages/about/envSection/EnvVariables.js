import React from 'react';
import './EnvVariables.scss';

export const EnvVariables = (props) => {
  const envArray = Object.entries(process.env);

  return (
    <div className='env-wrapper'>
      {envArray.map(([key, value]) => {
        return (
          <div className='env-item'>
            <span className='env-item_key'>{key}</span> ={' '}
            <span className='env-item_value'>{value}</span>
          </div>
        );
      })}
    </div>
  );
};
