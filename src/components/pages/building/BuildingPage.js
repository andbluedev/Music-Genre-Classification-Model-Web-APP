import React, { useState, useEffect } from 'react';
import { get } from '../../../data/api';
import './BuildingPage.scss';
import { Title } from '../../common/text/Basics';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';

const Room = ({ content }) => (
  <a href={'/room/' + content.room.id}>
    <Card className='room-card'>
      <Card.Header
        className={content.room.failures.length !== 0 ? 'active-failure' : ''}
      >
        {content.room.failures.length} pannes en cours
      </Card.Header>
      <Card.Body>
        <Card.Title className='room-nb'>{content.room.number}</Card.Title>
      </Card.Body>
    </Card>
  </a>
);

export function BuildingPage() {
  let { id } = useParams();

  const [rooms, setRoom] = useState([]);
  const [building, setBuilding] = useState({});

  useEffect(() => {
    get('/rooms/' + id + '/with-failures').then((result) => {
      setRoom(result.payload);
      if (result.payload.length > 0) {
        setBuilding(result.payload[0].building);
      }
    });
  }, [id]);

  return (
    <div>
      <Title>{building.name}</Title>
      <Container fluid>
        <Row className='justify-content-around' fluid>
          {rooms.length > 0
            ? rooms.map((room) => <Room content={{ room }} />)
            : "Aucune salle n'est associée à ce bâtiment"}
        </Row>
      </Container>
    </div>
  );
}
