import React, { useContext, useEffect } from "react";
import Project from "./Project";
import projectContext from "../../context/projects/projectContext";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const ProjectList = () => {
  const projectsContext = useContext(projectContext);
  const { projects, getProjects } = projectsContext;

  useEffect(() => {
    getProjects();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (projects.length === 0)
    return <p>There are no projects, create a new one!</p>;

  return (
    <ul className="project-list">
      <TransitionGroup>
        {projects.map((project) => (
          <CSSTransition key={project.id} timeout={200} classNames="project">
            <Project project={project} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
};

export default ProjectList;
