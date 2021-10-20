import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './BookingDetail.css';

const BookingDetail = (props) => {
    console.log(props.show);
    const { id, name, batch, visit, img, speciality, location, studyBackground } = props.show;
    return (
        <div>
            <div >
                <Col className="mx-auto my-5 py-5">
                    <Card className="resPaddN" style={{ fontSize: 'larger', width: '350px', height: '770px', backgroundColor: '#A3CFF9' }}>
                        <Card.Img style={{ height: '300px' }} variant="top" src={img} />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Text style={{ color: 'goldenrod', fontWeight: 'bold' }} >{speciality}</Card.Text>
                            <Card.Title>{visit}BDT Per CheckUp</Card.Title>
                            <Card.Text className="fw-bold fs-5">Location: {location}</Card.Text>
                            <Card.Text>Batch: {batch}</Card.Text>
                            <Card.Text style={{ width: '330px', height: '140px', }}>
                                {studyBackground}
                            </Card.Text>
                            <Link to='/home'><Button variant="primary">Take Appoinment</Button>{' '}</Link>
                        </Card.Body>
                    </Card>
                </Col>
            </div >
        </div >
    );
};

export default BookingDetail;