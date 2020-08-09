import React from "react";
import PropTypes from "prop-types";
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
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../state";
import { changeTodoList } from "../state/thunk";

TodoDetails.propTypes = {
  className: PropTypes.string,
};

export default function TodoDetails() {
  const todo = useSelector((state) => state.todo.todo);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    console.log("11");
    const changedValue =
      event.target.value !== null &&
      (event.target.name === "id" || event.target.name === "userId")
        ? parseInt(event.target.value)
        : event.target.value;

    const changedTodo = { ...todo, [event.target.name]: changedValue };
    dispatch(actions.setValue("todo", changedTodo));
  };

  function changeList() {
    dispatch(changeTodoList(todo));
  }

  return (
    <Card>
      <form autoComplete="off" noValidate>
        <CardHeader title="사용자 정보" />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={4} xs={12}>
              <TextField
                fullWidth
                label="userId"
                margin="dense"
                name="userId"
                onChange={handleChange}
                required
                value={todo.userId}
                variant="outlined"
              />
            </Grid>
            <Grid item md={4} xs={12}>
              <TextField
                fullWidth
                label="todoId"
                margin="dense"
                name="id"
                onChange={handleChange}
                required
                value={todo.id}
                variant="outlined"
              />
            </Grid>
            <Grid item md={4} xs={12}></Grid>
            <Grid item md={12} xs={12}>
              <TextField
                fullWidth
                label="title"
                margin="dense"
                name="title"
                onChange={handleChange}
                value={todo.title}
                variant="outlined"
              ></TextField>
            </Grid>
            <Grid item md={4} xs={12}>
              <TextField
                fullWidth
                label="완료여부"
                margin="dense"
                name="completed"
                onChange={handleChange}
                select
                // eslint-disable-next-line react/jsx-sort-props
                SelectProps={{ native: true, displayEmpty: true }}
                value={todo.completed}
                variant="outlined"
              >
                <option value=""></option>
                <option key={0} value="false">
                  진행중
                </option>
                <option key={1} value="true">
                  완료
                </option>
              </TextField>
            </Grid>
            <Grid item md={8} xs={12}></Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardActions>
          <Button color="primary" variant="contained" onClick={changeList}>
            저장
          </Button>
        </CardActions>
      </form>
    </Card>
  );
}
