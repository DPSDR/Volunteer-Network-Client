import React, { useEffect, useState } from 'react';
import './VolunteerTask.css'
import { Button, Form, FormControl, Spinner } from 'react-bootstrap';

const VolunteerTask = () => {
    const [volunteers, setVolunteers] = useState();
    useEffect(() => {
        fetch('http://localhost:5000/data')
            .then(res => res.json())
            .then(data => setVolunteers(data))
            .catch(error => console.log(error))
    }, [])
    // console.log(volunteers)


    const handleSearch = (event) => {
        event.preventDefault();
        console.log('clicked')
    }

    return (
        <div>
            <h3 className='text-uppercase fw-bold custom-font'>I Grow By Helping People In Need</h3>

            <Form className='container w-25' onSubmit={handleSearch}>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="primary" type="submit">Search</Button>
            </Form>

            {
                volunteers ?
                    volunteers.map(volunteer => console.log(volunteer))
                    :
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
            }
        </div>
    );
};

export default VolunteerTask;