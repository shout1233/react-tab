import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Card,
  CardHeader,
  Divider,
  CardContent,
  CardActions,
  Button,
} from "@material-ui/core";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { actions } from "../state";
import { snackbarActions } from "../../common/snackbar/state";
import SnackBar from "../../common/snackbar/SnackBar";

export default function TodoList() {
  const { columnDefs, rowData, defaultColDef } = useSelector(
    (state) => state.todo.todoGrid
  );
  const dispatch = useDispatch();

  function deleteTodo() {
    if (validateDelete()) {
      const deletedList = makeDeletedList(rowData);
      dispatch(actions.setTodoList(deletedList));
    } else {
      dispatch(snackbarActions.setOpen("삭제할 할일을 선택해주세요.", "error"));
    }
  }

  return (
    <Card>
      <CardHeader title="사용자 리스트" />
      <Divider />
      <CardContent>
        <div
          className="ag-theme-alpine"
          style={{
            height: "550px",
            width: "100%",
          }}
        >
          <AgGridReact
            columnDefs={columnDefs}
            rowData={rowData}
            defaultColDef={defaultColDef}
            rowSelection="single"
            onGridReady={onGridReady}
          ></AgGridReact>
        </div>
      </CardContent>
      <Divider />
      <CardActions>
        <Button color="primary" variant="contained" onClick={deleteTodo}>
          삭제
        </Button>
      </CardActions>
      <SnackBar />
    </Card>
  );
}

let gridApi = null;
function onGridReady(params) {
  gridApi = params.api;
}

function makeDeletedList(origin) {
  const selectedRows = gridApi.getSelectedRows();
  const deletedData = origin.filter(
    (row) =>
      row.userId !== selectedRows[0].userId || row.id !== selectedRows[0].id
  );
  return deletedData;
}

function validateDelete() {
  const selectedRows = gridApi.getSelectedRows();
  let result = false;
  if (selectedRows.length === 1) result = true;

  return result;
}
