import React, { useState } from 'react';
import logo from '../../../img/ClassifyLogo.png';
import { Title, SubTitle } from '../../common/text/Basics';
import { CSSTransition } from 'react-transition-group';
import { UploadAudioAndPredict } from './UploadAudioAndPredict';
import './HomePage.scss';

export function HomePage() {
  const [active, setActive] = useState(false);

  return (
    <div className='container'>
      <Title>Classify</Title>
      <div className='disk-area-wrapper row justify-content-start'>
        <div className='classify-simple-logo col-sm-12 col-md-6'>
          <img
            src={logo}
            alt='classify-simple-logo'
            onClick={() => setActive(true)}
          />
        </div>
        <div className='file-selection-wrapper col-sm-12 col-md-6'>
          <SubTitle>
            Find which genre your track belongs to by clicking on the CD...
          </SubTitle>
          <CSSTransition in={active} timeout={350} classNames='fade' unmountOnExit>
            <UploadAudioAndPredict />
          </CSSTransition>
        </div>
      </div>
    </div>
  );
}
