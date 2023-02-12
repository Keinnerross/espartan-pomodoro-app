import "../../stylesheets/tasks/taskview.css";
import AddTask from "./addTask";
import Task from "./task.jsx";
import React, { useState, useEffect, useContext } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { context } from "../context/store";

const TaskView = () => {
  const [tasksArr, setTasksArr] = useState([]);
  const [inputTitleValue, setInputTitleValue] = useState("");
  const { data, setData } = useContext(context);

  const addNewTask = (task) => {
    if (task.title.trim()) {
      task.title = task.title.trim();
      const taskUpdate = [task, ...tasksArr];
      setTasksArr(taskUpdate);
      data[0].tasks = taskUpdate;
      console.log(data[0].tasks);
    }
  };

  const editTitle = (value, id) => {
    tasksArr.forEach((task) => {
      if (task.id == id) {
        task.title = value;
      }
    });
    
    setInputTitleValue(value);
  };

  const delateTask = (id) => {
    if (window.confirm("Do yo want delate this task?") == true) {
      const taskUpdate = tasksArr.filter((task) => task.id !== id);
      setTasksArr(taskUpdate);
    }
  };

  useEffect(() => {
    const storedData = localStorage.getItem("tasksArr");
    if (storedData) {
      setTasksArr(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasksArr", JSON.stringify(tasksArr));
  }, [tasksArr, inputTitleValue]);

  const reorder = (list, startIndex, endIndex) => {
    const result = [...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  return (
    <div className="tasks-view-container">
      <span>
        <h3 onClick={() => console.log(tasksArr)}>Tasks</h3>
      </span>
      <AddTask onSubmit={addNewTask} />
      <DragDropContext
        onDragEnd={(result) => {
          const { source, destination } = result;
          if (!destination) {
            return;
          }
          if (
            source.index === destination.index &&
            source.droppableId === destination.droppableId
          ) {
            return;
          }
          setTasksArr((prevTaskArr) =>
            reorder(prevTaskArr, source.index, destination.index)
          );
        }}
      >
        <Droppable droppableId="tasksArr">
          {(provided) => (
            <ul
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="task-view-list"
            >
              {tasksArr.map((task, i) => (
                <Draggable
                  key={task.id}
                  draggableId={task.id.toString()}
                  index={i}
                >
                  {(provided) => (
                    <li
                      className="task-list-item"
                      {...provided.draggableProps}
                      ref={provided.innerRef}
                      {...provided.dragHandleProps}
                    >
                      <Task
                        title={task.title}
                        idLabel={task.id}
                        inputChange={editTitle}
                        delTask={delateTask}
                      />
                    </li>
                  )}
                </Draggable>
              ))}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default TaskView;
