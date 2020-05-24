import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button'
import React, {useState} from "react";
import './DeviceDisplay.scss';
import {HttpStatusCode, del} from "../../../../data/api";

export function DeviceDisplay(props) {

    function deleteCategory(e) {
        e.preventDefault();
        del('/devices/categories/' + props.id, '')
            .then(
                () => {
                    let updatedCategories = props.categories;
                    let index = 0;
                    updatedCategories.map(
                        (category) => {
                            if (category.id === props.id) {
                                index = updatedCategories.indexOf(category);
                            }
                        }
                    )
                    updatedCategories.splice(index, 1)
                    return props.setCategories([...updatedCategories]);
                }
            )
    }

    return (
        <div>
            <Card className='device-card' style={{width: '8rem'}}>
                <Card.Body>
                    <Card.Title className=''> <Button className='delete-button' onClick={deleteCategory}> X </Button>
                    </Card.Title>
                    <Card.Text> {props.name} </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}