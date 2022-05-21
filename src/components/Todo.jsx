import React, { useState } from "react";
import Todolist from "./Todolist";
import "./Todo.css";
function Todo() {
  const [newtodo, setNewtodo] = useState("");
  const [todo, setTodo] = useState([]);

  const HandleChnage = (e) => {
    let { value } = e.target;
    setNewtodo(value);
  };
  const Addtask = () => {
    // console.log(newtodo)
    let payload = {
      title: newtodo,
      status: false,
    };
    setTodo([...todo, payload]);
    setNewtodo("");
  };
  return (
    <div className="maindiv">
      <h1>TODO APP</h1>
      <div className="main">
          <p>Add Your Task</p>
        <input
          type="text"
          value={newtodo}
          placeholder="Add Something"
          onChange={HandleChnage}
        />
        <button onClick={Addtask}>+</button>
      </div>
      <Todolist data={todo} />
    </div>
  );
}
export { Todo };
