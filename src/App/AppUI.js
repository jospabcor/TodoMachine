import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoItem } from '../TodoItem';
import { TodoForm } from '../TodoForm';
import { Modal } from '../Modal';

function AppUI() {
    const {error,loading,filteredTodos,completeTodo,removeTodo,openModal} = React.useContext(TodoContext);
    return(
        <React.Fragment>
        <TodoCounter/>
        <TodoSearch/>
            
        <TodoList>
            {error && <p>Hubo un error</p>}
            {loading && <p>Cargando...</p>}
            {(!loading && !filteredTodos.length) && <p>Crea tu primer TODO</p>}
            
            {filteredTodos.map(todo => (       
                <TodoItem key={todo.text} text={todo.text} completed={todo.completed} onComplete={() => completeTodo(todo.text)} onDelete={()=> removeTodo(todo.text)}/>        
            ))}
        </TodoList>
      
        {openModal && (
            <Modal>
            <TodoForm/>
            </Modal>
        )}
        <CreateTodoButton/>
          
        </React.Fragment>
    );

}

export {AppUI};