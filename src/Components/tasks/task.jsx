import "../../stylesheets/tasks/task.css";

const Task = ({ title, id }) => {
  return (
    <div className="task-container">
      <div className="title-task">{title}</div>
      <div className="check-task-container">
        <input type="checkbox" />
      </div>
    </div>
  );
};

export default Task;
