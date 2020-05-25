import React, { useContext, useEffect, useState } from 'react';
import { FailureDisplay } from './failureSection/FailureDisplay';
import './RoomPage.scss';
import { SubTitle, Title } from '../../common/text/Basics';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { failureState, get } from '../../../data/api';
import { FailureTypeManagement } from './failureTypeSection/FailureTypeManagement';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { UserContext } from '../../../data/auth/UserContext';
import Dropdown from 'react-bootstrap/Dropdown';

export function RoomPage() {
  let { id } = useParams();
  const { state } = useContext(UserContext);

  const [initialFailures, setInitialFailures] = useState([]);
  const [building, setBuilding] = useState();
  const [roomName, setRoomName] = useState('');
  const [filteredFailures, setFilteredFailures] = useState([]);

  useEffect(() => {
    get('/rooms/' + id).then((result) => {
      setRoomName(result.payload.number);
      setBuilding(result.payload.building);
      setInitialFailures(result.payload.failures);
      setFilteredFailures(result.payload.failures);
    });
  }, [id]);

  function filterRoomFailure(filterState) {
    if (filterState.length > 0) {
      const newFilteredFailures = initialFailures.filter(
        (failure) => failure.state === filterState
      );
      setFilteredFailures(newFilteredFailures);
    }
  }

  return (
    <div>
      <Title>{roomName}</Title>
      <SubTitle> Batiment : {building && building.name}</SubTitle>
      <Container className='room-wrapper'>
        <Dropdown onSelect={filterRoomFailure}>
          <Dropdown.Toggle id='dropdown-basic'>Filtrer</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item eventKey='ONGOING'>{failureState.ONGOING}</Dropdown.Item>
            <Dropdown.Item eventKey='CLOSED'>{failureState.CLOSED}</Dropdown.Item>
            <Dropdown.Item eventKey='UN_RESOLVED'>
              {failureState.UN_RESOLVED}
            </Dropdown.Item>
            <Dropdown.Item eventKey='USELESS'>{failureState.USELESS}</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <br/>
        <Row>
          <Col>
            {filteredFailures.length > 0 ? (
              filteredFailures.map((failure) => {
                return (
                  <FailureDisplay
                    id={failure.id}
                    key={failure.id}
                    failureTitle={failure.title}
                    device={failure.deviceCategory}
                    date={failure.createdAt}
                    description={failure.description}
                    failureState={failure.state}
                    failures={initialFailures}
                    upvoters={failure.upvoters}
                    setFailures={setInitialFailures}
                  />
                );
              })
            ) : (
              <p className='text-center mt-2'>Aucune panne</p>
            )}
          </Col>
        </Row>
      </Container>
      {(state.role === 'ADMIN' || state.role === 'TEACHER') && (
        <div>
          <SubTitle>Gestion de la salle</SubTitle>
          <Container>
            <FailureTypeManagement roomId={id} />
          </Container>
        </div>
      )}
    </div>
  );
}
