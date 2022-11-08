import "../../stylesheets/tasks/addtask.css";
import React, { useState, useRef, useEffect } from "react";
const AddTask = () => {
  const [addTaskForm, setAddTaskForm] = useState(false);
  const [taskValue, setTaskValue] = useState("");
  const inputAddTask = useRef(null);

  document.addEventListener("click", (e) => {
    if (e.target.className.includes("add-task")) {
      setAddTaskForm(true);
    } else {
      setAddTaskForm(false);
    }
  });

  useEffect(() => {
    if (inputAddTask) {
      inputAddTask.current.focus();
    }
  }, [addTaskForm]);

  return (
    <div
      className={
        addTaskForm
          ? "add-task-container active-add-task"
          : "add-task-container"
      }
    >
      <div
        className={addTaskForm ? "add-task-button disable" : "add-task-button"}
      ></div>
      <form className={addTaskForm ? "add-task-form" : "add-task-form disable"}>
        <input
          type="text"
          className="input-add-task"
          ref={inputAddTask}
          onChange={(e) => {setTaskValue(e.target.value)
        console.log(taskValue)}}
        />
        <div className="controls-add-task">
          <button type="submit">Add Task</button>
          <span>x</span>
        </div>
      </form>
    </div>
  );
};

export default AddTask;
