import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import {Title} from "../../../common/text/Basics";
import React from "react";

const DeviceType = ({ name }) => {
    return (
        <Card style={{ width: '8rem' }}>
            <Card.Body>
                <Card.Title> X </Card.Title>
                <Card.Text> {name} </Card.Text>
            </Card.Body>
        </Card>
    );
};

export function DeviceDisplay() {
return (
    <div>
        <Container fluid>
            <Row fluid>
                <Title>Liste des types d'appareil</Title>
            </Row>
            <Row fluid>
                <DeviceType name='Ampoule cassée' />
                <DeviceType name='Ampoule cassée' />
                <DeviceType name='Ampoule cassée' />
                <DeviceType name='Ampoule cassée' />
                <DeviceType name='Ampoule cassée' />
            </Row>
            <Row fluid>
                <Title>Liste des pannes</Title>
            </Row>
            pouet

        </Container>
    </div>
);