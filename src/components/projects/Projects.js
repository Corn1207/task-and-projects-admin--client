import React from "react";
import Sidebar from "../layout/Sidebar";
import Bar from "../layout/Bar";
import FormTask from "../tasks/FormTask";
import ListTasks from "../tasks/ListTasks";
import Dialog from "../utils/AlertDialog"

const Projects = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <Dialog/>
      <div className="principal-section">
        <Bar />
        <main>
          <FormTask />
          <div className="task-container">
            <ListTasks />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Projects;
