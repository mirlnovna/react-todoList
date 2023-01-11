import "./App.css";
import { useState } from "react";
import TodoList from "./components/TodoList";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const removeHandler = (idValue) => {
    const newTask = todos.filter((todos, id) => id !== idValue);
    setTodos(newTask);
  };

  const changeHandler = (e) => {
    setTask(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const newTask = [...todos, task];
    setTodos(newTask);
    setTask("");
  };
  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="vvedite text"
          value={task}
          onChange={changeHandler}
        />
        <button>Add</button>
      </form>
      <TodoList todos={todos} removeHandler={removeHandler} />
    </div>
  );
}

export default App;
