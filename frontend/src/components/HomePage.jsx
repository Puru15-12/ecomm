import React, { useEffect, useState } from 'react';
import LandingPage from './LandingPage';
import Home from './Home';
import './HomePage.css';

const HomePage = () => {
    const [showDashboard, setShowDashboard] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY === 0) {
                setShowDashboard(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`home-page ${showDashboard ? 'show-dashboard' : ''}`}>
            <LandingPage />
            <Home />
        </div>
    );
};

export default HomePage;
