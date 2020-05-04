import React from 'react';
import { Modal, Form } from 'react-bootstrap';

export function FormReportBreakdown(props) {
  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Déclarer une panne</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Batiment :</Form.Label>
            <Form.Control as={'select'}>
              <option>bjr</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Salle :</Form.Label>
            <Form.Control as={'select'}>
              <option>bjr</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Appareil :</Form.Label>
            <Form.Control as={'select'}>
              <option>bjr</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Type de panne :</Form.Label>
            <Form.Control as={'select'}>
              <option>bjr</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Description :</Form.Label>
            <Form.Control as='textarea' rows='3' />
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
