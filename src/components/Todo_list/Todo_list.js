import React from 'react';
import TodoHeader from '../Todo_header/Todo-header';
import TodoListItem from '../Todo_list_item/Todo_list_item';
import './Todo_list.css'
const TodoList = ({ task ,onDelete,form,click}) => {
    return (
        <div className='TodoList'>
            {
                task.map((e, i) => {
                    return (
                        <TodoListItem  
                        onDelete={()=>onDelete(i)}task={e} form={e} click={e}/>
                    )
                })
            }
        </div>
    );
};

export default TodoList