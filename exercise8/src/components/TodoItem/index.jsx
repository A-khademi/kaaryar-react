import "./style.css";
function TodoItem({ text, onRemove }) {
  return (
    <div className="todo__item">
      <p className="todo__item-text"> {text}</p>
      <button className="todos__remove" onClick={onRemove}>
        x
      </button>
    </div>
  );
}
export default TodoItem;
