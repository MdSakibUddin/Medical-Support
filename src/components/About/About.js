import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './About.css';

const About = () => {
    return (
        <div id="about" className="p-5 ">
            <Container className="p-3">
                <Row>
                    <Col xs={12} md={6}>
                        <iframe width="420" height="315" src="https://www.youtube.com/embed/ECwmWJNMrIU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </Col >
                    <Col xs={12} md={6}>
                        <h2 className="text-C">Our Goal</h2>
                        <p className="textP">
                            Our goal is to provide sustainable and effective healthcare systems work by follwing these 3 targets are like appropriate access to necessary healthcare services; assurance of quality workforce,services and institutions and acceptable cost to society</p>
                    </Col>

                </Row >
            </Container >
        </div >
    );
};

export default About;