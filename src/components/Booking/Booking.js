import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useData from '../../hooks/useData';
import BookingDetail from '../BookingDetail/BookingDetail';

const Booking = () => {
    const { serviceId } = useParams();
    console.log(serviceId);
    const services = [
        {
            id: 1,
            name: "Mike Dooley",
            speciality: "Cardiology Specialist",
            visit: 900,
            batch: "CMC2005",
            age: "45",
            location: "Sylhet Govt. Hospital",
            studyBackground: "Mike Dooley obtained his undergraduate degree in Biomedical Engineering at Tulane University prior to attending St George's University School of Medicine",
            img: "https://7oroof.com/demos/medcity/assets/images/team/1.jpg"
        },
        {
            id: 2,
            name: "Richard Muldoone",
            speciality: "Cardiology Specialist",
            visit: 600,
            batch: "DMC2007",
            age: 42,
            location: "Comilla General Hospital",
            studyBackground: "Richard Muldoone specializes in treating skin, hair, nail, and mucous membrane. He also address cosmetic issues, helping to revitalize the appearance of the skin",
            img: "https://7oroof.com/demos/medcity/assets/images/team/2.jpg"
        },
        {
            id: 3,
            name: "Maria Andaloro",
            speciality: "Pediatrician Specialist",
            visit: 700,
            batch: "DMC2009",
            age: 38,
            location: "Dhaka Polpular Hospital",
            studyBackground: "Maria Andaloro graduated from medical school and completed 3 years residency program in pediatrics. She passed rigorous exams by the American Board of Pediatrics.",
            img: "https://7oroof.com/demos/medcity/assets/images/team/3.jpg"
        },
        {
            id: 4,
            name: "Kiano Barker",
            speciality: "Pathologist Specialist ",
            visit: 1200,
            batch: "DMC2011",
            location: "Chittagong Metropolitan ",
            age: 43,
            studyBackground: "Kiano Barker help care for patients every day by providing their doctors with the information needed to ensure appropriate care. He also valuable resources for other physicians.",
            img: "https://7oroof.com/demos/medcity/assets/images/team/4.jpg"
        },
        {
            id: 5,
            name: "Sayem Mahmud",
            speciality: "Cardiac Specialist",
            visit: 1000,
            batch: "CMC2010",
            location: "Dhaka Max Hospital",
            age: 35,
            studyBackground: "Sayem Mahmud graduated from medical school and completed 3 years residency program in pediatrics. She passed rigorous exams by the American Board of Pediatrics.",
            img: "data:image/jpeg;base64,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"
        },
        {
            id: 6,
            name: "Sama Mollick",
            speciality: "gynecologist Specialist",
            visit: 800,
            batch: "CMC2013",
            age: 40,
            location: "Dhaka Eye Hospital",
            studyBackground: "Sama Mollick obtained his undergraduate degree in Biomedical Engineering at Tulane University prior to attending St George's University School of Medicine",
            img: "https://www.woodlandshospital.in/images/doctor-img/ravi-kant-saraogi.jpg"
        }
    ]
    const user = services.filter((user) => user.id == serviceId)
    console.log(user);
    return (
        <div>

            {
                user.map(show => <BookingDetail key={show.id}
                    show={show}></BookingDetail>)
            }
        </div>
    );
};

export default Booking;