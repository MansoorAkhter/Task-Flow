import React, { useState } from "react";
import "./todoApp.css";

const TodoApp = () => {

  const [checkBoxx, setCheckBoxx] = useState()

  const checkBox = () => {
    console.log("adad");
    setCheckBoxx(!checkBoxx);
  };

  return (
    <div className="container">
    


      <h1>TASK FLOW</h1>
      <div class="inputWrpr">
        <input type="text" class="data" />

        <button className="addBtn">Add</button>
      </div>

      <h3>TODAY'S TASKS</h3>

      <ul>
        <li>
          <button className="checkbox" onClick={checkBox}>
            {checkBoxx ? (
              <i class="fas fa-check-circle"></i>
            ) : (
              <i class="far fa-circle"></i>
            )}
          </button>
          <p>Meeting</p>
          <div>
            <i class="fas fa-edit"></i>
            <i class="far fa-trash-alt"></i>
          </div>
        </li>
      </ul>

      <button className="clear">Clear</button>
    </div>
  );
};

export default TodoApp;
