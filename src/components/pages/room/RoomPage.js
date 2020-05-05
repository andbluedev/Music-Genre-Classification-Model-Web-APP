import React, { useEffect, useState } from 'react';
import { FailureDisplay } from './failureSection/failureDisplay';
import './RoomPage.scss';
import { SubTitle, Title } from '../../common/text/Basics';
import Container from 'react-bootstrap/Container';
import { get } from '../../../data/api';

export function RoomPage() {
  const [room, setRoom] = useState({});
  useEffect(() => {
    get('/rooms/1').then((result) => {
      console.log(result.payload);
      setRoom(result.payload);
    });
  }, []);

  return (
    <div>
      <Title> N° de la salle </Title>
      <SubTitle> Batiment : (Batiment) </SubTitle>
      <Container className='room-wrapper'>
        <FailureDisplay />
        <br />
        <FailureDisplay />
      </Container>
    </div>
  );
}
