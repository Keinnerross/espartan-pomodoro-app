import "../../stylesheets/tasks/task.css"

const Task = ()=>{
    return(
        <div className="task-container">
            <div className="title-task">
                Soy una tarea
            </div>
            <div className="check-task-container">
                <input type="checkbox"/>
            </div>
        </div>
    )
}

export default Task;