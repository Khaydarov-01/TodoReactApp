import React from 'react';

const TodoList = ({value, dispatch}) => {
    return (
        <div className="todoList">
            <h2 style={{color: value.completed ? 'red' : 'white'}}>{value.name}</h2>
            <button onClick={() => dispatch({type: 'Olindi', payload:{id: value.id}})}>Olindi</button>
            <button onClick={() => dispatch({type: 'O\'chirilsin', payload:{id: value.id}})}>O'chirish</button>
        </div>
    );
};

export default TodoList;