import TodoItem from "./TodoItem";
import EditTodo from "./EditTodo";

function TodoList({ todoList, deleteTodo, toggleTodo, toggleTodoEdit}) {
  return todoList.length ? (
    <ul>
      {todoList.map((todo) => todo.edit ? (<EditTodo key={todo.id} todo={todo}/>):(
        <TodoItem
          key={todo.id}
          todo={todo}
          editTodo={() => toggleTodoEdit(todo.id)}
          deleteTodo={() => deleteTodo(todo.id)}
          toggleTodo ={() => toggleTodo(todo.id)}
        />
      ))}
    </ul>
  ) : (
    <p>Aucune todo pour le moment</p>
  );
}

export default TodoList;
