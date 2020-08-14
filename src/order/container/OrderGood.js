import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  Grid,
  TextField,
  MenuItem,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../state";
import { fetchGoodList } from "../state/thunk";

export default function OrderGood() {
  const goodCode = useSelector(({ order }) => order.goodCode);
  const [goodList, setGoodList] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGoodList()).then((response) => {
      const newGoodList = [];
      response.forEach((element) => {
        newGoodList.push({
          value: element.goodCode,
          label: element.goodName,
        });
      });
      setGoodList(newGoodList);
    });
  }, [dispatch]);

  function onChange(e) {
    dispatch(actions.setValue(e.target.name, e.target.value));
  }

  return (
    <Card>
      <CardHeader
        title="상품 정보"
        titleTypographyProps={{ variant: "subtitle1" }}
      />
      <Divider />
      <CardContent>
        <Grid container spacing={4}>
          <Grid item lg={3}>
            <TextField
              required
              fullWidth
              label="상품선택"
              variant="outlined"
              name="goodCode"
              value={goodCode}
              onChange={onChange}
              select
              InputLabelProps={{
                shrink: true,
              }}
              size="small"
              // eslint-disable-next-line react/jsx-sort-props
              SelectProps={{ displayEmpty: true }}
            >
              <MenuItem key="" value=""></MenuItem>
              {goodList.map((option, index) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
