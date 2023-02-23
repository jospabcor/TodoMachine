import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoItem } from '../TodoItem';

function AppUI({
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    filteredTodos,
    completeTodo,
    removeTodo,
}) {
    return(
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

export {AppUI};