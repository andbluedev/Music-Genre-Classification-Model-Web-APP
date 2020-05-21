import React, { useEffect, useState } from 'react';
import { FailureDisplay } from './failureSection/FailureDisplay';
import './TechPage.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { SubTitle, Title } from '../../common/text/Basics';
import { useParams } from 'react-router-dom';
import { get } from '../../../data/api';

export function TechPage() {
  let { id } = useParams();
  const [room, setRoom] = useState({});
  const [failures, setFailures] = useState([]);
  const [building, setBuilding] = useState([]);

  useEffect(() => {
    get('/rooms/' + id).then((result) => {
      setRoom(result.payload);
      setFailures(result.payload.failures);
      setBuilding(result.payload.building);
    });
  }, []);

  return (
      <div>
        <Title> {room.number} </Title>
        <Container className='room-wrapper'>
          {failures.map((failure) => (
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

