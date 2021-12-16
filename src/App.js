import React, { useState } from 'react';
import './App.css';
import TodoHeader from './components/Todo_header/Todo-header';
import AddTodo from './components/Add_Todo/Add_todo';
import TodoList from './components/Todo_list/Todo_list';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [task, setTask] = useState([
    // {
    //   text: 'Hello World',
    //   id: uuidv4(),
    //   active: false
    // },
    // {
    //   text: 'Hello ITC',
    //   id: uuidv4(),
    //   active: false
    // },
    // {
    //   text: '',
    //   id: uuidv4(),
    //   active: false
    // }
  ]);
  const [value, setValue] = useState('')
  const [active, setActive] = useState('')
  const onChange = (input) => {
    setValue(input);
  }
  const onAddText = (click) => {
    const newArr = [...task, {
      text: click,
      id: uuidv4(),
      active: false
    }]
    setTask(newArr)
    setValue('')
  }
  const onDelete = (index) => {
    const ind = task.findIndex((elem, inx) => inx === index)
    const newArr = [...task.slice(0, ind), ...task.slice(ind + 1)]
    setTask(newArr)
  }
  const click = (i) => {
    console.log(i);
  }
  const form = (i) => {
    console.log(i);
  }
  return (
    <div className="App">
      <TodoHeader task={task} />
      <AddTodo
        value={value}
        onChange={onChange}
        onAddText={onAddText}
      />
      <TodoList task={task}
        onDelete={onDelete}
        click={click}
        form={form}
      />
    </div>
  );
}
export default App;