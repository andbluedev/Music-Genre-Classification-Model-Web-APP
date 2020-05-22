import Card from "react-bootstrap/Card";
import React from "react";
import './DeviceDisplay.scss';


export function DeviceDisplay(props) {
    return (
        <div>
        <Card style={{width: '8rem'}}>
            <Card.Body>
                <Card.Title color='red'> X </Card.Title>
                <Card.Text> {props.name} </Card.Text>
            </Card.Body>
        </Card>
        </div>
    );
}