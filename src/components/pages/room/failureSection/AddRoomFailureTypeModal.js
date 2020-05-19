import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import React, { useEffect, useState } from 'react';
import { get, post } from '../../../../data/api';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';

export const AddRoomFailureTypeModal = ({
  show,
  onHide,
  failureTypes,
  roomId,
  setRoomFailureTypes
}) => {
  const [availableFailureTypes, setAvailableFailureTypes] = useState([]);
  const [newTypeId, setNewTypeId] = useState();
  useEffect(() => {
    get(`/devices/categories`).then((result) => {
      const availableTypeIds = failureTypes.map((t) => t.id);
      const availableTypes = result.payload.filter(
        (e) => !availableTypeIds.includes(e.id)
      );
      failureTypes.length > 0 && setNewTypeId(failureTypes[0].id);
      setAvailableFailureTypes(availableTypes);
    }); //filters out types that are already associated with room
  }, [failureTypes]);

  const addTypeToRoom = (e) => {
    e.preventDefault();
    post(`/rooms/${roomId}/newdevice?deviceCategoryId=${newTypeId}`)
      .then((result) => {
        // does this to refresh parentComponent with the updated Failure list.
        if (result.payload.devicesCategories) {
          setRoomFailureTypes(result.payload.devicesCategories);
        }
      })
      .finally(() => onHide(false));
  };

  return (
    <Modal
      show={show}
      onHide={() => onHide(false)}
      aria-labelledby='contained-modal-title-vcenter'
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          Ajouter un type de panne à cette salle
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Form onSubmit={addTypeToRoom}>
            <Form.Group controlId='exampleForm.ControlTextarea1'>
              <Form.Label>Types disponibles</Form.Label>
              {availableFailureTypes.length > 0 ? (
                <Form.Control
                  as='select'
                  onChange={(e) => setNewTypeId(e.target.value)}
                  value={newTypeId}
                >
                  {availableFailureTypes.map((type) => (
                    <option value={type.id}> {type.name}</option>
                  ))}
                </Form.Control>
              ) : (
                <Spinner animation='grow' />
              )}
              <p>
                <em>
                  tip : Il est possible d'ajouter d'autres types dans l'espace
                  administrateur.
                </em>
              </p>
              <Button variant='primary' type='submit'>
                Ajouter type
              </Button>
            </Form.Group>
          </Form>
        </Container>
      </Modal.Body>
    </Modal>
  );
};
