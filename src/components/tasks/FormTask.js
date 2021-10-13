import React, { useContext, useState, useEffect } from "react";
import projectContext from "../../context/projects/projectContext";
import taskContext from "../../context/tasks/taskContext";

const FormTask = () => {
  //Get project context
  const projectsContext = useContext(projectContext);
  const { selectedProject } = projectsContext;

  //Get function taskContext
  const tasksContext = useContext(taskContext);
  const {
    errorTask,
    addTask,
    validateTask,
    getTasks,
    selectedTask,
    updateTask,
    cleanTask,
  } = tasksContext;

  // Effeect that detect when is a selected task
  useEffect(() => {
    if (selectedTask !== null) {
      setTask(selectedTask);
    } else {
      setTask({
        name: "",
      });
    }
  }, [selectedTask]);

  // form state
  const [task, setTask] = useState({
    name: "",
  });

  const { name } = task;

  // If there's not selected project
  if (!selectedProject) return null;

  //Array destructuring for get the actual project
  const [actualProject] = selectedProject;

  // Read the form's values
  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    //Validate
    if (name.trim() === "") {
      validateTask();
      return;
    }
    // Is edditing or is adding a new task
    if (selectedTask === null) {
      //Add new task to state
      task.projectId = actualProject.id;
      task.status = false;
      addTask(task);
    } else {
      // Update task
      updateTask(task)
      
      //Delete selectedTask from state
      cleanTask()
    }

    //Get and filter task projects
    getTasks(actualProject.id);

    //Reload form
    setTask({ name: "" });
  };

  return (
    <div className="form">
      <form onSubmit={onSubmit}>
        <div className="input-container">
          <input
            type="text"
            className="input-text"
            placeholder="Task name"
            name="name"
            onChange={handleChange}
            value={name}
          />
        </div>
        <div className="input-container">
          <input
            type="submit"
            className="btn btn-primary btn-submit btn-block"
            value={selectedTask ? "Save task" : "Add task"}
          />
        </div>
      </form>
      {errorTask ? (
        <p className="message error">Task Name is required</p>
      ) : null}
    </div>
  );
};

export default FormTask;
