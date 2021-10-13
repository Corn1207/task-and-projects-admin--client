import React, { useReducer } from "react";
import uuid from "uuid";

import projectContext from "./projectContext";
import projectReducer from "./projectReducer";
import {
  FORM_PROJECT,
  GET_PROJECTS,
  ADD_PROJECT,
  VALIDATE_FORM,
  ACTUAL_PROJECT,
  DELETE_PROJECT,
  SHOW_DIALOG
} from "../../types";

const ProjectState = (props) => {
  const projects = [
    { id: 1, nameProject: "Tienda" },
    { id: 2, nameProject: "Intranet" },
    { id: 3, nameProject: "Diseño" },
    { id: 4, nameProject: "MERN Project" },
  ];

  const initialState = {
    projects: [],
    projectForm: false,
    formError: false,
    selectedProject: null,
    dialog: false,
  };

  //Dispath for excecute actions
  const [state, dispatch] = useReducer(projectReducer, initialState);

  //Functions to create CRUD
  const showForm = () => {
    dispatch({
      type: FORM_PROJECT,
    });
  };

  // getProjects

  const getProjects = () => {
    dispatch({
      type: GET_PROJECTS,
      payload: projects,
    });
  };

  const addProject = (project) => {
    project.id = uuid.v4();

    // Insert project to state with Dispath
    dispatch({
      type: ADD_PROJECT,
      payload: project,
    });
  };

  // Validate Form errors
  const showError = () => {
    dispatch({
      type: VALIDATE_FORM,
    });
  };

  // Select project by click
  const setActualProject = projectId => {
    dispatch({
      type: ACTUAL_PROJECT,
      payload: projectId,
    })
  }

  //Delete a project
  const deleteProject = projectId => {
    dispatch({
      type: DELETE_PROJECT,
      payload: projectId,
    })
  }

  const handleDialog = () => {
    dispatch({
      type: SHOW_DIALOG,
    })
  }

  return (
    <projectContext.Provider
      value={{
        projects: state.projects,
        projectForm: state.projectForm,
        formError: state.formError,
        selectedProject: state.selectedProject,
        dialog: state.dialog,
        showForm,
        getProjects,
        addProject,
        showError,
        setActualProject,
        deleteProject,
        handleDialog,
      }}
    >
      {props.children}
    </projectContext.Provider>
  );
};

export default ProjectState;
