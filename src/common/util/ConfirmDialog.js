import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function ConfirmDialog({
  isOpen,
  onConfirmNo,
  onConfirmYes,
  msg,
}) {
  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={onConfirmNo}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{msg}</DialogTitle>
        <DialogActions>
          <Button onClick={onConfirmNo} color="primary">
            아니요
          </Button>
          <Button onClick={onConfirmYes} color="primary" autoFocus>
            네
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
