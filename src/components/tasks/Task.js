import React, { useContext } from "react";
import taskContext from "../../context/tasks/taskContext";
import projectContext from "../../context/projects/projectContext";

const Task = ({ task }) => {
  //Get function taskContext
  const tasksContext = useContext(taskContext);
  const { deleteTask, getTasks, handleTaskStatus, getActualTask } =
    tasksContext;

  //Get project context
  const projectsContext = useContext(projectContext);
  const { selectedProject } = projectsContext;

  //Array destructuring for get the actual project
  const [actualProject] = selectedProject;

  //Function to delete task when user press button Delete
  const deleteTaskFunction = (id) => {
    deleteTask(id);
    getTasks(actualProject.id);
  };

  //Function that modify task status
  const handleStatus = (task) => {
    if (task.status) {
      task.status = false;
    } else {
      task.status = true;
    }
    handleTaskStatus(task);
  };

  //Function that add task when the users edit it
  const selectTask = (task) => {
    getActualTask(task);
  };

  return (
    <li className="task shadow">
      <p>{task.name}</p>
      <div className="status">
        {task.status ? (
          <button
            type="button"
            className="complete"
            onClick={() => handleStatus(task)}
          >
            Complete
          </button>
        ) : (
          <button
            type="button"
            className="incomplete"
            onClick={() => handleStatus(task)}
          >
            Incomplete
          </button>
        )}
      </div>
      <div className="actions">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => selectTask(task)}
        >
          Edit
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => deleteTaskFunction(task.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default Task;
