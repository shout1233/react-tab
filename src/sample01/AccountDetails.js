import React, { useState, useEffect } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Grid,
  Button,
  TextField,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {},
}));

AccountDetails.propTypes = {
  className: PropTypes.string,
};

export default function AccountDetails({
  className,
  values,
  onChange,
  onSave,
  ...rest
}) {
  const classes = useStyles();
  //   const [values, setValues] = useState({
  //     userId: "",
  //     userName: "",
  //     division: "",
  //     company: "",
  //     position: "",
  //     joinDate: "",
  //     email: "",
  //     phone: "",
  //     telNo: "",
  //     birthDay: "",
  //     addr: "",
  //   });

  const handleChange = (event) => {
    onChange({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  function onClickSave() {
    onSave(values);
  }

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <form autoComplete="off" noValidate>
        <CardHeader title="사용자 정보" />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={4} xs={12}>
              <TextField
                fullWidth
                label="사번"
                margin="dense"
                name="userId"
                onChange={handleChange}
                required
                value={values.userId}
                variant="outlined"
              />
            </Grid>
            <Grid item md={4} xs={12}>
              <TextField
                fullWidth
                label="이름"
                margin="dense"
                name="userName"
                onChange={handleChange}
                required
                value={values.userName}
                variant="outlined"
              />
            </Grid>
            <Grid item md={4} xs={12}></Grid>
            <Grid item md={4} xs={12}>
              <TextField
                fullWidth
                label="부서코드"
                margin="dense"
                name="division"
                onChange={handleChange}
                select
                // eslint-disable-next-line react/jsx-sort-props
                SelectProps={{ native: true, displayEmpty: true }}
                value={values.division}
                variant="outlined"
              >
                <option value=""></option>
                {divisions.map((option, index) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid item md={4} xs={12}>
              <TextField
                fullWidth
                label="회사코드"
                margin="dense"
                name="company"
                onChange={handleChange}
                select
                // eslint-disable-next-line react/jsx-sort-props
                SelectProps={{ native: true, displayEmpty: true }}
                value={values.company}
                variant="outlined"
              >
                <option value=""></option>
                {companys.map((option, index) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid item md={4} xs={12}>
              <TextField
                fullWidth
                label="직급코드"
                margin="dense"
                name="position"
                onChange={handleChange}
                select
                // eslint-disable-next-line react/jsx-sort-props
                SelectProps={{ native: true, displayEmpty: true }}
                value={values.position}
                variant="outlined"
              >
                <option value=""></option>
                {positions.map((option, index) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid item md={4} xs={12}>
              <TextField
                fullWidth
                label="입사일"
                margin="dense"
                name="joinDate"
                onChange={handleChange}
                value={values.joinDate}
                variant="outlined"
              />
            </Grid>
            <Grid item md={4} xs={12}>
              <TextField
                fullWidth
                label="생년월일"
                margin="dense"
                name="birthDay"
                onChange={handleChange}
                value={values.birthDay}
                variant="outlined"
              />
            </Grid>
            <Grid item md={4} xs={12}>
              <TextField
                fullWidth
                label="전화번호"
                margin="dense"
                name="telNo"
                onChange={handleChange}
                value={values.telNo}
                variant="outlined"
              />
            </Grid>
            <Grid item md={4} xs={12}>
              <TextField
                fullWidth
                label="이메일"
                margin="dense"
                name="email"
                onChange={handleChange}
                required
                value={values.email}
                variant="outlined"
              />
            </Grid>
            <Grid item md={4} xs={12}>
              <TextField
                fullWidth
                label="Phone"
                margin="dense"
                name="phone"
                onChange={handleChange}
                type="number"
                value={values.phone}
                variant="outlined"
              />
            </Grid>
            <Grid item md={4} xs={12}></Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="집주소"
                margin="dense"
                name="addr"
                onChange={handleChange}
                required
                value={values.addr}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardActions>
          <Button color="primary" variant="contained" onClick={onClickSave}>
            저장
          </Button>
        </CardActions>
      </form>
    </Card>
  );
}

const companys = [
  {
    value: "1",
    label: "매직서비스",
  },
  {
    value: "2",
    label: "SK매직",
  },
  {
    value: "3",
    label: "파세코 서비스",
  },
];

const divisions = [
  {
    value: "1B39",
    label: "동양매직강동점",
  },
  {
    value: "1F71",
    label: "동양매직안성점",
  },
  {
    value: "AA1",
    label: "대리점",
  },
];

const positions = [
  {
    value: "A",
    label: "사원",
  },
  {
    value: "B",
    label: "대리",
  },
  {
    value: "C",
    label: "과장",
  },
];
