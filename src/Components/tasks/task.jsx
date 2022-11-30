import React, { useState, useContext } from "react";
import { context } from "../context/store";
import "../../stylesheets/tasks/task.css";
import { BsThreeDotsVertical } from "react-icons/bs";

const Task = ({ title, idLabel }) => {
  const { completedTask, setCompletedTask } = useContext(context);
  const { levelPercentage, setLevelPercentage } = useContext(context);

  const [checkTask, setCheckTask] = useState(false);

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
      <div className="task-container">
        <div className="setting-task-card">
          <BsThreeDotsVertical />
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
