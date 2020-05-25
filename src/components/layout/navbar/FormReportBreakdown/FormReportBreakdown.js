import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { post } from '../../../../data/api';
import { useFormState } from '../formContext/FormContext';
import { SelectionsInForm } from './SelectionsInForm/SelectionsInForm';
import Container from 'react-bootstrap/Container';

export function FormReportBreakdown(props) {
  const formState = useFormState();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    post(
      `/failures?roomId=${formState.selectedRoomId}&deviceCategoryId=${formState.selectedDeviceId}`,
      {
        title,
        description
      }
    )
      .then()
      .catch((err) => alert(err))
      .finally(() => {
        window.location.reload(); // TODO : change this logic and use React Context (forces the browser page reloading which isn't great because it remounts every component of the page meaning lots of ressources spent for nothing.l)
      });
  }

  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Signaler une panne</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Form onSubmit={handleSubmit} style={{ paddingBottom: 15 + 'px' }}>
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
            <Button variant={'outline-success'} type='submit' block>
              Signaler
            </Button>
          </Form>
        </Container>
      </Modal.Body>
    </Modal>
  );
}
