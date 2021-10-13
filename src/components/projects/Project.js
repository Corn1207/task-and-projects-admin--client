import React, { useContext } from "react";
import projectContext from "../../context/projects/projectContext";
import taskContext from "../../context/tasks/taskContext";

const Project = ({ project }) => {
  const projectsContext = useContext(projectContext);
  const { setActualProject } = projectsContext;

  //Get function taskContext
  const tasksContext = useContext(taskContext);
  const { getTasks } = tasksContext;

  //Function for add actual project
  const selectProject = (id) => {
    setActualProject(id); //Filter actual project
    getTasks(id); //Filter task per project
  };

  return (
    <li>
      <button
        type="button"
        className="btn btn-blank"
        onClick={() => selectProject(project.id)}
      >
        {project.nameProject}
      </button>
    </li>
  );
};

export default Project;
