import { useEffect, useState } from "react";
import { Row, Spinner } from "react-bootstrap";
import useData from "../../hooks/useData";
import DoctorService from "../DoctorService/DoctorService";
import './DoctorServices.css';

const DoctorServices = () => {
    const { services } = useData();

    console.log(services)

    return (
        <div id="DoctorServices" className="backgroundServices">
            <div>
                <h2 className="p-5 textCol">Doctor Services </h2>
                <div className="service-container">
                    {
                        services.length === 0 ?
                            <Spinner animation="border" /> :
                            <Row xs={1} md={3} className="g-4 pb-4 px-4">
                                {
                                    services.map(service => <DoctorService key={service.id}
                                        service={service}></DoctorService>)
                                }
                            </Row>
                    }
                </div>
            </div>
        </div>

    );
};

export default DoctorServices;