import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  Grid,
  TextField,
  MenuItem,
} from "@material-ui/core";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { actions } from "../state";

export default function OrderPayment() {
  const dispatch = useDispatch();
  const [payType, payMemo] = useSelector(
    ({ order }) => [order.payType, order.payMemo],
    shallowEqual
  );

  function onChange(e) {
    dispatch(actions.setValue(e.target.name, e.target.value));
  }

  return (
    <Card>
      <CardHeader
        title="결제 정보"
        titleTypographyProps={{ variant: "subtitle1" }}
      />
      <Divider />
      <CardContent>
        <Grid container spacing={4}>
          <Grid item lg={3}>
            <TextField
              required
              fullWidth
              label="결제방식"
              variant="outlined"
              name="payType"
              value={payType}
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
              <MenuItem key="card" value="card">
                신용카드
              </MenuItem>
              <MenuItem key="account" value="account">
                가상계좌
              </MenuItem>
            </TextField>
          </Grid>
          <Grid item lg={9}>
            <TextField
              fullWidth
              required
              label="결제 상세정보"
              variant="outlined"
              name="payMemo"
              value={payMemo}
              onChange={onChange}
              InputLabelProps={{
                shrink: true,
              }}
              size="small"
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
