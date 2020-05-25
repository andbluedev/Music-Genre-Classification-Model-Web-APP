import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export const EditDeviceModal = ({
  show,
  onHide,
  deviceName,
  setDeviceName,
  submitDeviceName
}) => {
  return (
    <Modal
      show={show}
      onHide={() => onHide(false)}
      aria-labelledby='contained-modal-title-vcenter'
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          Editer le type d'appareil
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Form onSubmit={submitDeviceName}>
            <Form.Group controlId='exampleForm.ControlTextarea1'>
              <Form.Label>
                <strong>Nom</strong>
              </Form.Label>
              <Form.Control
                onChange={setDeviceName}
                value={deviceName}
                placeholder='Entrer le nom du device'
              />
              <br />
              <Button variant='primary' type='submit'>
                Modifier Nom
              </Button>
            </Form.Group>
          </Form>
        </Container>
      </Modal.Body>
    </Modal>
  );
};
