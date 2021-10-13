import React, { useState, useContext } from "react";
import projectContext from "../../context/projects/projectContext";

const NewProject = () => {
  const projectsContext = useContext(projectContext);
  const { projectForm, formError, showForm, addProject, showError } =
    projectsContext;

  const [project, setProject] = useState({
    nameProject: "",
  });

  const { nameProject } = project;

  const onChangeProject = (e) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitProject = (e) => {
    e.preventDefault();

    // Validate Project
    if (nameProject === "") {
      showError();
      return;
    }

    //Add to state
    addProject(project);

    // Reload Form
    setProject({
      nameProject: "",
    });
  };

  const onClickShowForm = () => {
    showForm();
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-block btn-primary"
        onClick={onClickShowForm}
      >
        New Project
      </button>
      {projectForm ? (
        <form className="new-project-form" onSubmit={onSubmitProject}>
          <input
            type="text"
            className="input-text"
            placeholder="Project name"
            name="nameProject"
            value={nameProject}
            onChange={onChangeProject}
          />
          <input
            type="submit"
            className="btn btn-block btn-primary"
            value="Create project"
          />
        </form>
      ) : null} 
      { formError ? <p className="message error">The name cannot be blank</p> : null}
    </>
  );
};

export default NewProject;
