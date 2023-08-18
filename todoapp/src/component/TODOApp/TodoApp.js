
import "./TodoApp.css";
import { useState } from "react";
//---------------------------------

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');

  // Adding ToDo on to the list
  const addToDo = () => {
    if (todo.trim() !== "") {
      setTodos([...todos, { id: Date.now(), status: false, text: todo }]);
      setTodo('');
    } else {
      alert('The field is empty!');
    }
  };

  // deleting ToDo list
  const deleteToDo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (

    <div className='Toto-container'>
      <div className='input-section'>
        <h1>TodoApp</h1>
        
        <input
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          type='text'
          placeholder='Type anything....'
        />
        <i onClick={addToDo} className='fa-solid fa-plus'></i>
      </div>

      <ul>

        {
        todos.map((obj) => (
          <li key={obj.id}> {obj.text}

            <i onClick={() => deleteToDo(obj.id)}
              className='fa-solid fa-trash-can'></i>
          </li>
        ))
        }
        
      </ul>
    </div>
  );
}

export default TodoApp;


