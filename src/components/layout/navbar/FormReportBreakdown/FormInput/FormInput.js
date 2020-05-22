import React, { useReducer, useState } from 'react';
import { Form } from 'react-bootstrap';
import { SpinningCircle } from '../../../../common/spinner/SpiningCircle';
import { get, post } from '../../../../../data/api';
import { FormReducer } from '../../formContext/FormReducer';
import { emptyFormContext } from '../../formContext/FormContext';

export function FormInput(props) {
  const [input, setInput] = useState(undefined);
  const [options, setOptions] = useState(undefined);
  const [formState, formDispatch] = useReducer(FormReducer, emptyFormContext);

  if (!options) {
    get(props.fetchURL)
      .then((res) => {
        let tempOptions = [<option key={0}>-</option>];
        res.payload.forEach((el) => {
          tempOptions.push(<option key={el.id}>{el[props.apiKey]}</option>);
        });
        setOptions(tempOptions);
      })
      .catch((err) => console.log(err));
    return <SpinningCircle />;
  }
  return (
    <Form.Group>
      <Form.Label>{props.label}</Form.Label>
      <Form.Control
        as='select'
        onChange={(e) => {
          if (e.target.value !== '-') {
            get(props.fetchURL).then((res) => {
              formDispatch({
                type: props.type,
                payload: { id: res.payload.find((el) => el[props.apiKey] === input) }
              });
            });
          }
          setInput(e.target.value);
        }}
      >
        {options}
      </Form.Control>
    </Form.Group>
  );
}
