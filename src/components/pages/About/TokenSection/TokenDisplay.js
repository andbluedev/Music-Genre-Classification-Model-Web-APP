import React from 'react';
import './TokenDisplay.scss';
import { getTokenValue } from '../../../../data/auth';

export function TokenDisplay() {
  const currentToken = getTokenValue();
  return (
    <div className='token-display-wrapper'>
      <span className='token-display_text'>Token : </span>
      {!currentToken ? (
        <span className='token-display-value_unset'>Not Set Yet</span>
      ) : (
        <span className='token-display-value_set'>{currentToken}</span>
      )}
    </div>
  );
}
