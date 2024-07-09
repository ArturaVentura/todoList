import "./App.css";
import { useState } from "react";
import { TodoInput } from "./components/toDoInput";
import { TodoList } from "./components/toDoList";

function App() {
  const initialTodos = [
    { id: 1, text: "Заметка 1" },
    { id: 2, text: "Заметка 2" },
    { id: 3, text: "Заметка 3" },
  ];

  const [todos, setTodos] = useState(initialTodos);
  const [todoInput, setTodoInput] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);

  const handleAddTodo = () => {
    if (todoInput.trim() !== "") {
      if (editMode && editId !== null) {
        // Редактирование существующей заметки
        const updatedTodos = todos.map((todo) =>
          todo.id === editId ? { ...todo, text: todoInput } : todo
        );
        setTodos(updatedTodos);
        setEditMode(false);
        setEditId(null);
      } else {
        // Добавление новой заметки
        const newTodo = {
          id: todos.length + 1,
          text: todoInput,
        };
        setTodos([...todos, newTodo]);
      }
      setTodoInput("");
    }
  };

  const handleEdit = (id, text) => {
    setEditMode(true);
    setEditId(id);
    setTodoInput(text);
  };

  const handleDelete = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Добавьте заметку</h1>
        <TodoInput
          todo={todoInput}
          setTodo={setTodoInput}
          handleAddTodo={handleAddTodo}
        />
        <TodoList
          todos={todos}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          setTodos={setTodos}
        />
      </header>
    </div>
  );
}

export default App;
