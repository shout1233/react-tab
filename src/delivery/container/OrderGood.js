import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  Grid,
  TextField,
} from "@material-ui/core";
import { useSelector } from "react-redux";

export default function OrderGood() {
  const selectedDelivery = useSelector(
    ({ delivery }) => delivery.selectedDelivery
  );

  return (
    <Card>
      <CardHeader
        title="설치 정보"
        titleTypographyProps={{ variant: "subtitle1" }}
      />
      <Divider />
      <CardContent>
        <Grid container spacing={4}>
          <Grid item lg={3}>
            <TextField
              fullWidth
              label="설치상태"
              variant="outlined"
              name="deliveryStatus"
              value={selectedDelivery.deliveryStatus}
              InputLabelProps={{
                shrink: true,
              }}
              size="small"
            />
          </Grid>
          <Grid item lg={3}>
            <TextField
              fullWidth
              label="설치 제품"
              variant="outlined"
              name="userName"
              value={selectedDelivery.goodName}
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
