import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { snackbarActions } from "./state";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function SnackBar() {
  const dispatch = useDispatch();
  const [snackbarOpen, snackbarMessage, snackbarType] = useSelector(
    (state) => [
      state.snackbar.snackbarOpen,
      state.snackbar.snackbarMessage,
      state.snackbar.snackbarType,
    ],
    shallowEqual
  );

  function handleClose() {
    dispatch(snackbarActions.setClose());
  }

  return (
    <div>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert severity={snackbarType} onClose={handleClose}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}
