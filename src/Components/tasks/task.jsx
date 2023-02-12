import React, { useState, useContext, useRef, useEffect } from "react";
import { context } from "../context/store";
import "../../stylesheets/tasks/task.css";
import { BsThreeDotsVertical } from "react-icons/bs";

const Task = ({ title, idLabel, inputChange, delTask }) => {
  const { completedTask, setCompletedTask } = useContext(context);
  const { levelPercentage, setLevelPercentage } = useContext(context);
  const [checkTask, setCheckTask] = useState(false);
  const [editActive, setEditActive] = useState(false);
  const [editInput, setEditInput] = useState(false);
  const inputTitle = useRef(null);

  const handleTaskCompleted = () => {
    if (checkTask) {
      setCheckTask(false);
      setCompletedTask(completedTask - 1);
      setLevelPercentage(levelPercentage - 20);
    } else {
      setCheckTask(true);
      setCompletedTask(completedTask + 1);
      setLevelPercentage(levelPercentage + 20);
    }
  };

  useEffect(() => {
    if (inputTitle) {
      inputTitle.current.focus();
    }
  }, [editInput]);

  return (
    <div className="margin-container">
      {/* "margin-container" Exist for fix a bug caused by dnd utility*/}
      <div
        className="task-container"
        onMouseLeave={() => {
          setEditActive(false);
          setEditInput(false);
        }}
      >
        <div className={editActive ? "edit-task-container" : "hidden"}>
          <div className="edit-task-section">
            <div className="edit-task-header">
              <h4>Manage task</h4>
              <hr />
            </div>
            <ul className={editInput ? "hidden" : "setting-task-list"}>
              <li onClick={() => setEditInput(true)}>Edit Title</li>
              <li>
                <label htmlFor=""> Convert to List</label>
                <input className="hidden" type="checkbox" name="" id="" />
              </li>
              <li>
                {" "}
                <label htmlFor="">Add Bookmark</label>
                <select className="hidden">
                  <option value="">Rojo</option>
                  <option value="">Verde</option>
                  <option value="">Azul</option>
                  <option value="">Rosa</option>
                  <option value="">Naranja</option>
                  <option value="">Amarillo</option>
                </select>
              </li>
              <li>Create a Duplicate</li>
              <li onClick={() => delTask(idLabel)}>Delete Task</li>
            </ul>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setEditActive(false);
              }}
              className={editInput ? "task-input-section" : "hidden"}
            >
              <input
                className="edit-task-input"
                type="text"
                ref={inputTitle}
                onChange={(e) => inputChange(e.target.value, idLabel)}
                defaultValue={title}
              />
              <button
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  setEditActive(false);
                }}
                className="done-button"
              >
                Done
              </button>
            </form>
          </div>
        </div>

        <div className="task-section">
          <div className="title-task">{title}</div>
          <div className="check-task-container">
            <input
              type="checkbox"
              id={idLabel}
              onChange={handleTaskCompleted}
            />
            <label htmlFor={idLabel}></label>
            <div
              className="setting-task-card"
              onClick={() => setEditActive(true)}
            >
              <BsThreeDotsVertical />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
