import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  CircularProgress,
  makeStyles,
} from "@material-ui/core";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  dialogContent: {
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    width: "fit-content",
  },
}));

export default function Loading() {
  const classes = useStyles();
  const loading = useSelector(({ loading }) => loading.open);
  console.log("loading : " + loading);
  return (
    <Dialog open={loading}>
      <DialogTitle id="alert-dialog-title">{"처리중"}</DialogTitle>
      <DialogContent className={classes.dialogContent}>
        <CircularProgress />
      </DialogContent>
    </Dialog>
  );
}
