import React, {useEffect, useState} from 'react';
import {FailureDisplay} from './failureSection/FailureDisplay';
import Container from 'react-bootstrap/Container';
import {Title} from '../../common/text/Basics';
import {get} from '../../../data/api';
import {DeviceDisplay} from "./deviceSection/DeviceDisplay";
import Row from 'react-bootstrap/Row';
import {AddDevice} from "./deviceSection/AddDevice";

export function AdminPage() {
    const [failures, setFailures] = useState([]);
    const [categories, setCategories] = useState([]);


    useEffect(() => {
        /*get('/failures').then((result) => {
        setFailures(result.payload);
      });*/
        get('/devices/categories').then((result) => {
            setCategories(result.payload);
        });
    }, []);

    return (
        <div>
            <Row>
            <Title> Liste des types d'appareil </Title>
            <Container className='device'>
                <Row>
                    {categories &&
                    categories.map((category) => (
                        <DeviceDisplay
                            name={category.name}
                            id={category.id}
                            categories={categories}
                            setCategories={setCategories}
                        />
                    ))}
                </Row>
            </Container>
            </Row>
            <Row>
            <Container>
                <AddDevice
                    categories={categories}
                    setCategories={setCategories}
                />
            </Container>
            </Row>
            <Row>
            <Title> Liste des pannes </Title>
            <Container className='room-wrapper'>
                {failures &&
                failures.map((failure) => (
                    <FailureDisplay
                        id={failure.id}
                        type={failure.title}
                        device={failure.deviceCategory}
                        date={failure.createdAt}
                        description={failure.description}
                        state={failure.state}
                        upvoters={failure.upvoters}
                    />
                ))}
            </Container>
            </Row>
        </div>
    );

}

