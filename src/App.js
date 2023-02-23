import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoItem } from './TodoItem';
//import './App.css';

const defaultTodos = [
  {text: 'cortar cebolla', completed:true},
  {text: 'Tomar el curso de intro de react', completed:false},
  {text: 'Llorar con la llorona', completed:false},
]

function App() {

  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');
  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;
  const filteredTodos = todos.filter(todo =>  todo.text.toLowerCase().includes(searchValue.toLocaleLowerCase()));

  const completeTodo = (text) =>{
    const todoIndex = todos.findIndex(todo => todo.text === text); 

    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);

  }

  const removeTodo = (text) =>{
    const todoIndex = todos.findIndex(todo => todo.text === text); 

    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }


  return (
    <React.Fragment>
    <TodoCounter total={totalTodos} completed={completedTodos}/>
    <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>

    <TodoList>
        {filteredTodos.map(todo => (       
           <TodoItem key={todo.text} text={todo.text} completed={todo.completed} onComplete={() => completeTodo(todo.text)} onDelete={()=> removeTodo(todo.text)}/>        
        ))}
        </TodoList>
      <CreateTodoButton/>
      
    </React.Fragment>
  );
}

export default App;
