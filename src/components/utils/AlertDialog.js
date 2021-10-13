import React, { useState, useEffect, useContext } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
/* import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText"; */
import DialogTitle from "@mui/material/DialogTitle";

import projectContext from "../../context/projects/projectContext";

export default function AlertDialog() {
  const projectsContext = useContext(projectContext);
  const { dialog, handleDialog, selectedProject, deleteProject } =
    projectsContext;
  const [agree, setAgree] = useState(false);

  const handleAgree = () => {
    setAgree(true);
  };

  const handleClose = () => {
    if (agree) {
      deleteProject(actualProject.id);
      console.log("Eliminó " + actualProject.id);
    }
    handleDialog(false);
    setAgree(false);
  };

  useEffect(() => {
    if (!agree) return null;
    handleClose();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [agree]);

  if (!selectedProject) return null;
  const [actualProject] = selectedProject;

  if (!dialog) return null;

  return (
    <div>
      <Dialog
        open={dialog}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {`Do you want to delete ${actualProject.nameProject}?`}
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose} className="alert-dialog-button btn btn-secondary">
            Back
          </Button>
          <Button
            onClick={handleAgree}
            autoFocus
            className="alert-dialog-button btn btn-primary"
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
