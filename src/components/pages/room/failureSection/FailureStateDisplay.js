import React from 'react';
import { failureState } from '../../../../data/api';

export function FailureStateDisplay(props) {
  switch (props.state) {
    case 'UN_RESOLVED':
      return (
        <div className='unresolved'>
          <i className='fas fa-exclamation-triangle'></i> {failureState.UN_RESOLVED}
        </div>
      );
    case 'ONGOING':
      return (
        <div className='ongoing'>
          <i className='fas fa-tools'></i> {failureState.ONGOING}
        </div>
      );
    case 'CLOSED':
      return (
        <div className='closed'>
          <i className='fas fa-hard-hat'></i> {failureState.CLOSED}
        </div>
      );
    case 'USELESS':
      return (
        <div className='useless'>
          <i className='fas fa-frown-open'></i> {failureState.USELESS}
        </div>
      );
  }
}
