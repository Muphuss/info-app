// src/components/HomePage.js
import React, { useState, useEffect } from 'react';
import InfoCard from './InfoCard';
import InfoModal from './InfoModal';
import './HomePage.css';
import ScrollToTopButton from '../components/ScrollToTopButton'; 

const HomePage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState({ title: '', content: '' });
    const [isVisible, setIsVisible] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

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

    const cardsData = [
        { title: 'Unser "Wiki"', description: '"Confluence"', link: 'https://prime-force-frankfurt.atlassian.net/wiki/spaces/TRUEIN/overview', content: 'Alle Informationen zu CBM, Evonik, Organisation, AEM, ProRes und deren Umgebung finden Sie in den entsprechenden Bereichen unserer Webseite.', icon: 'fa-solid fa-file-lines' },
        { title: 'Orga', description: 'Organisatorisches', link: 'https://prime-force-frankfurt.atlassian.net/wiki/x/FgBQd', content: 'Alles für Orga sachen.', icon: 'fa-regular fa-clipboard' },
        { title: 'CBM', description: '"Confluence"', link: 'https://prime-force-frankfurt.atlassian.net/wiki/spaces/CBM/pages', content: 'Alles über Die Christoffel Blindenmission', icon: 'fa-solid fa-braille' },
        { title: 'AEM', description: 'Umgebungen der DZ BANK', link: 'https://prime-force-frankfurt.atlassian.net/wiki/x/AQA0qw', content: '...', icon: 'fa-solid fa-piggy-bank' },
        { title: 'Infos zur 0er AEM Umgebung', description: '(Linie)', link: 'https://prime-force-frankfurt.atlassian.net/wiki/x/BQDGow', content: '...', icon: 'fa-solid fa-layer-group' },
        { title: 'ProRes', description: '', link: 'https://prime-force-frankfurt.atlassian.net/wiki/x/y4CWKQ', content: '...', icon: 'fa-solid fa-images' },
    ];

    
    const filteredCards = cardsData.filter(card =>
        card.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className={`home-page ${isVisible ? 'active' : ''}`}>
            <h1 data-aos="fade-down">Info</h1>
            <input
                data-aos="fade-up"
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
            />
            <div className="cards-container" data-aos="fade-right">
                {filteredCards.length > 0 ? (
                    filteredCards.map((card, index) => (
                        <InfoCard
                            key={index}
                            title={card.title}
                            description={card.description}
                            link={card.link}
                            icon={card.icon}
                            onCardClick={() => openModal(card.title, card.content)}
                            showChevron={false}
                        />
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

export default HomePage;
