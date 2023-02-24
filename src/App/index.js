import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext';
//import './App.css';

/*const defaultTodos = [
  {text: 'cortar cebolla', completed:true},
  {text: 'Tomar el curso de intro de react', completed:false},
  {text: 'Llorar con la llorona', completed:false},
]*/


function App() {
 


  return (
    <TodoProvider>
    <AppUI/>
    </TodoProvider>
  );
}

export default App;
