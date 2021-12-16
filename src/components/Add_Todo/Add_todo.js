import React from 'react';
import TodoListItem from '../Todo_list_item/Todo_list_item';
import './Add_todo.css'
const Addtodo = ({ onAddText, onChange, value }) => {

    return (
        <div>
            <div className='inp'>
                <input onChange={(e)=> onChange(e.target.value)} 
                value={value} type="text" 
                placeholder='Введите значение...' 
              />
                <button onClick={()=> onAddText(value)}>Добавить</button>
            </div>
        </div >
    );
};

export default Addtodo;