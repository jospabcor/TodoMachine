import React from 'react';
import { AppUI } from './AppUI';
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
    <AppUI 
    totalTodos={totalTodos} 
    completedTodos={completedTodos}
    searchValue={searchValue} 
    setSearchValue={setSearchValue}
    filteredTodos={filteredTodos}
    completeTodo={completeTodo}
    removeTodo={removeTodo}
    />
  );
}

export default App;
