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

export default function OrderUser() {
  const selectedDelivery = useSelector(
    ({ delivery }) => delivery.selectedDelivery
  );

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
              value={selectedDelivery.deliveryRequestDate}
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
              required
              label="사용자명"
              variant="outlined"
              name="userName"
              value={selectedDelivery.userName}
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
              value={selectedDelivery.userHpNo}
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
              value={selectedDelivery.userAddress}
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
