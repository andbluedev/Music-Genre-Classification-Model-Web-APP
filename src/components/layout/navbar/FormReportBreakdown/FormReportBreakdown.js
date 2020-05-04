import React from 'react';
import { Modal, Form } from 'react-bootstrap';

export function FormReportBreakdown(props) {
  return (
    <Modal show={props.show}>
      <Modal.Header closeButton>
        <Modal.Title>Déclarer une panne</Modal.Title>
      </Modal.Header>
      <Form>
        <Form.Label>Batiment :</Form.Label>
        <Form.Control as={'select'}>
          <option>bjr</option>
        </Form.Control>

      </Form>
    </Modal>
  );
}
