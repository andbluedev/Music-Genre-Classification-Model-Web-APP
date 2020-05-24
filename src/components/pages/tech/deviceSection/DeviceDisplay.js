import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button'
import React, {useState} from "react";
import './DeviceDisplay.scss';
import {HttpStatusCode, del} from "../../../../data/api";

export function DeviceDisplay(props) {

    function deleteCategory(e) {
        e.preventDefault();
        del ('/devices/categories/' + props.id, '');
    }
    return (
        <div>
            <Card className='device-card' style={{width: '8rem'}}>
                <Card.Body>
                    <Card.Title> <Button className = 'delete-button' onClick={deleteCategory}> X </Button>  </Card.Title>
                    <Card.Text> {props.name} </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}