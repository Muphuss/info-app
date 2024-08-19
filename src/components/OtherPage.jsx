// src/components/OtherPage.js

import React from 'react';
import './OtherPage.css';
import Footer from './Footer';
import ScrollToTopButton from '../components/ScrollToTopButton'; 


const OtherPage = () => {
    return (
        <div className="other-page" data-aos="fade-down" >
            <h1 data-aos="fade-down">Contact Information</h1>
            <div className="contact-info">
                <div className="contact-item" data-aos="fade-down">
                    <h2 data-aos="fade-left" >Phone Numbers</h2> <br />
                    <p>Zentrale: <a href="tel:+1234567890">(069) 588 09 85</a></p> <br />
                    <p>Oliver Fabry: <a href="tel:069 588098562">(069) 588 09 85 62</a></p>
                    <p>Christian Schäfer: <a href="tel:069 588098563">(069) 588 09 85 63</a></p>
                    <p>Rudolf Hartmann: <a href="tel:069 588098561">(069) 588 09 85 61</a></p>
                </div>
                <div className="contact-item" data-aos="fade-right" >
                    <h2>Email Addresses</h2>
                    <p>Generelle Anliegen: <a href="mailto:urlaub@trueinnovation.com">urlaub@trueinnovation.de</a></p>
                    <p>Sekretariat: <a href="mailto:info@trueinnovation.com">info@trueinnovation.de</a></p>
                </div>
                <div className="contact-item" data-aos="fade-left">
                    <h2>Address</h2>
                    <p>60325 Frankfurt am Main</p>
                    <p>Mendelssohnstraße 75-77</p>
                </div>
            </div>
            <div className="additional-info" data-aos="fade-right">
                <h2>more info</h2>
                <p>
                 Willkommen bei True Innovation! Bei Fragen oder Anliegen jederzeit über die angegebenen Kontaktdaten erreichbar.
                 Krankmeldungen ab dem 3. Tag bitte auch an die <a href="mailto:urlaub@trueinnovation.com">Urlaub</a> Mail
                </p>
               
            </div>
            <ScrollToTopButton />
            <Footer />
        </div>
        
    );
};

export default OtherPage;
