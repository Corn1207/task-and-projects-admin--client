/* eslint-disable import/no-anonymous-default-export */
import {
  TASKS_PROJECT,
  ADD_TASK,
  VALIDATE_TASK,
  DELETE_TASK,
  STATUS_TASK,
  ACTUAL_TASK,
  UPDATE_TASK,
  CLEAN_TASK
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case TASKS_PROJECT:
      return {
        ...state,
        projectTasks: state.tasks.filter(
          (task) => task.projectId === action.payload
        ),
      };
    case ADD_TASK:
      return {
        ...state,
        tasks: [action.payload, ...state.tasks],
        errorTask: false,
      };
    case VALIDATE_TASK:
      return {
        ...state,
        errorTask: true,
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case UPDATE_TASK:
    case STATUS_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload : task
        ),
      };
    case ACTUAL_TASK:
      return {
        ...state,
        selectedTask: action.payload,
      };
    case CLEAN_TASK:
      return {
        ...state,
        selectedTask: null
      }
    default:
      return state;
  }
};
