import React from "react";

const TodoList = ({ todos, removeHandler }) => {
  return (
    <div>
      {todos.map((item, id) => (
        <div key={id}>
          <h2>
            {item} &nbsp; <button onClick={() => removeHandler(id)}>X</button>
          </h2>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
