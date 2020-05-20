import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { SpinningCircle } from '../../../common/spinner/SpiningCircle';
import { get, post } from '../../../../data/api';

export function FormReportBreakdown(props) {
  const [buildings, setBuildings] = useState(undefined);
  const [rooms, setRooms] = useState(undefined);
  const [devices, setDevices] = useState(undefined);
  const [selectedBuilding, setSelectedBuilding] = useState(undefined);
  const [selectedRoom, setSelectedRoom] = useState(undefined);
  const [selectedDevice, setSelectedDevice] = useState(undefined);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  let form, formAfterBuildings, formAfterRooms;

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

  function addFormPart(params) {
    let options = [];
    if (params.entity) {
      if (!params.selectedEntity) {
        params.setSelectedEntity(params.entity[0][params.nameKey]);
      }
      params.entity.forEach((entityEl) => {
        options.push(<option key={entityEl.id}>{entityEl[params.nameKey]}</option>);
      });
      return (
        <Form.Group>
          <Form.Label>{params.formLabel}</Form.Label>
          <Form.Control
            as={'select'}
            onChange={(e) => {
              params.setSelectedEntity(e.target.value);
            }}
          >
            {options}
          </Form.Control>
        </Form.Group>
      );
    } else if (params.selectedPreviousEntity) {
      get(params.APIpath).then((result) => {
        params.setEntity(result.payload);
      });
      return <SpinningCircle />;
    }
  }

  function handleSubmit() {
    post(`failures?roomId=1&deviceCategoryId=0`, {
      title: title,
      description: description
    });
  }

  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Signaler une panne</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Titre :</Form.Label>
            <Form.Control
              type={'text'}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              required
            />
            <Form.Control.Feedback type='invalid'>
              Veuillez donner un titre à cette panne.
            </Form.Control.Feedback>
          </Form.Group>
          {form}
          {formAfterBuildings}
          {formAfterRooms}
          <Form.Group>
            <Form.Label>Description :</Form.Label>
            <Form.Control
              as='textarea'
              rows='3'
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              required
            />
            <Form.Control.Feedback type='invalid'>
              Veuillez décrire la panne.
            </Form.Control.Feedback>
          </Form.Group>
          <Button
            variant={'outline-success'}
            type={'submit'}
            onClick={() => {
              handleSubmit();
            }}
            block
          >
            Signaler
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
