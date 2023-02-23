import React from 'react';
import './CreateTodoButton.css';



function CreateTodoButton(props){ 
    const onClickButton = (msg) => {
         alert(msg);
    }
    return(
        <button className='CreateTodoButton'
            onClick={() => onClickButton("You clicked the button")}
        >
            +
        </button>
    );
}

export { CreateTodoButton };