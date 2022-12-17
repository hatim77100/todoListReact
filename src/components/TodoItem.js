import Button from "./Button";

function TodoItem({ todo, deleteTodo, toggleTodo, editTodo, selectTodo }) {
  return (
    <li
      onClick={selectTodo}
      className={`d-flex flex-row justify-center items-center p-10 mb-10 ${
        todo.selected ? "selected" : ""
      }`}
    >
      <span className="flex-fill mr-15">
        {todo.content} {todo.done && " ✅ "}
      </span>
        <Button onClick={(e) => {
          e.stopPropagation();
          toggleTodo();
        }}
        text="Valider"
        className="mr-15"
        />
        <Button onClick={(e) => {
          e.stopPropagation();
          editTodo();
        }}
        text="Modifier"
        className="mr-15"
        />
        <Button onClick={(e) => {
          e.stopPropagation();
          deleteTodo();
        }}
        text="Suprimer"
        />
 
    </li>
  );
}

export default TodoItem;
