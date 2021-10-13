/* eslint-disable import/no-anonymous-default-export */
import {
  FORM_PROJECT,
  GET_PROJECTS,
  ADD_PROJECT,
  VALIDATE_FORM,
  ACTUAL_PROJECT,
  DELETE_PROJECT,
  SHOW_DIALOG,
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case FORM_PROJECT:
      return {
        ...state,
        projectForm: true,
      };
    case GET_PROJECTS:
      return {
        ...state,
        projects: action.payload,
      };
    case ADD_PROJECT:
      return {
        ...state,
        projects: [...state.projects, action.payload],
        projectForm: false,
        formError: false,
      };
    case VALIDATE_FORM:
      return {
        ...state,
        formError: true,
      };
    case ACTUAL_PROJECT:
      return {
        ...state,
        selectedProject: state.projects.filter(project => project.id === action.payload)
      }
    case DELETE_PROJECT:
      return {
        ...state,
        projects: state.projects.filter( project => project.id !== action.payload),
        selectedProject: null,
      }
    case SHOW_DIALOG:
      return {
        ...state,
        dialog: !state.dialog,
      }
    default:
      return state;
  }
};
