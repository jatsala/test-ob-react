import React from 'react';
import { useParams, useNavigate } from 'react-router-dom'

const TaskDetailPage = ({ tasks }) => {

    function handleGoBack() {
        navigate(-1)
    }

    const navigate = useNavigate();

    const { id } = useParams();

    const task = tasks.find((task) => task.id.toString() === id);

    return (
        <div>
            <h1>Task Detail - {id}</h1>
            <h2>{task.name}</h2>
            <h3>{task.description}</h3>
            <button onClick={handleGoBack}>Return</button>
        </div>
    );
}

export default TaskDetailPage;
