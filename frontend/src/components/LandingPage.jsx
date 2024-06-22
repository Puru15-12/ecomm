import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
    const imageContainerStyle = {
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        marginTop: '20px',
    };

    const imageStyle = {
        width: '150px',
        height: 'auto',
        borderRadius: '10px',
    };

    const lastImageStyle = {
        width: '300px', // Larger width for the last image
        height: 'auto',
        borderRadius: '10px',
    };
    return (
        <div className="landing-page">
            <div className="content">
                <h1>Welcome to Our Eco-Friendly Store</h1>
                <p>Discover a range of eco-friendly products that help reduce your environmental footprint.</p>
                <p>Our mission is to provide sustainable options for everyday needs while promoting a healthier planet.</p>
                
                <div style={imageContainerStyle}>
                    <img src="../micheile-henderson-wwTvwS9vKZs-unsplash.jpg" alt="Eco-Friendly Products" style={imageStyle}  />
                    <img src="../danist-soh-n-3Pn7Ybe-s-unsplash.jpg" alt="Sustainable Living" style={imageStyle} />
                    <img src="../markus-spiske-4PG6wLlVag4-unsplash.jpg" alt="Sustainable Living" style={lastImageStyle} />
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
