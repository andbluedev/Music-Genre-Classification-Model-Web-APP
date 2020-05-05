import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { SpinningCircle } from '../../../common/spinner/SpiningCircle';
import { get } from '../../../../data/api';

export function FormReportBreakdown(props) {
  const [buildings, setBuildings] = useState(undefined);
  const [rooms, setRooms] = useState(undefined);
  const [devices, setDevices] = useState(undefined);
  const [failures, setFailures] = useState(undefined);
  const [selectedBuilding, setSelectedBuilding] = useState(undefined);
  const [selectedRoom, setSelectedRoom] = useState(undefined);
  const [selectedDevice, setSelectedDevice] = useState(undefined);
  const [selectedFailure, setSelectedFailure] = useState(undefined);

  let form, formAfterBuildings, formAfterRooms, formAfterDevice;

  form = addFormPart({
    entity: buildings,
    selectedEntity: selectedBuilding,
    setSelectedEntity: setSelectedBuilding,
    nameKey: 'name',
    setEntity: setBuildings,
    selectedPreviousEntity: true,
    APIpath: '/buildings',
    formLabel: 'Bâtiment :'
  });

  formAfterBuildings = addFormPart({
    entity: rooms,
    selectedEntity: selectedRoom,
    setSelectedEntity: setSelectedRoom,
    nameKey: 'number',
    setEntity: setRooms,
    selectedPreviousEntity: selectedBuilding,
    APIpath: '/rooms',
    formLabel: 'Salle :'
  });

  formAfterRooms = addFormPart({
    entity: devices,
    selectedEntity: selectedDevice,
    setSelectedEntity: setSelectedDevice,
    nameKey: 'name',
    setEntity: setDevices,
    selectedPreviousEntity: selectedRoom,
    APIpath: '/devices/categories',
    formLabel: 'Appareil :'
  });

  formAfterDevice = addFormPart({
    entity: failures,
    selectedEntity: selectedFailure,
    setSelectedEntity: setSelectedFailure,
    nameKey: 'title',
    setEntity: setFailures,
    selectedPreviousEntity: selectedDevice,
    APIpath: '/failures',
    formLabel: 'Type de panne :'
  });

  function addFormPart(O) {
    let options = [];
    if (O.entity) {
      if (!O.selectedEntity) {
        O.setSelectedEntity(O.entity[0][O.nameKey]);
      }
      O.entity.forEach((entityEl) => {
        options.push(<option key={entityEl.id}>{entityEl[O.nameKey]}</option>);
      });
      return (
        <>
          <Form.Group>
            <Form.Label>{O.formLabel}</Form.Label>
            <Form.Control
              as={'select'}
              onChange={(e) => {
                O.setSelectedEntity(e.target.value);
              }}
            >
              {options}
            </Form.Control>
          </Form.Group>
        </>
      );
    } else if (O.selectedPreviousEntity) {
      get(O.APIpath).then((result) => {
        O.setEntity(result.payload);
      });
      return <SpinningCircle />;
    }
  }

  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Signaler une panne</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          {form}
          {formAfterBuildings}
          {formAfterRooms}
          {formAfterDevice}
          <Form.Group>
            <Form.Label>Description :</Form.Label>
            <Form.Control as='textarea' rows='3' />
          </Form.Group>
          <Button variant={'outline-success'} block>
            Signaler
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
