import React, {useState} from 'react';
import { post} from "../../../../data/api";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import './AddDevice.scss';

export function AddDevice (props) {

    const [value, setValue] = useState("");

    const addDevice = (e) => {
        e.preventDefault();
        console.log(props.categories);
        post(`/devices/categories`, {name:value})
        .then((result) => {
                    let updatedCategories = props.categories;
                    updatedCategories.push(result.payload);
                    return props.setCategories([...updatedCategories]);
            })
    };

    return(
<div className = 'add-device-form'>
    <Form
        onSubmit={addDevice}>
        <input
            autoComplete={false}
            className='input-device'
            type='text'
            placeholder='Ajouter un nouvel appareil'
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
        <Button className='add' type='submit' variant="outline-info">
            Ajouter
        </Button>

    </Form>
</div>
    )
}