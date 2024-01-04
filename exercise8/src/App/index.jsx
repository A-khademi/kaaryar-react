import { useState } from "react";
import TodoHeader from "../components/TodoHeader";
import TodoItem from "../components/TodoItem";
import "./style.css";
import { getIdGenerator } from "./utils";
const nextId = getIdGenerator();
function App() {
  const [todos, setTodos] = useState([]);
  const [newTodoText, setNewTodoText] = useState();
  function handleReset() {
    setTodos([]);
  }
  function handleChange(event) {
    setNewTodoText(event.target.value);
  }
  function hadleSubmit(event) {
    event.preventDefault();
    const newTodo = { id: nextId(), text: newTodoText };
    console.log(newTodo);
    setTodos([...todos, newTodo]);
    setNewTodoText("");
  }
  function handleRemove(todoId) {
    const newTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(newTodos);
  }
  return (
    <section className="app">
      <section className="todos">
        <TodoHeader />
        <main className="todos__list">
          {todos.map(({ id, text }) => (
            <TodoItem onRemove={() => handleRemove(id)} key={id} text={text} />
          ))}
        </main>
        <form
          className="todos__actions"
          onSubmit={hadleSubmit}
          onReset={handleReset}
        >
          <input
            type="text"
            className="todos__input"
            placeholder="کارجدید..."
            value={newTodoText}
            onChange={handleChange}
          />
          <div className="todos__buttons">
            <button type="reset" className="todos__reject">
              حذف همه
            </button>
            <button type="submit" className="todos__confirm">
              کار جدید
            </button>
          </div>
        </form>
      </section>
    </section>
  );
}
export default App;
