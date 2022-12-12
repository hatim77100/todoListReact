import "./App.css";
import AddToDo from "./components/AddToDo";
import TodoList from "./components/TodoList";
import { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);

  function addTodo(content) {
    const todo = {
      id: crypto.randomUUID(),
      content,
      done: false,
      edit: false,
    };
    setTodoList([...todoList, todo]);
  }

  function deleteTodo(id) {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  }

  function toggleTodo(id) {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              done: !todo.done,
            }
          : todo
      )
    );
  }

  function toggleTodoEdit(id) {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              edit: !todo.edit,
            }
          : todo
      )
    );
  }

  function editTodo(id, content) {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              edit: false,
              content,
            }
          : todo
      )
    );
  }

  return (
    <div className="d-flex flex-row justify-center items-center p-20">
      <div className="card p-20">
        <h1 className="mb-20">Todo list</h1>
        <AddToDo addTodo={addTodo} />
        <TodoList
          todoList={todoList}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
          toggleTodoEdit={toggleTodoEdit}
          editTodo={editTodo}
        />
      </div>
    </div>
  );
}

export default App;
