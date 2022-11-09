import "../../stylesheets/tasks/task.css";

const Task = ({ title, id }) => {
  return (
    <div className="margin-container">
      {/* "margin-container" Exist for fix a bug caused by dnd utility*/}
      <div className="task-container">
        <div className="title-task">{title}</div>
        <div className="check-task-container">
          <input type="checkbox" />
        </div>
      </div>
    </div>
  );
};

export default Task;
