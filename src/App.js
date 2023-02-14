import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoItem } from './TodoItem';
//import './App.css';

const todos = [
  {text: 'cortar cebolla', completed:false},
  {text: 'Tomar el curso de intro de react', completed:false},
  {text: 'Llorar con la loorona', completed:false},
]

function App() {
  return (
    <React.Fragment>
    <TodoCounter/>
    <TodoSearch/>

    <TodoList>
        {todos.map(todo => (
          <TodoItem key={todo.text} text={todo.text}/>
        ))}
        </TodoList>
      <CreateTodoButton/>
      
    </React.Fragment>
  );
}

export default App;
