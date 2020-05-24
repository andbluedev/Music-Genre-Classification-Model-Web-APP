import React, { useContext } from 'react';
import { UserContext } from '../../../../data/auth/UserContext';
import { Title } from '../../../common/text/Basics';
import Container from 'react-bootstrap/Container';

export function UserPage() {
  const { state } = useContext(UserContext);
  return (
    <div>
      <Title> Mon Profil </Title>
      <Container>{state.username}</Container>
    </div>
  );
}
