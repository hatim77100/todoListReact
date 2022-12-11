function TodoItem({ todo, deleteTodo, toggleTodo, editTodo }) {
  return (
    <li className="d-flex flex-row justify-center items-center p-10 mb-10">
      <span className="flex-fill mr-15">{todo.content} {todo.done && ' ✅ '}</span>
      <button onClick={toggleTodo} className="btn btn-primary mr-15">Valider</button>
      <button onClick={editTodo} className="btn btn-primary mr-15">Modifier</button>
      <button
        onClick={deleteTodo}
        className="btn btn-reverse-primary mr-15"
      >
        Supprimer
      </button>
    </li>
  );
}

export default TodoItem;
