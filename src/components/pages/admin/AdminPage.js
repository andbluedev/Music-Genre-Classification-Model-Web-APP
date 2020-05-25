import React, { useContext, useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Title } from '../../common/text/Basics';
import { failureState, get } from '../../../data/api';
import { DeviceDisplay } from './deviceSection/DeviceDisplay';
import Row from 'react-bootstrap/Row';
import { AddDevice } from './deviceSection/AddDevice';
import { FailureDisplay } from '../room/failureSection/FailureDisplay';
import { UserContext } from '../../../data/auth/UserContext';
import Dropdown from 'react-bootstrap/Dropdown';

export function AdminPage() {
  const { state } = useContext(UserContext);
  const [initialFailures, setInitialFailures] = useState([]);
  const [filteredFailures, setFilteredFailures] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    get('/failures').then((result) => {
      setInitialFailures(result.payload);
      setFilteredFailures(result.payload);
    });
    get('/devices/categories').then((result) => {
      setCategories(result.payload);
    });
  }, []);

  function filterRoomFailure(filterState) {
    if (filterState.length > 0) {
      const newFilteredFailures = initialFailures.filter(
        (failure) => failure.state === filterState
      );
      setFilteredFailures(newFilteredFailures);
    }
  }

  return state.role === 'ADMIN' ? (
    <div>
      <Row>
        <Title> Liste des types d'appareil </Title>
        <Container className='device'>
          <Row>
            {categories.length > 0 &&
              categories.map((category) => (
                <DeviceDisplay
                  name={category.name}
                  id={category.id}
                  categories={categories}
                  setCategories={setCategories}
                />
              ))}
          </Row>
        </Container>
      </Row>
      <Row>
        <Container>
          {categories.length > 0 && (
            <AddDevice categories={categories} setCategories={setCategories} />
          )}
        </Container>
      </Row>
      <Row>
        <Title> Liste des pannes </Title>

        <Container className='room-wrapper'>
          <Dropdown onSelect={filterRoomFailure}>
            <Dropdown.Toggle id='dropdown-basic'>Filtrer</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item eventKey='ONGOING'>
                {failureState.ONGOING}
              </Dropdown.Item>
              <Dropdown.Item eventKey='CLOSED'>{failureState.CLOSED}</Dropdown.Item>
              <Dropdown.Item eventKey='UN_RESOLVED'>
                {failureState.UN_RESOLVED}
              </Dropdown.Item>
              <Dropdown.Item eventKey='USELESS'>
                {failureState.USELESS}
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <br />
          {filteredFailures.length > 0 &&
            filteredFailures.map((failure) => (
              <FailureDisplay
                id={failure.id}
                failureTitle={failure.title}
                device={failure.deviceCategory}
                date={failure.createdAt}
                description={failure.description}
                state={failure.state}
                failureState={failure.state}
                failures={initialFailures}
                upvoters={failure.upvoters}
                setFailures={setInitialFailures}
              />
            ))}
        </Container>
      </Row>
    </div>
  ) : (
    <div> Vous n'avez pas le statut pour accéder à cette page </div>
  );
}
