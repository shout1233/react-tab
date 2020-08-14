import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  Grid,
  TextField,
} from "@material-ui/core";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { actions } from "../state";

export default function OrderUser() {
  const [userName, userHpNo, userAddress, deliveryRequestDate] = useSelector(
    ({ order }) => [
      order.userName,
      order.userHpNo,
      order.userAddress,
      order.deliveryRequestDate,
    ],
    shallowEqual
  );
  const dispatch = useDispatch();

  function onChange(e) {
    dispatch(actions.setValue(e.target.name, e.target.value));
  }

  return (
    <Card>
      <CardHeader
        title="실사용자 정보"
        titleTypographyProps={{ variant: "subtitle1" }}
      />
      <Divider />
      <CardContent>
        <Grid container spacing={4}>
          <Grid item lg={3}>
            <TextField
              fullWidth
              label="설치희망일자"
              type="date"
              name="deliveryRequestDate"
              value={deliveryRequestDate}
              onChange={onChange}
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item lg={4}>
            <TextField
              fullWidth
              required
              label="사용자명"
              variant="outlined"
              name="userName"
              value={userName}
              onChange={onChange}
              InputLabelProps={{
                shrink: true,
              }}
              size="small"
            />
          </Grid>
          <Grid item lg={3}>
            <TextField
              fullWidth
              label="휴대폰번호"
              type="number"
              name="userHpNo"
              InputLabelProps={{
                shrink: true,
              }}
              value={userHpNo}
              onChange={onChange}
              variant="outlined"
              size="small"
            />
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          <Grid item lg={12}>
            <TextField
              fullWidth
              required
              label="주소"
              name="userAddress"
              variant="outlined"
              value={userAddress}
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
