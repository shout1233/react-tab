import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Grid } from "@material-ui/core";
import { fetchList } from "../state/thunk";

import GoodList from "./GoodList";
import GoodDetails from "./GoodDetails";
import { actions } from "../state";

export default function Good() {
  const dispatch = useDispatch();

  useEffect(() => {
    const params = {};
    dispatch(fetchList(params));
    return () => dispatch(actions.initialize());
  }, [dispatch]);

  return (
    <>
      <Grid container spacing={4}>
        <Grid item lg={6} md={6} xl={6} xs={6}>
          <GoodList />
        </Grid>
        <Grid item lg={6} md={6} xl={6} xs={6}>
          <GoodDetails />
        </Grid>
      </Grid>
    </>
  );
}
