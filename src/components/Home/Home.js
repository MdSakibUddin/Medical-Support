import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import DoctorServices from '../DoctorServices/DoctorServices';
import More from '../More/More';
import About from '../About/About';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <About></About>
            <DoctorServices></DoctorServices>
            <More></More>
            <Footer></Footer>
        </div>
    );
};

export default Home;