import "../../stylesheets/tasks/taskview.css";
import AddTask from "./addTask";
import Task from "./task";

const TaskView = () => {
  return (
    <div className="tasks-view-container">
      <span>
        <h3>Tasks</h3>
      </span>
      <AddTask/>
     {/* Aqui Estaría el map renderizando la lista de tareas */}
    </div>
  );
};

export default TaskView;
