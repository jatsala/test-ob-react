import React, { useState } from 'react';

const Todo = ({ todo }) => {

    const { id, text, completed } = todo;
    const [checked, setChecked] = useState(completed);

    return (
        <div data-testid={`todo-test-${id}`}>
            <label htmlFor="">
                <input type="checkbox" checked={checked} id='checkbox' onChange={() => setChecked(!checked)} />
                {text}
            </label>
        </div>
    )
}

export default Todo
