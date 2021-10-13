import React, { useReducer } from "react";
import TaskContext from "./taskContext";
import TaskReducer from "./taskReducer";
import uuid from "uuid";

import {
  TASKS_PROJECT,
  ADD_TASK,
  VALIDATE_TASK,
  DELETE_TASK,
  STATUS_TASK,
  ACTUAL_TASK,
  UPDATE_TASK,
  CLEAN_TASK,
} from "../../types";

const TaskState = (props) => {
  const initialState = {
    tasks: [
      { id: 1, name: "Choose platform", status: true, projectId: 1 },
      { id: 2, name: "Choose color", status: false, projectId: 2 },
      { id: 3, name: "Choose Host", status: false, projectId: 3 },
      { id: 4, name: "Choose Language", status: true, projectId: 4 },
      { id: 5, name: "Choose platform", status: true, projectId: 2 },
      { id: 6, name: "Choose color", status: false, projectId: 2 },
      { id: 7, name: "Choose Host", status: false, projectId: 2 },
      { id: 8, name: "Choose Language", status: true, projectId: 1 },
      { id: 9, name: "Choose platform", status: true, projectId: 4 },
      { id: 10, name: "Choose color", status: false, projectId: 4 },
      { id: 11, name: "Choose Host", status: false, projectId: 4 },
      { id: 12, name: "Choose Language", status: true, projectId: 4 },
    ],
    projectTasks: null,
    errorTask: false,
    selectedTask: null,
  };

  const [state, dispatch] = useReducer(TaskReducer, initialState);

  //Create functions

  // Get task for a project
  const getTasks = (projectId) => {
    dispatch({
      type: TASKS_PROJECT,
      payload: projectId,
    });
  };

  // Add task to selected project
  const addTask = (task) => {
    task.id = uuid.v4();
    dispatch({
      type: ADD_TASK,
      payload: task,
    });
  };

  // Validate and show errors
  const validateTask = () => {
    dispatch({
      type: VALIDATE_TASK,
    });
  };

  // Delete task by id
  const deleteTask = (id) => {
    dispatch({
      type: DELETE_TASK,
      payload: id,
    });
  };

  // Change status for a task
  const handleTaskStatus = (task) => {
    dispatch({
      type: STATUS_TASK,
      payload: task,
    });
  };

  //Get task for edit
  const getActualTask = (task) => {
    dispatch({
      type: ACTUAL_TASK,
      payload: task,
    });
  };

  // Edit task
  const updateTask = (task) => {
    dispatch({
      type: UPDATE_TASK,
      payload: task,
    });
  };

  //Delete selectedTask
  const cleanTask = () => {
    dispatch({
      type: CLEAN_TASK,
    });
  };

  return (
    <TaskContext.Provider
      value={{
        tasks: state.tasks,
        projectTasks: state.projectTasks,
        errorTask: state.errorTask,
        selectedTask: state.selectedTask,
        getTasks,
        addTask,
        validateTask,
        deleteTask,
        handleTaskStatus,
        getActualTask,
        updateTask,
        cleanTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskState;
