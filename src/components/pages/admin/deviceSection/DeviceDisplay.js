import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import React from 'react';
import './DeviceDisplay.scss';

export function DeviceDisplay(props) {
  function deleteCategory(e) {
    e.preventDefault();
    return alert('WIP: On ne peut pas encore supprimer les appareils');
    // del('/devices/categories/' + props.id, '').then(() => {
    //   let updatedCategories = props.categories;
    //   let index = 0;
    //   updatedCategories.map((category) => {
    //     if (category.id === props.id) {
    //       index = updatedCategories.indexOf(category);
    //     }
    //   });
    //   updatedCategories.splice(index, 1);
    //   return props.setCategories([...updatedCategories]);
    // });
  }

  return (
    <div>
      <Card className='device-card' style={{ width: '8rem' }}>
        <Card.Body>
          <Card.Title className=''>
            <Button
              className='delete-button'
              onClick={deleteCategory}
              variant='outline-warning'
              size='sm'
            >
              X
            </Button>
          </Card.Title>
          <Card.Text className='content'> {props.name} </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
