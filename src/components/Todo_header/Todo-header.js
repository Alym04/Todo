import React from 'react';
import './Todo_header.css';
const TodoHeader = ({ task }) => {
    return (
        <div className='Toddo'>
            <h1>Todo List: </h1>
            <h2>Выполнено: {task.length}</h2>
            <h2>Не выполнено:</h2>
        </div>
    );
};

export default TodoHeader;