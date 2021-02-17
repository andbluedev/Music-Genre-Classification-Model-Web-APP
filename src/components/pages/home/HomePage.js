import React from 'react';
import logo from '../../../img/ClassifyLogo.png';
import './HomePage.scss';

export function HomePage() {
  return (<div>
    <h1>Classify</h1>
    <div className='home-logo'>
      <img src={logo} alt='classify-simple-logo' />
      <h2>Find which genre your track belongs to by clicking on the CD</h2>
    </div>
  </div>);
}
