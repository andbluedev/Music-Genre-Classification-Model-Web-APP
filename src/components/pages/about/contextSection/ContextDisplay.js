import React, { useContext } from 'react';
import './ContextDisplay.scss';
import UserContext from '../../../../data/context/UserContext';
import { Brackets, Item } from '../../../common/text/code/JavascriptObject';

export function ContextDisplay() {
  const { state } = useContext(UserContext);
  const userContextArray = Object.entries(state);
  return (
    <div className='env-wrapper'>
      <Brackets>
        {userContextArray.map(([key, value]) => (
          <Item itemKey={key} itemValue={value} />
        ))}
      </Brackets>
    </div>
  );
}
