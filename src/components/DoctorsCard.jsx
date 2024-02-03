import React from 'react'
import { Button, Card, Image } from 'react-bootstrap';
import './DoctorCard.css'

const DoctorsCard = (props) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.imgURL} className="doctor-card-img" />
            <Card.Body>
                <Card.Title className='title'>{props.name}</Card.Title>
                <Card.Text className='address-italic'>{props.address}</Card.Text>
                <Button  className='viewButton' href={`/doctor/${props.id}`}>View Services</Button>
            </Card.Body>
        </Card>

    );
}
export default DoctorsCard