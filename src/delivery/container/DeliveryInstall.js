import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  Grid,
  TextField,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../state";
import NumberFormat from "react-number-format";

export default function DeliveryInstall() {
  const selectedDelivery = useSelector(
    ({ delivery }) => delivery.selectedDelivery
  );
  const dispatch = useDispatch();

  function onChange(e) {
    dispatch(
      actions.setValue("selectedDelivery", {
        ...selectedDelivery,
        [e.target.name]: e.target.value,
      })
    );
  }

  return (
    <Card>
      <CardHeader
        title="설치 내용"
        titleTypographyProps={{ variant: "subtitle1" }}
      />
      <Divider />
      <CardContent>
        <Grid container spacing={4}>
          <Grid item lg={3}>
            <TextField
              fullWidth
              label="설치기사"
              variant="outlined"
              name="engineerName"
              value={selectedDelivery.engineerName}
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
              label="설치일자"
              type="date"
              name="endDate"
              value={selectedDelivery.endDate}
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
              label="설치비"
              name="deliveryCost"
              InputLabelProps={{
                shrink: true,
              }}
              value={selectedDelivery.deliveryCost}
              onChange={onChange}
              variant="outlined"
              size="small"
              InputProps={{
                inputComponent: NumberFormatCustom,
              }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          <Grid item lg={12}>
            <TextField
              fullWidth
              required
              label="Memo"
              name="deliveryMemo"
              variant="outlined"
              value={selectedDelivery.deliveryMemo}
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

function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      isNumericString
    />
  );
}
