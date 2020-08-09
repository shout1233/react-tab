import React from "react";
import { Grid } from "@material-ui/core";

export default function TestMenu() {
  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={6} sm={3}>
          Menu
        </Grid>
      </Grid>
    </div>
  );
}
