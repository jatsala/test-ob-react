import React from 'react';
import { useNavigate } from 'react-router-dom'

const ProfilePage = (user) => {
    const navigate = useNavigate()

    const navigateTo = (path) => {
        navigate(path)
    }

    const goBack = () => {
        navigate(-1)
    }

    return (
        <div>
            <h1>Your Profile</h1>
            <button onClick={() => navigateTo('/tasks')}>tour tasks</button>
            <button onClick={goBack}>Go Back</button>
        </div>
    );
}

export default ProfilePage;
