import React from 'react';
import './HomeTechPage.scss';
import { Title } from '../../common/text/Basics';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export function HomeTechPage() {
    const DeviceType = ({name}) => {
        return (
            <Card style={{width: '8rem'}}>
                <Card.Body>
                    <Card.Title> X </Card.Title>
                    <Card.Text> {name} </Card.Text>
                </Card.Body>
            </Card>
        );
    };

    const BdButton = ({descr}) => {
        return (
            <button className="button">
                <p className='descrButton'> {descr} </p>
            </button>
        );
    };
    const Breackdown = ({device}, {type}, {date}, {state}) => {
    return (
        <BdButton descr="Voir description"/>
        <BdButton descr="Résoudre"/>
            <BdButton descr="Voir Salle"/>
    );
};
    <div>
      <Container fluid>
        <Row fluid>
          <Title>Liste des types d'appareil</Title>
          <DeviceType name='Ampoule cassée' />
          <DeviceType name='Ampoule cassée' />
          <DeviceType name='Ampoule cassée' />
          <DeviceType name='Ampoule cassée' />
          <DeviceType name='Ampoule cassée' />
        </Row>
        <Row fluid>
          <Title>Liste des pannes</Title>
        </Row>
      </Container>
    </div>
  );
}
