import React, { useContext } from "react";
import Task from "./Task";
import projectContext from "../../context/projects/projectContext";
import taskContext from "../../context/tasks/taskContext";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const ListTasks = () => {
  const projectsContext = useContext(projectContext);
  const { selectedProject, handleDialog } = projectsContext;

  //Get tasks context
  const tasksContext = useContext(taskContext);
  const { projectTasks } = tasksContext;

  // Array destructuring for select actual proejct

  if (!selectedProject) return <h2>Select a project</h2>;
  const [actualProject] = selectedProject;

  const onClickDelete = () => {
    /* deleteProject(actualProject.id); */
    handleDialog();
  };

  return (
    <>
      <h2>Project: {actualProject.nameProject} </h2>
      <ul className="task-list">
        {projectTasks.length === 0 ? (
          <li className="task">
            <p>You have no task added.</p>
          </li>
        ) : (
          <TransitionGroup>
            {projectTasks.map((task) => (
              <CSSTransition key={task.id} timeout={200} classNames="task">
                <Task task={task} />
              </CSSTransition>
            ))}
          </TransitionGroup>
        )}
      </ul>
      <button type="button" className="btn btn-delete" onClick={onClickDelete}>
        Delete Project &times;
      </button>
    </>
  );
};

export default ListTasks;
