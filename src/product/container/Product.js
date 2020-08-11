import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Grid } from "@material-ui/core";
import { fetchList } from "../state/thunk";

import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";
import { actions } from "../state";

export default function Product() {
  const dispatch = useDispatch();

  useEffect(() => {
    const params = {
      userId: 2,
    };
    dispatch(fetchList(params));
    return () => dispatch(actions.initialize());
  }, [dispatch]);

  return (
    <>
      <Grid container spacing={4}>
        <Grid item lg={6} md={6} xl={6} xs={6}>
          <ProductList />
        </Grid>
        <Grid item lg={6} md={6} xl={6} xs={6}>
          <ProductDetails />
        </Grid>
      </Grid>
    </>
  );
}
