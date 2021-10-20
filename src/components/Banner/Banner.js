import React from 'react';
import { Button, Card, Carousel, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Banner.css';
import banner1 from '../Images/banner/banner (1).jpg';
import banner2 from '../Images/banner/banner (2).jpg';
import banner3 from '../Images/banner/banner (3).jpg';


const Banner = () => {
    return (
        <div>
            <Card className="backColor p-5">
                <Container className="p-3">
                    <Row>
                        <Col xs={12} md={5} className="pt-5 mb-2">
                            <h1 className="textColor">Welcome to Online Health Care Service Platform</h1>
                            <Button variant="danger"><Link style={{ margin: '10px', textDecoration: 'none', color: 'white' }} to="/"> Overall Sevices</Link></Button>{' '}
                        </Col>
                        <Col xs={12} md={7}>
                            <Carousel variant="dark">
                                <Carousel.Item>
                                    <img
                                        style={{ height: '400px', width: '550px' }}
                                        className="d-block w-100"
                                        src={banner1}
                                        alt="First slide"
                                    />
                                    <Carousel.Caption >
                                        <h5 style={{ color: 'black' }}>Quality Care</h5>
                                        <p> As a bulk billing practice, we bulk bill all patients who hold a valid Medicare card for all Medicare-eligible procedures.This means no out-of-pocket costs for most general consultations.
                                        </p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        style={{ height: '400px', width: '550px' }}
                                        className="d-block w-100"
                                        src={banner2}
                                        alt="Second slide"
                                    />
                                    <Carousel.Caption>
                                        <h5 style={{ color: 'black' }}>Quality Care</h5>
                                        <p> As a bulk billing practice, we bulk bill all patients who hold a valid Medicare card for all Medicare-eligible procedures.This means no out-of-pocket costs for most general consultations.
                                        </p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        style={{ height: '400px', width: '550px' }}
                                        className="d-block w-100"
                                        src={banner3}
                                        alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                        <h5 style={{ color: 'black' }}>Quality Care</h5>
                                        <p> As a bulk billing practice, we bulk bill all patients who hold a valid Medicare card for all Medicare-eligible procedures.This means no out-of-pocket costs for most general consultations.
                                        </p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                    </Row>
                </Container>
            </Card>
        </div>

    );
};

export default Banner;