import React, { useRef, useState } from 'react';
import { Form } from 'react-bootstrap';
import { SpinningCircle } from '../../../../common/spinner/SpiningCircle';
import { get } from '../../../../../data/api';
import { useFormDispatch } from '../../formContext/FormContext';

export function FormInput(props) {
  const [fetchedData, setfetchedData] = useState(undefined);
  const dispatch = useFormDispatch();
  const fetchUrl = useRef(props.fetchURL); // to remember prev prop

  if (!fetchedData || props.fetchURL !== fetchUrl.current) {
    fetchUrl.current = props.fetchURL;
    get(props.fetchURL)
      .then((res) => {
        setfetchedData(res.payload);
      })
      .catch((err) => console.log(err));
    return <SpinningCircle />;
  }

  let options = [<option key={0}>-</option>];
  fetchedData.forEach((el) => {
    options.push(<option key={el.id}>{el[props.apiKey]}</option>);
  });
  return (
    <Form.Group>
      <Form.Label>{props.label}</Form.Label>
      <Form.Control
        as='select'
        onChange={(e) => {
          if (e.target.value !== '-') {
            let id = fetchedData.find((el) => el[props.apiKey] === e.target.value)
              .id;
            dispatch({
              type: props.type,
              payload: {
                id: id
              }
            });
          }
        }}
      >
        {options}
      </Form.Control>
    </Form.Group>
  );
}
