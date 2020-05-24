import React, { useEffect, useState } from 'react';
import { FailureDisplay } from './failureSection/FailureDisplay';
import './RoomPage.scss';
import { SubTitle, Title } from '../../common/text/Basics';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { get } from '../../../data/api';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { FailureTypeManagement } from './failureTypeSection/FailureTypeManagement';

export function RoomPage() {
  let { id } = useParams();
  const [failures, setFailures] = useState([]);
  const [building, setBuilding] = useState();
  const [roomName, setRoomName] = useState('');
  useEffect(() => {
    get('/rooms/' + id).then((result) => {
      setRoomName(result.payload.number);
      setBuilding(result.payload.building);
      setFailures(result.payload.failures);
    });
  }, [id]);

  return (
    <div>
      <Title>{roomName}</Title>
      <SubTitle> Batiment : {building && building.name}</SubTitle>
      <Container className='room-wrapper'>
        <Row>
          <Col>
            {failures.length > 0 &&
              failures.map((failure) => {
                return (
                  <FailureDisplay
                    id={failure.id}
                    key={failure.id}
                    failureTitle={failure.title}
                    device={failure.deviceCategory}
                    date={failure.createdAt}
                    description={failure.description}
                    failureState={failure.state}
                    failures={failures}
                    upvoters={failure.upvoters}
                    setFailures={setFailures}
                  />
                );
              })}
          </Col>
        </Row>
      </Container>
      <SubTitle>Gestion de la salle</SubTitle>
      <Container>
        <FailureTypeManagement roomId={id} />
      </Container>
    </div>
  );
}
