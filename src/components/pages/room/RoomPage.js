import React, { useEffect, useState } from 'react';
import { FailureDisplay } from './failureSection/failureDisplay';
import './RoomPage.scss';
import { SubTitle, Title } from '../../common/text/Basics';
import Container from 'react-bootstrap/Container';
import { get } from '../../../data/api';

export function RoomPage() {
  const [room, setRoom] = useState({});
  const [failure, setFailure] = useState([]);

  useEffect(() => {
    get('/rooms/1').then((result) => {
      setRoom(result.payload);
      setFailure(result.payload.failures);
    });
  }, []);

  const failuredisp = [];
  for (var i = 0; i < failure.length; i++) {
    failuredisp.push(
      <FailureDisplay
        type={failure[i].title}
        device={failure[i].deviceCategory}
        date={failure[i].createdAt}
        description={failure[i].description}
        state={failure[i].state}
      />
    );
  }
  return (
    <div>
      <Title> {room.number} </Title>
      <SubTitle> Batiment : {room.id}</SubTitle>
      <Container className='room-wrapper'>
        {failuredisp}
        <br />
      </Container>
    </div>
  );
}
