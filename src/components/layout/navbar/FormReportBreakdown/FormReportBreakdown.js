import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { post } from '../../../../data/api';
import { useFormState } from '../formContext/FormContext';
import { SelectionsInForm } from './SelectionsInForm/SelectionsInForm';

export function FormReportBreakdown(props) {
  const formState = useFormState();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  function handleSubmit() {
    post(
      `failures?roomId=${formState.selectedRoomId}&deviceCategoryId=${formState.selectedDeviceId}`,
      {
        title: title,
        description: description
      }
    )
      .then()
      .catch((err) => console.log(err));
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
          <SelectionsInForm />
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
