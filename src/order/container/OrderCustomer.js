import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  Button,
  Grid,
  TextField,
  MenuItem,
  makeStyles,
} from "@material-ui/core";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { actions } from "../state";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function OrderCustomer() {
  const classes = useStyles();
  const [
    custName,
    custGenderCode,
    custBirthday,
    custHpNo,
    custAddress,
    safeKey,
  ] = useSelector(
    ({ order }) => [
      order.custName,
      order.custGenderCode,
      order.custBirthday,
      order.custHpNo,
      order.custAddress,
      order.safeKey,
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
        title="주문자 정보"
        titleTypographyProps={{ variant: "subtitle1" }}
      />
      <Divider />
      <CardContent>
        <Grid container spacing={4}>
          <Grid item lg={4}>
            <TextField
              fullWidth
              required
              label="고객명"
              variant="outlined"
              name="custName"
              value={custName}
              onChange={onChange}
              InputLabelProps={{
                shrink: true,
              }}
              size="small"
            />
          </Grid>
          <Grid item lg={2}>
            <TextField
              required
              fullWidth
              label="성별"
              variant="outlined"
              name="custGenderCode"
              value={custGenderCode}
              onChange={onChange}
              select
              InputLabelProps={{
                shrink: true,
              }}
              size="small"
              SelectProps={{ displayEmpty: true }}
            >
              <MenuItem key="MALE" value="MALE">
                남
              </MenuItem>
              <MenuItem key="FEMAIL" value="FEMAIL">
                여
              </MenuItem>
            </TextField>
          </Grid>
          <Grid item lg={3}>
            <TextField
              fullWidth
              label="생년월일"
              type="date"
              name="custBirthday"
              value={custBirthday}
              onChange={onChange}
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item lg={3}>
            <TextField
              fullWidth
              label="휴대폰번호"
              type="number"
              name="custHpNo"
              InputLabelProps={{
                shrink: true,
              }}
              value={custHpNo}
              onChange={onChange}
              variant="outlined"
              size="small"
            />
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          <Grid item spacing={2}>
            <TextField
              disabled
              label="SafeKey"
              name="safeKey"
              InputLabelProps={{
                shrink: true,
              }}
              value={safeKey}
              onChange={onChange}
              variant="filled"
              size="small"
            />
            <Button
              className={classes.margin}
              color="secondary"
              variant="contained"
              size="medium"
              onClick={() =>
                dispatch(actions.setValue("safeKey", "1234567890"))
              }
            >
              조회
            </Button>
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          <Grid item lg={12}>
            <TextField
              fullWidth
              required
              label="주소"
              name="custAddress"
              variant="outlined"
              value={custAddress}
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
