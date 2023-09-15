import React from 'react';

import { useLocation, useNavigate } from 'react-router-dom'

const AboutPage = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const navigateTo = (path) => {
        navigate(path)
    };

    const goBack = () => {
        navigate(-1)
    }

    const goForward = () => {
        navigate(1)
    }

    console.log('We are in Route:', location.pathname); // '/about | /faqs'


    return (
        <div>
            <h1>About | FAQs</h1>
            <div>
                <button onClick={() => navigateTo('/')}>
                    Go to Home
                </button>
                <button onClick={goBack}>
                    Go Back
                </button>
                <button onClick={goForward}>
                    Go Forward
                </button>
            </div>
        </div>
    );
}

export default AboutPage;
