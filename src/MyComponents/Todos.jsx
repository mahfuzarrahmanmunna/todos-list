import React from 'react';
import Todo from '../MyComponents/Todo'



function Todos({ todos, onDelete }) {
    return (
        <div className='container'>
            <h3 className='text-center'>Todos List</h3>

            {
                todos.map(todo => <Todo onDelete={onDelete} key={todo.sno} todo={todo} />)
            }

        </div>
    );
}

export default Todos;