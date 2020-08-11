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
import { insertProduct } from "../state/thunk";

ProductDetails.propTypes = {
  className: PropTypes.string,
};

export default function ProductDetails() {
  const [pdKindUpper, setPdKindUpper] = useState("");
  const [pdGroup, setPdGroup] = useState("");
  const [pdUseStatus, setPdUseStatus] = useState("");
  const [pdCode, setPdCode] = useState("");
  const [pdName, setPdName] = useState("");
  const [pdSalePrice, setPdSalePrice] = useState("");
  const [pdPurchasePrice, setPdPurchasePrice] = useState("");
  const [pdBornDate, setPdBornDate] = useState("");

  const dispatch = useDispatch();

  const productApiInfo = {
    kindUpper: pdKindUpper,
    productGroup: pdGroup,
    useStatus: pdUseStatus,
    productCode: pdCode,
    productName: pdName,
    salePrice: pdSalePrice,
    purchasePrice: pdPurchasePrice,
    bornDate: pdBornDate,
  };

  const productGridRow = {
    id: undefined,
    productCode: pdCode,
    productName: pdName,
    purchasePrice: pdPurchasePrice,
    salePrice: pdSalePrice,
    useStatus: pdUseStatus,
  };

  function updateProduct() {
    dispatch(insertProduct(productApiInfo, productGridRow));
  }

  return (
    <Card>
      <form autoComplete="off" noValidate>
        <CardHeader
          title="제품 상세"
          titleTypographyProps={{ variant: "h6" }}
        />
        <Divider />
        <CardContent>
          <Grid container spacing={1}>
            <Grid item lg={3} md={3} xl={3} xs={3}>
              <TextField
                required
                fullWidth
                label="제품분류(상)"
                variant="outlined"
                value={pdKindUpper}
                onChange={(e) => setPdKindUpper(e.target.value)}
                select
                InputLabelProps={{
                  shrink: true,
                }}
                // eslint-disable-next-line react/jsx-sort-props
                SelectProps={{ displayEmpty: true }}
              >
                <MenuItem key="" value=""></MenuItem>
                {productKindUpper.map((option, index) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item lg={3} md={3} xl={3} xs={3}>
              <TextField
                required
                fullWidth
                label="제품그룹"
                variant="outlined"
                value={pdGroup}
                onChange={(e) => setPdGroup(e.target.value)}
                select
                InputLabelProps={{
                  shrink: true,
                }}
                // eslint-disable-next-line react/jsx-sort-props
                SelectProps={{ displayEmpty: true }}
              >
                <MenuItem key="" value=""></MenuItem>
                {productGroup.map((option, index) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item lg={3} md={3} xl={3} xs={3}>
              <TextField
                required
                label="제품코드"
                variant="outlined"
                value={pdCode}
                onChange={(e) => setPdCode(e.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item lg={3} md={3} xl={3} xs={3}>
              <TextField
                required
                label="제품명"
                variant="outlined"
                value={pdName}
                onChange={(e) => setPdName(e.target.value)}
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
                variant="filled"
                value={pdUseStatus}
                onChange={(e) => setPdUseStatus(e.target.value)}
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
                label="출시일자"
                type="date"
                value={pdBornDate}
                onChange={(e) => setPdBornDate(e.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
                variant="filled"
              />
            </Grid>
            <Grid item lg={3} md={3} xl={3} xs={3}>
              <TextField
                label="사입가"
                name="numberformat"
                InputLabelProps={{
                  shrink: true,
                }}
                value={pdPurchasePrice}
                onChange={(e) => setPdPurchasePrice(e.target.value)}
                variant="filled"
                InputProps={{
                  inputComponent: NumberFormatCustom,
                }}
              />
            </Grid>
            <Grid item lg={3} md={3} xl={3} xs={3}>
              <TextField
                label="소비자가"
                name="numberformat"
                InputLabelProps={{
                  shrink: true,
                }}
                value={pdSalePrice}
                onChange={(e) => setPdSalePrice(e.target.value)}
                variant="filled"
                InputProps={{
                  inputComponent: NumberFormatCustom,
                }}
              />
            </Grid>
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

const productKindUpper = [
  {
    value: "A",
    label: "부품",
  },
  {
    value: "B",
    label: "사은품",
  },
  {
    value: "C",
    label: "서비스",
  },
  {
    value: "D",
    label: "제품",
  },
  {
    value: "E",
    label: "필터",
  },
];

const productGroup = [
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
