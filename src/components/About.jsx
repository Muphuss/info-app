import React from 'react';
import './About.css'; 
import Timeline from './Timeline';
import {Parallax} from 'react-parallax';
import ScrollToTopButton from '../components/ScrollToTopButton'; 




const AboutUsPage = () => {
    return (
        <div id='top-scroll' className="about-us-page">
            <header className="about-us-header" data-aos="fade-down" >
                
            </header>

            <nav className="about-us-menu" data-aos="fade-left">
                <a href="#timeline-section">Timeline</a>
                <a href="#team-section">Team</a>
                <a href="#gallery-section">Gallery</a>
            </nav>


            <Parallax
                bgImage="./Assets/images/true-innovation-upscale.jpg"
                strength={760}
            >
                <div className="parallax-container">
                    <div className="parallax-content">
                        <h1>About Us</h1>
                        <p>We are passionate about delivering the best solutions.</p>
                    </div>
                </div>
            </Parallax>



            {/* Office Overview */}
            <section className="office-overview" data-aos="fade-right">
                <h2 data-aos="zoom-in" >Technologie und Services</h2>
                <p>Unser Leistungsspektrum erstreckt sich von der Konzeption, Produktion, technischer Umsetzung, Migration und Schulung bis zum dem Launch und der laufenden Betreuung. Zu unserer Expertise gehören E-Commerce Lösungen wie SAP Hybris und Salesforce, sowie bewährte Content-Management-System wie Magnolia CMS.</p>
                <p data-aos="fade-up" >Unsere Entwickler und Berater sind in der E-Commerce-Welt immer up to date. Profitieren Sie von unserem stetig wachsenden Know-how.</p>
            </section>

            {/* Timeline Section */}
            <section id="timeline-section" data-aos="fade-up" >
                <h2>Timeline:</h2>
                <Timeline data-aos="fade-up" />
            </section>

            {/* Team Members Section */}

                
                <section id='team-section' className="team-members" >
                <h2>Das Team</h2>
                <div data-aos="fade-right" className="team-member">
                    <img className='us-pic' src="/Assets/images/image-us.jpg" alt="Team" />
                    <h3>Weihnachtsfeier 2023</h3>
                </div>


                {/* SEO's */}


                <div data-aos="fade-left" className="team-member" >
                    <img src="https://via.placeholder.com/150" alt="Jane Smith" />
                    <h3>Rudolf Hartmann</h3>
                    <p>CEO</p>
                    <p>Text..</p>
                </div>

                <div data-aos="fade-right" className="team-member">
                    <img src="https://via.placeholder.com/150" alt="Jane Smith" />
                    <h3>Oliver Fabry</h3>
                    <p>CEO</p>
                    <p>Text..</p>
                </div>


                <div data-aos="fade-left" className="team-member">
                    <img src="https://via.placeholder.com/150" alt="Jane Smith" />
                    <h3>Christian Schäfer</h3>
                    <p>CEO</p>
                    <p>Text...</p>
                </div>

            
                {/* Projektleiter */}


                <div data-aos="zoom-out" className="team-member">
                    <img src="https://via.placeholder.com/150" alt="Jane Smith" />
                    <h3>Name PL </h3>
                    <p>Projektleiter</p>
                    <p>Text...</p>
                </div>

                <div data-aos="fade-left" className="team-member">
                    <img src="https://via.placeholder.com/150" alt="Jane Smith" />
                    <h3>Name PL 2</h3>
                    <p>Projektleiter</p>
                    <p>Text...</p>
                </div>

              {/* Berater */}   


                <div data-aos="fade-right" className="team-member">
                    <img src="https://via.placeholder.com/150" alt="Jane Smith" />
                    <h3>Berater name</h3>
                    <p>Berater</p>
                    <p>Text...</p>
                </div>


                <div data-aos="fade-left" className="team-member">
                    <img src="https://via.placeholder.com/150" alt="Jane Smith" />
                    <h3>Berater name</h3>
                    <p>Berater</p>
                    <p>Text...</p>
                </div>

                {/* Konzepter */} 

                <div data-aos="fade-right" className="team-member">
                    <img src="https://via.placeholder.com/150" alt="Jane Smith" />
                    <h3>Konzepter Name</h3>
                    <p>Konzepter</p>
                    <p>Text...</p>
                </div>

                {/* Frontend Entwickler */} 

                <div data-aos="fade-right" className="team-member">
                    <img src="https://via.placeholder.com/150" alt="Jane Smith" />
                    <h3>FrontendEntwickler Name</h3>
                    <p>Frontend Entwickler</p>
                    <p>Text...</p>
                </div>

                <div data-aos="fade-left" className="team-member">
                    <img src="https://via.placeholder.com/150" alt="Jane Smith" />
                    <h3>FrontendEntwickler Name</h3>
                    <p>Frontend Entwickler</p>
                    <p>Text...</p>
                </div>

                <div data-aos="fade-right" className="team-member">
                    <img src="https://via.placeholder.com/150" alt="Jane Smith" />
                    <h3>FrontendEntwickler Name</h3>
                    <p>Frontend Entwickler</p>
                    <p>Text...</p>
                </div>

                <div data-aos="fade-left" className="team-member">
                    <img src="https://via.placeholder.com/150" alt="Jane Smith" />
                    <h3>FrontendEntwickler Name</h3>
                    <p>Frontend Entwickler</p>
                    <p>Text...</p>
                </div>

                <div data-aos="fade-right" className="team-member">
                    <img src="https://via.placeholder.com/150" alt="Jane Smith" />
                    <h3>FrontendEntwickler Name</h3>
                    <p>Frontend Entwickler</p>
                    <p>Text...</p>
                </div>


                {/* Backend Entwickler */} 


                <div data-aos="fade-left" className="team-member">
                    <img src="https://via.placeholder.com/150" alt="Jane Smith" />
                    <h3>Backend Entwickler Name</h3>
                    <p>Backend Entwickler</p>
                    <p>Text...</p>
                </div>

                <div data-aos="fade-right" className="team-member">
                    <img src="https://via.placeholder.com/150" alt="Jane Smith" />
                    <h3>Backend Entwickler Name</h3>
                    <p>Backend Entwickler</p>
                    <p>Text...</p>
                </div>

                <div data-aos="fade-left" className="team-member">
                    <img src="https://via.placeholder.com/150" alt="Jane Smith" />
                    <h3>Backend Entwickler Name</h3>
                    <p>Backend Entwickler</p>
                    <p>Text...</p>
                </div>

                <div data-aos="fade-right" className="team-member">
                    <img src="https://via.placeholder.com/150" alt="Jane Smith" />
                    <h3>Backend Entwickler Name</h3>
                    <p>Backend Entwickler</p>
                    <p>Text...</p>
                </div>


                {/* Texter */} 


                <div data-aos="fade-left" className="team-member">
                    <img src="https://via.placeholder.com/150" alt="Jane Smith" />
                    <h3>Texter Name</h3>
                    <p>Texter </p>
                    <p>Text...</p>
                </div>


                <div data-aos="fade-right" className="team-member">
                    <img src="https://via.placeholder.com/150" alt="Jane Smith" />
                    <h3>Texter Name</h3>
                    <p>Texter </p>
                    <p>Text...</p>
                </div>


                {/* Tester */} 

                <div data-aos="fade-left" className="team-member">
                    <img src="https://via.placeholder.com/150" alt="Jane Smith" />
                    <h3>Tester Name</h3>
                    <p>Tester </p>
                    <p>Text...</p>
                </div>

                <div data-aos="fade-right" className="team-member">
                    <img src="https://via.placeholder.com/150" alt="Jane Smith" />
                    <h3>Tester Name</h3>
                    <p>Tester </p>
                    <p>Text...</p>
                </div>

            </section>


            <nav className="about-us-menu">
                <a href="#timeline-section">Timeline</a>
                <a href="#team-section">Team</a>
                
            </nav>

            {/* Gallery Section */}
            <section id="gallery-section" className="office-images">
                <h2>Office Tour</h2>
                <div className="gallery">
                    <img src="https://via.placeholder.com/300" alt="Office Image 1" />
                    <img src="https://via.placeholder.com/300" alt="Office Image 2" />
                </div>
            </section>

            <ScrollToTopButton />

        </div>
    );
};

export default AboutUsPage;
