import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div style={{ padding: '40px', textAlign: 'center' }}>
            {/* 1. Details about the app and its purpose (H2 and Paragraph) */}
            <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '20px' }}>
                About This Application
            </h2>

            <p style={{ fontSize: '18px', color: '#555', marginBottom: '30px', maxWidth: '600px', margin: '0 auto 30px' }}>
                This application is built to provide an easy way to explore user profiles. Using React Router, it allows you to navigate from a complete list of users to their specific detail pages instantly. The goal is to manage user data efficiently while maintaining a smooth, single-page experience.
            </p>

            {/* 2. Button to go back to the Home page */}
            <Link to="/">
                <button style={{
                    padding: '10px 25px',
                    backgroundColor: '#2563eb',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: '16px'
                }}>
                    Go Back to Home
                </button>
            </Link>
        </div>
    );
};

export default About;