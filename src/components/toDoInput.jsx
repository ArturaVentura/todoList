// export const TodoInput = ({ todo, setTodo, handleAddTodo }) => (
//   <div className="input-wrapper">
//     <input
//       type="text"
//       name="todo"
//       value={todo}
//       placeholder="Введите заметку..."
//       onChange={(e) => setTodo(e.target.value)}
//     />
//     <button className="todo-button" onClick={handleAddTodo}>
//       Добавить
//     </button>
//   </div>
// );


import React from "react";

export const TodoInput = ({ todo, setTodo, handleAddTodo }) => {
  return (
    <div className="input-wrapper">
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Введите заметку..."
      />
      <button className="todo-button" onClick={handleAddTodo}>
        add
      </button>
    </div>
  );
};


