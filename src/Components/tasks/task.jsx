import React, { useState, useContext } from "react";
import { context } from "../context/store";
import "../../stylesheets/tasks/task.css";

const Task = ({ title, id }) => {
  const { completedTask, setCompletedTask } = useContext(context);
  const [checkTask, setCheckTask] = useState(false);
  const handleTaskCompleted = () => {
    if (checkTask) {
      setCheckTask(false);
      setCompletedTask(completedTask - 1);
    } else {
      setCheckTask(true);
      setCompletedTask(completedTask + 1);
    }
  };

  return (
    <div className="margin-container">
      {/* "margin-container" Exist for fix a bug caused by dnd utility*/}
      <div className="task-container">
        <div className="title-task">{title}</div>
        <div className="check-task-container">
          <input type="checkbox" onChange={handleTaskCompleted} />
        </div>
      </div>
    </div>
  );
};

export default Task;
