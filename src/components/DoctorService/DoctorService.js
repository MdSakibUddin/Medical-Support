import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './DoctorService.css';


const DoctorService = ({ service }) => {
    // const {service} = props;
    const { id, name, studyBackground, speciality, img } = service;
    return (
        <div className="resPadd" >
            <Col >
                <Card style={{ fontSize: 'larger', width: '350px', height: '600px', margin: '20px' }}>
                    <Card.Img style={{ height: '300px' }} variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text style={{ color: 'goldenrod', fontWeight: 'bold' }} >{speciality}</Card.Text>
                        <Card.Text style={{ width: '330px', height: '140px', }}>
                            {studyBackground}
                        </Card.Text>
                        <Link to={`/booking/${id}`}><Button variant="primary">Booking Details</Button>{' '}</Link>
                    </Card.Body>
                </Card>
            </Col>
        </div >

    );
};

export default DoctorService;