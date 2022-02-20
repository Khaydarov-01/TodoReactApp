import React, {useState, useReducer} from 'react'; 
import '../style/styled.css';
import TodoList from './TodoList';

const Main = () => {
      const reducer = (state, action) => {
          switch(action.type) {
              case 'Add': 
              return [...state, {id: Date.now(), name: action.payload.name, completed: false}];
              case 'Olindi':
                return state.map((todo) => {
                       if(todo.id === action.payload.id){
                           return {...todo, completed: !todo.completed }
                       }
                       return todo;
                });
              case "O'chirilsin":
                  return state.filter((todo) => todo.id !== action.payload.id);
              default: return state;
          }
      }
      
      const [name, setName] = useState('');
      const [todos, dispatch] = useReducer(reducer, []);
      
      const handleChange = () => {
          dispatch({type: 'Add', payload: {name: name}});
          setName('');
      }
    return (
        <div>
            <div className="navbar">
              <div className="search-bar">
              <i class="fa-solid fa-magnifying-glass"></i>
              <input value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <button onClick={handleChange}>Narsa Qo'shish</button>
        </div>
        {
            todos.map((value) => {
                return <TodoList value={value} dispatch={dispatch} />
            })
        }
        </div>
    );
}; 

export default Main;