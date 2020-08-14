import React, { useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import NumberFormat from "react-number-format";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Button,
  Grid,
  TextField,
  MenuItem,
} from "@material-ui/core";
import { insertGood } from "../state/thunk";

GoodDetails.propTypes = {
  className: PropTypes.string,
};

export default function GoodDetails() {
  // const [goodCode, setGoodCode] = useState("");
  // const [goodName, setGoodName] = useState("");
  // const [ownerShipPeriod, setOwnerShipPeriod] = useState(undefined);
  // const [mandatoryPeriod, setMandatoryPeriod] = useState(undefined);
  // const [byMonthPrice, setByMonthPrice] = useState(undefined);
  // const [oneOffPrice, setOneOffPrice] = useState(undefined);
  // const [useStatus, setUseStatus] = useState("");
  // const [productCode, setProductCode] = useState("");
  // const [crclPath, setCrclPath] = useState("");
  // const [custGroup, setCustGroup] = useState("");

  const [good, setGood] = useState({
    id: undefined,
    goodCode: "",
    goodName: "",
    goodGroup: "",
    ownerShipPeriod: undefined,
    mandatoryPeriod: undefined,
    byMonthPrice: undefined,
    oneOffPrice: undefined,
    useStatus: "",
    productCode: "",
    crclPath: "",
    custGroup: "",
  });

  const dispatch = useDispatch();

  function updateProduct() {
    dispatch(insertGood(good));
  }

  function onChange(e) {
    setGood({ ...good, [e.target.name]: e.target.value });
  }

  return (
    <Card>
      <form autoComplete="off" noValidate>
        <CardHeader
          title="상품 상세"
          titleTypographyProps={{ variant: "h6" }}
        />
        <Divider />
        <CardContent>
          <Grid container spacing={1}>
            <Grid item lg={3} md={3} xl={3} xs={3}>
              <TextField
                required
                fullWidth
                label="상품그룹"
                name="goodGroup"
                variant="outlined"
                value={good.goodGroup}
                onChange={onChange}
                select
                InputLabelProps={{
                  shrink: true,
                }}
                // eslint-disable-next-line react/jsx-sort-props
                SelectProps={{ displayEmpty: true }}
              >
                <MenuItem key="" value=""></MenuItem>
                {goodGroup.map((option, index) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item lg={3} md={3} xl={3} xs={3}>
              <TextField
                required
                label="상품코드"
                name="goodCode"
                variant="outlined"
                value={good.goodCode}
                onChange={onChange}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item lg={3} md={3} xl={3} xs={3}>
              <TextField
                required
                label="상품명"
                name="goodName"
                variant="outlined"
                value={good.goodName}
                onChange={onChange}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item lg={3} md={3} xl={3} xs={3}>
              <TextField
                required
                fullWidth
                label="사용유무"
                name="useStatus"
                variant="outlined"
                value={good.useStatus}
                onChange={onChange}
                select
                InputLabelProps={{
                  shrink: true,
                }}
                // eslint-disable-next-line react/jsx-sort-props
                SelectProps={{ displayEmpty: true }}
              >
                <MenuItem key="Y" value="Y">
                  Y
                </MenuItem>
                <MenuItem key="N" value="N">
                  N
                </MenuItem>
              </TextField>
            </Grid>
            <Grid item lg={3} md={3} xl={3} xs={3}>
              <TextField
                fullWidth
                label="월납금액"
                name="byMonthPrice"
                value={good.byMonthPrice}
                onChange={onChange}
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{
                  inputComponent: NumberFormatCustom,
                }}
                variant="outlined"
              />
            </Grid>
            <Grid item lg={3} md={3} xl={3} xs={3}>
              <TextField
                fullWidth
                label="일시불"
                name="oneOffPrice"
                value={good.oneOffPrice}
                onChange={onChange}
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{
                  inputComponent: NumberFormatCustom,
                }}
                variant="outlined"
              />
            </Grid>
            <Grid item lg={3} md={3} xl={3} xs={3}>
              <TextField
                label="의무사용(개월)"
                name="mandatoryPeriod"
                InputLabelProps={{
                  shrink: true,
                }}
                value={good.mandatoryPeriod}
                onChange={onChange}
                variant="outlined"
                InputProps={{
                  inputComponent: NumberFormatCustom,
                }}
              />
            </Grid>
            <Grid item lg={3} md={3} xl={3} xs={3}>
              <TextField
                label="소유권이전(개월)"
                name="ownerShipPeriod"
                InputLabelProps={{
                  shrink: true,
                }}
                value={good.ownerShipPeriod}
                onChange={onChange}
                variant="outlined"
                InputProps={{
                  inputComponent: NumberFormatCustom,
                }}
              />
            </Grid>
            <Grid item lg={3} md={3} xl={3} xs={3}>
              <TextField
                required
                label="제품코드"
                name="productCode"
                variant="outlined"
                value={good.productCode}
                onChange={onChange}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item lg={3} md={3} xl={3} xs={3}>
              <TextField
                required
                label="유통경로"
                name="crclPath"
                variant="outlined"
                value={good.crclPath}
                onChange={onChange}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item lg={3} md={3} xl={3} xs={3}>
              <TextField
                required
                label="고객그룹"
                name="custGroup"
                variant="outlined"
                value={good.custGroup}
                onChange={onChange}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item lg={3} md={3} xl={3} xs={3}></Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardActions>
          <Button color="primary" variant="contained" onClick={updateProduct}>
            저장
          </Button>
        </CardActions>
      </form>
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

const goodGroup = [
  {
    value: "ACL",
    label: "공기청정기",
  },
  {
    value: "BID",
    label: "비데",
  },
  {
    value: "DEH",
    label: "제습기",
  },
  {
    value: "DWA",
    label: "식기세척기",
  },
  {
    value: "GRA",
    label: "가스레인지",
  },
  {
    value: "WPU",
    label: "정수기",
  },
];
