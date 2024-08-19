import React, { useState, useEffect } from 'react';
import InfoCard from './InfoCard';
import InfoModal from './InfoModal';
import ScrollToTopButton from './ScrollToTopButton';
import Filter from './Filter';  // Import the Filter component
import './ProjectPage.css';

const ProjectPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState({ title: '', content: '' });
    const [expandedProject, setExpandedProject] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('');

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const openModal = (title, content) => {
        setModalContent({ title, content });
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const toggleProject = (index) => {
        setExpandedProject(expandedProject === index ? null : index);
    };

    const handleFilterChange = (selectedFilter) => {
        setFilter(selectedFilter);
    };

const projectsData = [
        { 
            title: 'Amag', 
            description: 'Ist die größte Automobilhandelsgruppe der Schweiz und bietet umfassende Dienstleistungen rund ums Auto an.',
            link: 'https://www.amag.ch/de/',  
            logo: './Assets/images/Amag-logo-transparent.png',
            subCards: [
                { title: 'AMAG CH', description: 'AMAGs online Auftritt für die Schweiz(Hauptsitz)', link: 'https://www.amag.ch/de/', icon: 'fas fa-globe'},
                { title: 'AMAG Zeiterfassung', description: 'Zeiterfassung für Mitarbeiter', link: 'https://zeiterfassung.amag.ch/', icon:'fa-regular fa-clock'  },
                { title: 'Intranet', description: 'Intranet für AMAG Mitarbeiter', link: 'https://intranet.amag.ch/', icon:'fa-solid fa-network-wired'  },
                { title: 'Webmail', description: 'Webmail für AMAG Mitarbeiter', link: 'https://webmail.amag.ch/', icon:'fa-regular fa-envelope' },
                { title: 'Wiki', description: 'Wiki für AMAG Mitarbeiter', link: 'https://wiki.amag.ch/', icon:'fa-brands fa-wikipedia-w'  },
            ]
        },
        { 
            title: 'DZ Bank', 
            description: 'Die DZ Bank AG ist das Spitzeninstitut der Genossenschaftlichen FinanzGruppe Volksbanken Raiffeisenbanken.', 
            link: 'https://www.dzbank.de/', 
            logo: './Assets/images/DZ-Bank-logo.png',
            subCards: [
                { title: 'SVRBP', description: 'Das Smarte VR-Bankenportal(SVRBP) ist ein Online-Portal für die Volksbanken Raiffeisenbanken.', link: 'https://www.vr-bankenportal.de/', icon: 'fas fa-globe'},
                { title: 'DZ Bank Citrix', description: 'Citrix für DZ Bank Mitarbeiter', link: 'https://partner.dzbank.de/', icon:'fa-solid fa-xmark'   },
                { title: 'Genowiki', description: 'Wiki für DZ Bank Mitarbeiter', link: 'https://www.genowiki.de/', icon:'fa-brands fa-wikipedia-w' },
                { title: 'DZ Bank GitLab"', description: 'GitLab für DZ Bank Mitarbeiter', link: 'https://git.dzbank.vrnet/', icon:'fa-brands fa-gitlab' },
            ]
        },
        { 
            title: 'Evonik', 
            description: 'Die Evonik Industries AG mit Sitz in Essen ist ein deutscher Industriekonzern mit dem Geschäftsfeld Chemie.', 
            link: 'https://www.evonik.de/', 
            logo: './Assets/images/Evonik-logo.png',
            subCards: [
                { title: 'Adobe', description: 'AEM, Elements, Evonik DXP, etc.', link: '', icon:'fa-solid fa-a' },
                { title: 'Integration Service', description: 'SQL Server Integration Services ist eine Plattform zum Erstellen von Datenintegrations- und Datentransformationslösungen auf Unternehmensniveau', link: '', icon:'fa-solid fa-database'  },
                { title: 'ISV', description: 'Ein unabhängiger Softwareanbieter, auch als Softwareherausgeber bekannt, ist eine Organisation, die sich auf die Herstellung und den Verkauf von Software spezialisiert hat', link: '', icon:'fa-solid fa-server'  },
                { title: 'Elastic Search', description: 'Elasticsearch ist die führende verteilte, RESTful Suchmaschine und Analytics Engine und bietet Geschwindigkeit', link: '', icon:'fa-solid fa-magnifying-glass'  },
                { title: 'Synchronize Git Repositories to Cloud Manager', description: '', link: '', icon:'fa-solid fa-rotate'  },
            ]
        },
        { 
            title: 'Boehringer Ingelheim', 
            description: 'Boehringer Ingelheim umfasst Unternehmen, die auf die Entwicklung und Vermarktung innovativer Arzneimittel spezialisiert sind.', 
            link: '#', 
            logo: './Assets/images/boehringer-logo.png',
            subCards: [
                { title: '', description: '', link: '' },
                { title: '', description: '', link: '',  },
                { title: '', description: '', link: '',  },
                { title: '', description: '', link: '',  },
            ]
        },
        { 
            title: 'Unitymedia', 
            description: 'Der Internetanbieter Vodafone Unitymedia hat mit der Übernahme von Unitymedia sein Kabelnetz weiter vergrößert.', 
            link: '#', 
            logo: './Assets/images/images-removebg-preview.png',
            subCards: [
                { title: '', description: '', link: '' },
                { title: '', description: '', link: '',  },
                { title: '', description: '', link: '',  },
                { title: '', description: '', link: '',  },
            ]
        },
        { 
            title: 'CBM', 
            description: 'Ziel der CBM ist es, den Kreislauf aus Armut und Behinderung in Entwicklungsländern zu durchbrechen.', 
            link: '#', 
            logo: './Assets/images/CBM-logo-removebg-preview.png',
            subCards: [
                { title: '', description: '', link: '' },
                { title: '', description: '', link: '',  },
                { title: '', description: '', link: '',  },
                { title: '', description: '', link: '',  },
            ]
        },
        { 
            title: 'HUECK', 
            description: 'Gehört zu den führenden Anbietern von Aluminiumprofilen für Fenster-, Türen- und Fassadensysteme sowie für die Industrie.', 
            link: '#', 
            logo: './Assets/images/hueck-logo-removebg-preview.png',
            subCards: [
                { title: '', description: '', link: '' },
                { title: '', description: '', link: '',  },
                { title: '', description: '', link: '',  },
                { title: '', description: '', link: '',  },
            ]
        },
        { 
            title: 'Ray Sono', 
            description: 'Wegbereiter und Wegbegleiter in der Digitalisierung, gestalten seit 1992 die digitale Welt von Unternehmen und Organisationen.', 
            link: '#', 
            logo: './Assets/images/raysono-logo-removebg-preview.png',
            subCards: [
                { title: '', description: '', link: '' },
                { title: '', description: '', link: '',  },
                { title: '', description: '', link: '',  },
                { title: '', description: '', link: '',  },
            ]
        },
        { 
            title: 'Adobe solution Partner', 
            description: 'Wurde für Unternehmen konzipiert, die Lösungen für digitales Marketing, Services und integrierte Technologien bereitstellen.', 
            link: '#', 
            logo: './Assets/images/adobe_solution.webp',
            subCards: [
                { title: '', description: '', link: '' },
                { title: '', description: '', link: '',  },
                { title: '', description: '', link: '',  },
                { title: '', description: '', link: '',  },
            ]
        },
        { 
            title: 'kassenzahnärztliche vereinigung', 
            description: 'KZV Hessen ist als modernes Dienstleistungsunternehmen ihren Mitgliedern und Patienten verpflichtet und berät rund um die Abrechnung.', 
            link: '#', 
            logo: './Assets/images/KZV-logo-removebg-preview.png',
            subCards: [
                { title: '', description: '', link: '' },
                { title: '', description: '', link: '',  },
                { title: '', description: '', link: '',  },
                { title: '', description: '', link: '',  },
            ]
        },
        { 
            title: 'Magnolia gold Partner', 
            description: 'Magnolia Solution Partner sind neue Dienstleister im Magnolia-Partnernetzwerk, die durch Trainings und Zertifizierungen ihre Stärken erweitern.', 
            link: '#', 
            logo: './Assets/images/Magnolia-logo.png',
            subCards: [
                { title: '', description: '', link: '' },
                { title: '', description: '', link: '',  },
                { title: '', description: '', link: '',  },
                { title: '', description: '', link: '',  },
            ]
        },
        { 
            title: 'AWS Partner', 
            description: 'AWS ist die führende Plattform für suchbasierte Lösungen und hilft Unternehmen, schneller zu finden, was sie suchen, und Anwendungen zu schützen.', 
            link: '#', 
            logo: './Assets/images/AWS-removebg-preview.png',
            subCards: [
                { title: '', description: '', link: '' },
                { title: '', description: '', link: '',  },
                { title: '', description: '', link: '',  },
                { title: '', description: '', link: '',  },
            ]
        },
        
        
        
    ];


    const filteredProjects = projectsData
        .filter(project =>
            project.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .sort((a, b) => {
            if (filter === 'alphabetic') {
                return a.title.localeCompare(b.title);
            } else if (filter === 'date-newest') {
                return new Date(b.date) - new Date(a.date);
            }
            return 0;
        });

    return (
        <div className={`project-page ${isVisible ? '' : ''}`}>
            <h1 data-aos="fade-down" className='project-info'>Projects</h1>
            <div className="search-container">
                <input data-aos="fade-up"
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className={`search-input`}
                />
                <Filter onFilterChange={handleFilterChange} />
            </div>
            <div className="cards-container" data-aos="fade-left">
                {filteredProjects.length > 0 ? (
                    filteredProjects.map((project, index) => (
                        <div key={index}>
                            <InfoCard
                                title={project.title}
                                description={project.description}
                                link={project.link}
                                logo={project.logo}
                                isExpanded={expandedProject === index}
                                onCardClick={() => toggleProject(index)}
                                chevronClass={expandedProject === index ? 'rotated' : ''}
                            />
                            <div className={`sub-cards-container ${expandedProject === index ? 'expanded' : ''}`}>
                                {project.subCards.map((subCard, subIndex) => (
                                    <InfoCard
                                        key={subIndex}
                                        title={subCard.title}
                                        description={subCard.description}
                                        link={subCard.link}
                                        icon={subCard.icon}
                                        isSubcard
                                    />
                                ))}
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No results found.</p>
                )}
            </div>
            <InfoModal
                isOpen={isModalOpen}
                onDismiss={closeModal}
                title={modalContent.title}
                content={modalContent.content}
            />
            <ScrollToTopButton />
        </div>
    );
};

export default ProjectPage;
