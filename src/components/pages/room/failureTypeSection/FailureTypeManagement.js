import React, { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { get, HttpStatusCode, put } from '../../../../data/api';
import { AddRoomFailureTypeModal } from '../failureSection/AddRoomFailureTypeModal';

export function FailureTypeManagement({ roomId }) {
  const [failureTypes, setFailureTypes] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    get(`/rooms/${roomId}/device/categories`).then((result) => {
      setFailureTypes(result.payload);
    });
  }, []);

  const deleteRoomFailureType = (failure) => {
    put(`/rooms/${roomId}/removedevice?deviceCategoryId=${failure.id}`).then(
      (result) => {
        if (result.statusCode === HttpStatusCode.OK) {
          setFailureTypes(failureTypes.filter((type) => type.id !== failure.id));
        } else {
          alert('Erreur en supprimant le Type de Pannes de cette salle.');
        }
      }
    );
  };

  return (
    <Row>
      <AddRoomFailureTypeModal
        show={modalOpen}
        onHide={setModalOpen}
        roomId={roomId}
        failureTypes={failureTypes}
        setRoomFailureTypes={setFailureTypes}
      />
      <Col sm='12' md='4'>
        <p>Types de pannes disponibles</p>
      </Col>
      <Col sm='12' md='12' fluid>
        <table className='table'>
          <tbody>
            {failureTypes.length > 0 ? (
              failureTypes.map((failureType) => (
                <tr>
                  <td>{failureType.name}</td>
                  <td>
                    <Button
                      variant='danger'
                      onClick={() => deleteRoomFailureType(failureType)}
                    >
                      x
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>Aucun type de panne associé à cette salle</tr>
            )}
          </tbody>
        </table>
      </Col>
      <Col sm='12' md='4'>
        <Button variant='secondary' block onClick={() => setModalOpen(true)}>
          Ajouter
        </Button>
      </Col>
    </Row>
  );
}
