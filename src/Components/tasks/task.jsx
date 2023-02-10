import React, { useState, useContext } from "react";
import { context } from "../context/store";
import "../../stylesheets/tasks/task.css";
import { BsThreeDotsVertical } from "react-icons/bs";

const Task = ({ title, idLabel, inputChange, delTask }) => {
  const { completedTask, setCompletedTask } = useContext(context);
  const { levelPercentage, setLevelPercentage } = useContext(context);
  const [checkTask, setCheckTask] = useState(false);
  const [editActive, setEditActive] = useState(false);

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

  return (
    <div className="margin-container">
      {/* "margin-container" Exist for fix a bug caused by dnd utility*/}
      <div className="task-container" onMouseLeave={() => setEditActive(false)}>
        <div className={editActive ? "edit-task-container" : "hidden"}>
          <div className="edit-task-section">
            <label htmlFor="">Edit Task</label>
            <input
            className="edit-task-input"
              type="text"
              onChange={(e) => inputChange(e.target.value, idLabel)}
              defaultValue={title}
            />
            {/* <label htmlFor="">Activar Lista</label>
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Agregar Etiqueta</label>
            <select>
              <option value="">Rojo</option>
              <option value="">Verde</option>
              <option value="">Azul</option>
              <option value="">Rosa</option>
              <option value="">Naranja</option>
              <option value="">Amarillo</option>
            </select> */}
            <button className="edit-del-btn" onClick={() => delTask(idLabel)}>
              Eliminar Tarea
            </button>
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
              onMouseEnter={() => setEditActive(true)}
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
