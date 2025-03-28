import React from 'react';
import Todo from '../MyComponents/Todo'

function onDelete() {
    
}

function Todos(props) {
    return (
        <div className='container'>
            <h3 className='text-center'>Todos List</h3>

            {
                props.todos.map(todo => <Todo onDelete={onDelete} key={todo.sno} todo={todo} />)
            }

        </div>
    );
}

export default Todos;