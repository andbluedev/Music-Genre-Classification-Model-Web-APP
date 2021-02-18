import React from 'react';

import { Title, SubTitle } from '../../common/text/Basics';

export function LinksPage() {
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <Title>Project Links</Title>
        </div>
        <div className='row'>
          <div className='col'>
            <SubTitle>Jupyter Notebooks</SubTitle>
            <p>The repository covers the following aspects in various notebooks:</p>

            <ul>
              <li>Extracting features from mp3 song file</li>
              <li>Analyzing extracted features</li>
              <li>Feature Engineering</li>
              <li>Applying Several Classifiers and selecting optimal Classifier</li>
            </ul>
            <p>
              link:{' '}
              <a href='https://github.com/andbluedev/Music-Genre-Classification-Notebooks'>
                https://github.com/andbluedev/Music-Genre-Classification-Notebooks
              </a>
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi facere
              quasi consectetur blanditiis odio rerum beatae laboriosam ad quod
              cumque vitae similique, quis asperiores placeat sit, voluptates vero
              soluta ab?
            </p>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <SubTitle>Backend - REST API</SubTitle>
            <p>
              Python 3 REST web application using Fast API, librosa and serving a
              tensorflow model.
            </p>
            <p>
              link:{' '}
              <a href='https://github.com/andbluedev/Music-Genre-Classification-Model-REST-API'>
                https://github.com/andbluedev/Music-Genre-Classification-Model-REST-API
              </a>
            </p>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <SubTitle>Frontend - Web App</SubTitle>
            <p>
              React.js application using axios and sass based on the Read. The goal
              of the webapplication is to have an interactive demo of the best model
              we've produced during this Data Science Project.
            </p>
            <p>
              link:{' '}
              <a href='https://github.com/andbluedev/Music-Genre-Classification-Model-Web-APP'>
                https://github.com/andbluedev/Music-Genre-Classification-Model-Web-APP
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
