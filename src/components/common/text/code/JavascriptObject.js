import React from 'react';
import './JavascriptObject.scss';

export const Brackets = (props) => {
  return (
    <div className='bracket'>
      <p className='bracket'>{'{'}</p>
      <div className='bracket-content'>
        {props.children.map((child, index) => (
          <div className='bracket-content_item'>
            {child}
            {index === props.children.length - 1 ? '' : ','}
          </div>
        ))}
      </div>
      <p className='bracket'>{'}'}</p>
    </div>
  );
};

export const Item = (props) => (
  <>
    <span className='item-key'>{props.itemKey}</span> :
    <span className='item-value'> {props.itemValue ? props.itemValue : "' '"} </span>
  </>
);
