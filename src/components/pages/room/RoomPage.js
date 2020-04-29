import React from 'react';
import { FailureDisplay } from './failureSection/failureDisplay';
import './RoomPage.scss';
import { SubTitle, Title } from '../../common/text/Basics';
import Container from 'react-bootstrap/Container';

export function RoomPage() {
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
