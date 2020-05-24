import React, {useEffect, useState} from 'react';
import {get, post} from "../../../../data/api";
import Form from 'react-bootstrap/Form';


export function AddDevice ({deviceCategories, onHide, setDeviceCategory}) {
    const [setAvailableDeviceCategory] = useState([]);
    const [newTypeId, setNewTypeId] = useState();

    useEffect(() => {
        get(`/devices/categories`).then((result) => {
            const availableCategoriesIds = deviceCategories.map((t) => t.id);
            const availableCategories = result.payload.filter(
                (e) => !availableCategoriesIds.includes(e.id)
            );
            if (availableCategories.length > 0) {
                setNewTypeId(availableCategories[0].id);
            }
            setAvailableDeviceCategory(availableCategories);
        }); //filters out types that are already associated with room
    }, [deviceCategories]);

    const addDevice = (e) => {
        e.preventDefault();
        post(`/devices/categories/newdevice?deviceCategoryId=${newTypeId}`)
            .then((result) => {
                // does this to refresh parentComponent with the updated Failure list.
                if (result.payload.devicesCategories) {
                    setDeviceCategory(result.payload.devicesCategories);
                }
            })
            .finally(() => onHide(false));
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
            value={deviceCategories.name}
        />
        <div className='button-container'>
            <div id='button-container' className='login-button'>
                <button className='learn-more' type='submit'>
            <span className='circle' aria-hidden='true'>
              <span className='icon arrow'></span>
            </span>
                    <span className='button-text'>Ajouter</span>
                </button>
            </div>
        </div>
    </Form>
</div>
    )
}