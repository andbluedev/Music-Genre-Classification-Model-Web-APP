import React, { useEffect, useState } from 'react';
import { FailureDisplay } from './failureSection/FailureDisplay';
import './TechPage.scss';
import Container from 'react-bootstrap/Container';
import { Title } from '../../common/text/Basics';
import { get } from '../../../data/api';
import {DeviceDisplay} from "./deviceSection/DeviceDisplay";

export function TechPage() {
  const [failures, setFailures] = useState([]);
  const [categories, setCategories] = useState([]);


  useEffect(() => {
    get('/failures').then((result) => {
      setFailures(result.payload);
    });
  get('/devices/categories').then((result) => {
      setCategories(result.payload);
  });
  }, []);

  console.log(failures);

  return (
      <div>
      <Title> Liste des types d'appareil </Title>
          <Container className='device'>
              {categories &&
                  categories.map((category)=> (
                  <DeviceDisplay
                      name={category.name}
                  />
                  ))}
          </Container>

      <Title> Liste des pannes </Title>
        <Container className='room-wrapper'>
         {failures &&
             failures.map((failure) => (
              <FailureDisplay
                  id={failure.id}
                  type={failure.title}
                  device={failure.deviceCategory}
                  date={failure.createdAt}
                  description={failure.description}
                  state={failure.state}
                  upvoters={failure.upvoters}
              />
          ))}
      </Container>
      </div>
  );

}

