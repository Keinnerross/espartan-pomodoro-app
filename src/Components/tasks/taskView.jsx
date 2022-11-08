import "../../stylesheets/tasks/taskview.css";
import AddTask from "./addTask";
import Task from "./task.jsx";
import React, { useState } from "react";
const TaskView = () => {
  const [tasksArr, setTasksArr] = useState([]);

  const addNewTask = (ax) => {
    const taskUpdate = [ax, ...tasksArr];
    setTasksArr(taskUpdate);
    console.log(tasksArr);
  };

  return (
    <div className="tasks-view-container">
      <span>
        <h3>Tasks</h3>
      </span>
      <AddTask onSubmit={addNewTask} />

      {tasksArr.map((aja) => {
        return <Task title={aja.title} key={Math.random()} />;
      })}
    </div>
  );
};

export default TaskView;
