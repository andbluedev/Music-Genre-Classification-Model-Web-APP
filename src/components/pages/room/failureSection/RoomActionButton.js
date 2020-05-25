import React from 'react';
import { failureState, put } from '../../../../data/api';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';

export function RoomActionButton(props) {
  function changeUpvote(e) {
    e.preventDefault();
    let hasUpvote = false;
    props.upvoters.map((upvoter) =>
      props.userId === upvoter.id ? (hasUpvote = true) : (hasUpvote = false)
    );
    if (!hasUpvote) {
      put('/failures/upvote?failureId=' + props.failureid, '').then((result) => {
        let updatedFailures = props.failures;
        updatedFailures.map((failure) => {
          if (failure.id === props.failureid) {
            result.payload.upvoters.map((upvoter) => {
              if (props.userId === upvoter.id) {
                failure.upvoters.push(upvoter);
              }
            });
          }
        });
        return props.setFailures([...updatedFailures]);
      });
    } else {
      put('/failures/upvote/remove?failureId=' + props.failureid, '').then(() => {
        let updatedFailures = props.failures;
        updatedFailures.map((failure) => {
          if (failure.id === props.failureid) {
            const index = failure.upvoters.indexOf(props.upvoters);
            failure.upvoters.splice(index, 1);
          }
        });
        return props.setFailures([...updatedFailures]);
      });
    }
  }

  function changeFailureState(newState) {
    put(
      '/failures/state?failureId=' + props.failureid + '&newState=' + newState
    ).then(() => {
      let updatedFailures = props.failures;
      updatedFailures.map((failure) => {
        if (failure.id === props.failureid) {
          failure.state = newState;
        }
      });
      return props.setFailures([...updatedFailures]);
    });
  }

  return props.role === 'STUDENT' || props.role === 'TEACHER' ? (
    <Button variant="outline-primary" onClick={changeUpvote}>
      <i className='fas fa-thumbs-up'></i>
    </Button>
  ) : (
    <Dropdown onSelect={changeFailureState}>
      <Dropdown.Toggle id='dropdown-basic'>Résoudre</Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item eventKey='ONGOING'>{failureState.ONGOING}</Dropdown.Item>
        <Dropdown.Item eventKey='CLOSED'>{failureState.CLOSED}</Dropdown.Item>
        <Dropdown.Item eventKey='UN_RESOLVED'>
          {failureState.UN_RESOLVED}
        </Dropdown.Item>
        <Dropdown.Item eventKey='USELESS'>{failureState.USELESS}</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
