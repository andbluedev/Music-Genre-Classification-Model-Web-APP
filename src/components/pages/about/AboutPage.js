import React from 'react';

import { Link } from 'react-router-dom';

import { Title, SubTitle } from '../../common/text/Basics';
import FeatureExtractionImage from '../../../img/FeatureExtractionCSV_V2.jpg';
import OverallWorkflowImage from '../../../img/OverallWorkflow.jpg';

export function AboutPage() {
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <Title>About this Project</Title>
        </div>
        <div className='row'>
          <span>
            A project by{' '}
            <a href='https://www.linkedin.com/in/andrew-pouret'> Andrew POURET </a>{' '}
            and
            <a href='https://www.linkedin.com/in/matthieu-jacquand-0b0ba6181/'>
              {' '}
              Matthieu JACQUAND.
            </a>{' '}
            Classify's project source code and associated jupyter notebooks can be found <Link to='/links'> here. </Link>
          </span>
        </div>
        <div className='row'>
          <SubTitle>Context</SubTitle>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi facere
          quasi consectetur blanditiis odio rerum beatae laboriosam ad quod cumque
          vitae similique, quis asperiores placeat sit, voluptates vero soluta ab?
          <br />
          Project Goal
          <img src={OverallWorkflowImage} class="img-fluid" alt="overall_workflow" />
        </div>
        <div className='row'>
          <SubTitle>Data Science and Technical Implementation</SubTitle>

          <img src={FeatureExtractionImage} class="img-fluid" alt="feature_extaction_csv_v2" />


          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolore
          adipisci suscipit labore incidunt, omnis corrupti hic est dolorum cum nemo
          ipsam provident asperiores sequi tempore quis numquam rerum exercitationem.

        </div>
      </div>
    </div>
  );
}
