import React from "react";

export const TodoList = ({ todos, handleDelete, handleEdit }) => {
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleEdit(todo.id, todo.text)}>
              Изменить
            </button>
            <button onClick={() => handleDelete(todo.id)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
