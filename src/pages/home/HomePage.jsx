import React from 'react';

import { useNavigate } from 'react-router-dom'

const HomePage = () => {

    const navigate = useNavigate();

    const navigateAux = (path) => {
        navigate(path)
    };

    const navigateProps = (path) => {
        navigate({
            pathname: path,
            search: '?online=true',
            state: {
                online: true
            }
        })
    }

    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={() => navigateProps('/online-state')}>Go To with State / Query Params</button>
            <button onClick={() => navigateAux('/profile')}>Go To Profile</button>

        </div>
    );
}

export default HomePage;
