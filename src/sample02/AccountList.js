import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/styles";
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

const useStyles = makeStyles(() => ({
  root: {},
}));

export default function AccountList({
  className,
  gridInfo,
  onRowClick,
  onDelete,
  ...rest
}) {
  const classes = useStyles();

  function onSelectionChanged(row) {
    const selectedRows = gridApi.getSelectedRows();
    if (selectedRows.length === 1) {
      onRowClick(selectedRows[0]);
    }
  }

  function onClickDelete(row) {
    const selectedRows = gridApi.getSelectedRows();
    if (selectedRows.length === 1) {
      onDelete(selectedRows[0]);
    }
  }

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
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
            columnDefs={gridInfo.columnDefs}
            rowData={gridInfo.rowData}
            defaultColDef={gridInfo.defaultColDef}
            rowSelection="single"
            onSelectionChanged={onSelectionChanged}
            onGridReady={onGridReady}
          ></AgGridReact>
        </div>
      </CardContent>
      <Divider />
      <CardActions>
        <Button color="primary" variant="contained" onClick={onClickDelete}>
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
