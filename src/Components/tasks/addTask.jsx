import "../../stylesheets/tasks/addtask.css";
import React, { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { MdClose } from "react-icons/md";

const AddTask = ({ onSubmit }) => {
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

  function sendTask(e) {
    e.preventDefault();

    const newTask = {
      title: taskValue,
      id: uuidv4(),
    };
    onSubmit(newTask);
    e.target.reset();
    setTaskValue("");
  }

  const closeCard = () => {
    setAddTaskForm(false);
  };

  return (
    <div
      className={
        addTaskForm
          ? "add-task-container active-add-task"
          : "add-task-container"
      }
    >
      <div
        className={
          addTaskForm ? "add-task-section disable" : "add-task-section"
        }
      >
        <div className="add-task-button"></div>
      </div>
      <form
        className={addTaskForm ? "add-task-form" : "add-task-form disable"}
        onSubmit={sendTask}
      >
        <input
          type="text"
          className="input-add-task"
          ref={inputAddTask}
          placeholder="Agg a title for you task"
          onChange={(e) => {
            setTaskValue(e.target.value);
          }}
        />
        <div className="controls-add-task">
          <button type="submit">Add Task</button>
          <span onClick={() => closeCard()}>
            <MdClose />
          </span>
        </div>
      </form>
    </div>
  );
};

export default AddTask;
