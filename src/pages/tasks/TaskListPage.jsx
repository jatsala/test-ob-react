import React from 'react';
import { Link } from 'react-router-dom';

const TaskListPage = ({ tasks }) => {
    return (
        <section>
            <h1>Task List</h1>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <Link to={`/taskList/${task.id}`}>{task.name}</Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default TaskListPage;
