import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/styles";
import { Grid } from "@material-ui/core";

import AccountList from "./AccountList";
import AccountDetails from "./AccountDetails";
import { insertOrUpdateUser, setUser, deleteUser } from "./state";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
  },
}));

export default function Account() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.selectedUser);
  const gridInfo = useSelector((state) => state.user.gridInfo);

  function onSave(user) {
    dispatch(insertOrUpdateUser(user));
  }

  function onChange(user) {
    dispatch(setUser(user));
  }

  function onRowClick(userInfo) {
    dispatch(setUser(userInfo));
  }

  function onDelete(userInfo) {
    dispatch(deleteUser(user));
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item lg={6} md={6} xl={6} xs={6}>
          <AccountList
            gridInfo={gridInfo}
            onRowClick={onRowClick}
            onDelete={onDelete}
          />
        </Grid>
        <Grid item lg={6} md={6} xl={6} xs={6}>
          <AccountDetails onSave={onSave} onChange={onChange} values={user} />
        </Grid>
      </Grid>
    </div>
  );
}
