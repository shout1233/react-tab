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
import { snackbarActions } from "../../common/snackbar/state";
import { deleteGood } from "../state/thunk";

export default function TodoList() {
  const { columnDefs, rowData, defaultColDef } = useSelector(
    (state) => state.good.goodGrid
  );
  const dispatch = useDispatch();

  function onDeleteClick() {
    if (validateDelete()) {
      dispatch(deleteGood(getSelectedId()));
    } else {
      dispatch(snackbarActions.setOpen("삭제할 상품을 선택해주세요.", "error"));
    }
  }

  return (
    <Card>
      <CardHeader
        title="상품 리스트"
        titleTypographyProps={{ variant: "h6" }}
      />
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
        <Button color="primary" variant="contained" onClick={onDeleteClick}>
          삭제
        </Button>
      </CardActions>
    </Card>
  );
}

let gridApi = null;
function onGridReady(params) {
  gridApi = params.api;
}

function getSelectedId() {
  const selectedRows = gridApi.getSelectedRows();
  return selectedRows[0].id;
}

function validateDelete() {
  const selectedRows = gridApi.getSelectedRows();
  let result = false;
  if (selectedRows.length === 1) result = true;

  return result;
}
