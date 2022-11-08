import "../../stylesheets/tasks/taskview.css";
import AddTask from "./addTask";
import Task from "./task.jsx";
import React, { useState } from "react";
const TaskView = () => {
  const [tasksArr, setTasksArr] = useState([]);

  const addNewTask = (task) => {
    const taskUpdate = [task, ...tasksArr];
    setTasksArr(taskUpdate);
    console.log(tasksArr);
  };

  return (
    <div className="tasks-view-container">
      <span>
        <h3>Tasks</h3>
      </span>
      <AddTask onSubmit={addNewTask} />
      {tasksArr.map((task) => {
        return <Task title={task.title} key={Math.random(12)} />;
      })}
    </div>
  );
};

export default TaskView;
