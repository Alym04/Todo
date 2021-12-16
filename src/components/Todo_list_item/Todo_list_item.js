import React from 'react';
import './Todo_list_item.css'
const TodoListItem = ({ task ,onDelete,form}) => {
    console.log(form);
    return (
        <div className='Item'>
            <div className="inp_item">
                <input checked={form} type="checkbox" name="" id="" />
                <span>{task.text}</span>
            </div>
            <div className='btn'>
                <button onClick={(i) => onDelete(i)} disabled={task}>X</button>
            </div>
            {/* <button onClick={click}>click</button>
      <button onClick={form} disabled={active}>btn</button> */}
        </div>
    );
};
export default TodoListItem;