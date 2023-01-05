import { useState } from "react";
import "./Home.css";
import { addTodo, removeTodo } from "../../actions/todoActions";
import { connect } from "react-redux";
import { v4 } from "uuid";

const Home = ({ todoArray, addTodo, removeTodo }) => {
  const [text, setText] = useState("");
  // const [todoArray, setTodoArray] = useState(["condoms", "whiskey"]);

  const handleChange = (e) => setText(e.target.value);
  const handleClick = () => {
    if (text.trim() === "") {
      return;
    }
    let todoData = {
      id: v4(),
      text: text,
    };
    addTodo(todoData);
    setText("");
  };

  const deleteHandler = (id) => {
    removeTodo(id);
  };

  return (
    <div className="HomeContainer">
      <div className="todo-input">
        <input
          id="todo-input"
          name="todo-input"
          type="text"
          value={text}
          placeholder="Add your task/todo here...."
          onChange={handleChange}
        />
        <button disabled={text.length === 0} onClick={handleClick}>
          Add
        </button>
      </div>
      <div className="todo-list">
        <ul>
          {!todoArray ? (
            <p>No task/todos available currently....</p>
          ) : (
            todoArray.map(({ id, text }) => (
              <div key={`list-item${id}`} className="list-item-container">
                <li className="list-item">{text}</li>
                <button onClick={() => deleteHandler(id)}>x</button>
              </div>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todoArray: state.todo.todoArray,
});

const mapDispatchToProps = {
  addTodo,
  removeTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
