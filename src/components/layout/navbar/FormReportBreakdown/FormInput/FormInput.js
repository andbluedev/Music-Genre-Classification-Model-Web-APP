import React, { useState } from 'react';
import {Form} from "react-bootstrap";

export function FormInput(props) {
    const [input,setInput] = useState(undefined);
    const [options,setOptions] = useState(undefined);

    return(
        <Form.Group>
            <Form.Label>
                {props.label}
            </Form.Label>
            <Form.Control
                as='select'
                onChange{(e) => {
                    setInput(e.target.value);
            }}
            >
                {options}
            </Form.Control>
        </Form.Group>
    );
}
