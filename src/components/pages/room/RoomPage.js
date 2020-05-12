import React, { useEffect, useState } from 'react';
import { FailureDisplay } from './failureSection/failureDisplay';
import './RoomPage.scss';
import { SubTitle, Title } from '../../common/text/Basics';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { get } from '../../../data/api';

export function RoomPage() {
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
      <SubTitle> Batiment : {building.name}</SubTitle>
      <Container className='room-wrapper'>
        {failures.map((failure) => (
          <FailureDisplay
            type={failure.title}
            device={failure.deviceCategory}
            date={failure.createdAt}
            description={failure.description}
            state={failure.state}
            upvote='+ 12'
          />
        ))}
      </Container>
    </div>
  );
}
