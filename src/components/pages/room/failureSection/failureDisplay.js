import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import './failureDisplay.scss';

class FailureDisplay extends Component {
  constructor() {
    super();
    this.state = {
      fail: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:8000/rooms/1')
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        let failure = data.results.map((fai) => {
          return (
            <div key={fai.results}>
              <p src={fai.failure.failure}></p>
            </div>
          );
        });
        this.setState({ fail: failure });
      });
  }

  render() {
    return (
      <div>
        <p>prout</p>
        {this.state.fail}
      </div>
    );
  }
}
/*
export function FailureDisplay() {
  this.state = {
    fail: []
  };

  fetch('http://localhost:8000/rooms/1')
    .then((results) => {
      return results.json();
    })
    .then((data) => {
      let fail = data.results.map((fai) => {
        return (
          <div key={fai.results}>
            <p src={fai.fail.failure}></p>
          </div>
        );
      });
      this.setState({ fail: fail });
    });

  return (
    <div>
      <Accordion defaultActiveKey='1'>
        <Card>
          <Card.Header>
            Appareil : (Nom Appareil) Type de panne : (Type de panne) Date : (Date)
            Etat : (Etat)
            <Accordion.Toggle as={Button} variant='link' eventKey='0'>
              Description {this.state.fail}
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey='0'>
            <Card.Body>Description</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
}
*/
