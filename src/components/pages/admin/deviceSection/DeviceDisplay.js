import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import React from 'react';
import './DeviceDisplay.scss';

export function DeviceDisplay(props) {
  return (
    <div>
      <Card className='device-card' style={{ width: '8rem' }}>
        <Card.Body>
          <Card.Title className=''>
            <Button
              className='btn-sm delete-button'
              onClick={() => props.openEditModal(props.category)}
              variant='outline-info'
              size='xs'
            >
              <span>
                <i className='fas fa-edit'></i>
              </span>
            </Button>
          </Card.Title>
          <Card.Text className='content'> {props.category.name} </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
