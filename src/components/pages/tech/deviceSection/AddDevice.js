import React, {useEffect, useState} from 'react';
import {get, post} from "../../../../data/api";
import Form from 'react-bootstrap/Form';


export function AddDevice ({

    setCategory
                           }) {

    const [value, setValue] = useState("");
    const [onHide, setOnHide] = useState("");

    const addDevice = (e) => {
        e.preventDefault();
        post(`/devices/categories`, {name:"value"})
        .then((result) => {
                // does this to refresh parentComponent with the updated Failure list.
                if (result.payload.devicesCategories) {
                    setCategory(result.payload.devicesCategories);
                }
            })
                .finally(() => setOnHide(false));
    };

    return(
<div className = 'add-device-form'>
    <Form
        onSubmit={addDevice}>
        <input
            autoComplete={false}
            className='inputDevice'
            type='text'
            placeholder='Ajouter un nouvel appareil'
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
        <button className='add' type='submit'>
            <span className='button-text'>Ajouter</span>
        </button>

    </Form>
</div>
    )
}