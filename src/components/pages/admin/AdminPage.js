import React, { useContext, useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Title } from '../../common/text/Basics';
import { get, put } from '../../../data/api';
import { DeviceDisplay } from './deviceSection/DeviceDisplay';
import Row from 'react-bootstrap/Row';
import { AddDevice } from './deviceSection/AddDevice';
import { FailureDisplay } from '../room/failureSection/FailureDisplay';
import { EditDeviceModal } from './deviceSection/EditDeviceModal';
import { UserContext } from '../../../data/auth/UserContext';

export function AdminPage() {
  const { state } = useContext(UserContext);
  const [failures, setFailures] = useState([]);
  const [categories, setCategories] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedDeviceId, setSelectedDeviceId] = useState(undefined);
  const [selectedDeviceName, setSelectedDeviceName] = useState(undefined);

  useEffect(() => {
    get('/failures').then((result) => {
      setFailures(result.payload);
    });
    get('/devices/categories').then((result) => {
      setCategories(result.payload);
    });
  }, []);

  const openEditModal = (category) => {
    setOpen(true);
    setSelectedDeviceName(category.name);
    setSelectedDeviceId(category.id);
  };

  const updateDeviceName = (e) => {
    e.preventDefault();
    put(
      `/devices/categories/${selectedDeviceId}/update?newName=${selectedDeviceName}`
    )
      .then((result) => {
        const updatedDevices = categories.map((category) => {
          if (category.id === result.payload.id) {
            category.name = result.payload.name;
          }
          return category;
        });
        setCategories(updatedDevices);
      })
      .catch(() => alert('Erreur lors de la mise à jour du nom du device.'))
      .finally(() => initModal());
  };

  const initModal = () => {
    setSelectedDeviceId(undefined);
    setSelectedDeviceName(undefined);
    return setOpen(false);
  };

  return state.role === 'ADMIN' ? (
    <div>
      <EditDeviceModal
        show={open}
        deviceName={selectedDeviceName}
        setDeviceName={(e) => setSelectedDeviceName(e.target.value)}
        submitDeviceName={updateDeviceName}
        onHide={() => initModal()}
      />
      <Row>
        <Title> Liste des types d'appareil </Title>
        <Container className='device'>
          <Row>
            {categories.length > 0 &&
              categories.map((category) => (
                <DeviceDisplay
                  category={category}
                  openEditModal={openEditModal}
                  categories={categories}
                />
              ))}gst
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
          {failures.length > 0 &&
            failures.map((failure) => (
              <FailureDisplay
                id={failure.id}
                failureTitle={failure.title}
                device={failure.deviceCategory}
                date={failure.createdAt}
                description={failure.description}
                state={failure.state}
                failureState={failure.state}
                failures={failures}
                upvoters={failure.upvoters}
                setFailures={setFailures}
              />
            ))}
        </Container>
      </Row>
    </div>
  ) : (
    <div> Vous n'avez pas le statut pour accéder à cette page </div>
  );
}
