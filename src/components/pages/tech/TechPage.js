import React from 'react';
import './TechPage.scss';
import { Title } from '../../common/text/Basics';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export function TechPage() {
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
  const BdButton = ({ descr }) => {
    return (
      <Button className='button'>
        <p className='descrButton'> {descr} </p>
      </Button>
    );
  };
  const Breackdown = ({ device }, { type }, { date }, { state }) => {
    return (
      <div>
        <p> Appareil : {device} </p>
        <p> Type de panne : {type} </p>
        <p> Date : {date} </p>
        <p> Etat : {state} </p>
        <BdButton descr='Voir description' />
        <BdButton descr='Résoudre' />
        <BdButton descr='Voir Salle' />
      </div>
    );
  };
  return (
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
          <Breackdown
            device='Projecteur'
            type='ampoule cassée'
            date='14/04/2020'
            state='En réparation'
          />
          <Breackdown
            device='Projecteur'
            type='ampoule cassée'
            date='14/04/2020'
            state='En réparation'
          />
          <Breackdown
            device='Projecteur'
            type='ampoule cassée'
            date='14/04/2020'
            state='En réparation'
          />
          <Breackdown
            device='Projecteur'
            type='ampoule cassée'
            date='14/04/2020'
            state='En réparation'
          />
          <Breackdown
            device='Projecteur'
            type='ampoule cassée'
            date='14/04/2020'
            state='En réparation'
          />
        </Row>
          pouet
      </Container>
    </div>
  );
}
