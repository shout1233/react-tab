import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Grid } from "@material-ui/core";
import { fetchTodoList } from "../state/thunk";

import TodoList from "./TodoList";
import TodoDetails from "./TodoDetails";
import { actions } from "../state";

export default function Todo() {
  const dispatch = useDispatch();

  useEffect(() => {
    const params = {
      userId: 2,
    };
    dispatch(fetchTodoList(params));
    return () => dispatch(actions.initialize());
  }, [dispatch]);

  return (
    <>
      <Grid container spacing={4}>
        <Grid item lg={6} md={6} xl={6} xs={6}>
          <TodoList />
        </Grid>
        <Grid item lg={6} md={6} xl={6} xs={6}>
          <TodoDetails />
        </Grid>
      </Grid>
    </>
  );
}
