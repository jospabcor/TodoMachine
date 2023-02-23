import React from 'react';
import { AppUI } from './AppUI';
//import './App.css';

/*const defaultTodos = [
  {text: 'cortar cebolla', completed:true},
  {text: 'Tomar el curso de intro de react', completed:false},
  {text: 'Llorar con la llorona', completed:false},
]*/

function useLocalStorage(itemName, initialValue) {
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);
  React.useEffect(() => {
    setTimeout(() => {
      try {
        let localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if(!localStorageItem){
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        }else{
          parsedItem = JSON.parse(localStorageItem);
        }
        setItem(parsedItem);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
      
    },1000)
  },[])
  

  

  const saveItem = (newItem) =>{
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch (error) {
      setError(error);
    }
}

 return {
  item,
  saveItem,
  loading,
  error,
 };
}

function App() {
  const {
    item: todos, 
    saveItem: saveTodos,
    loading,
    error,
   } = useLocalStorage('TODOS_V1', []);

 
  const [searchValue, setSearchValue] = React.useState('');
  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;
  const filteredTodos = todos.filter(todo =>  todo.text.toLowerCase().includes(searchValue.toLocaleLowerCase()));

  const completeTodo = (text) =>{
    const todoIndex = todos.findIndex(todo => todo.text === text); 

    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);

  }

  const removeTodo = (text) =>{
    const todoIndex = todos.findIndex(todo => todo.text === text); 

    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }


  return (
    <AppUI 
    loading={loading} 
    error={error}
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
