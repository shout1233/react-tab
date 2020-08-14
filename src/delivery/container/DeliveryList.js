import React from "react";
import { useSelector } from "react-redux";
import { Card, CardHeader, Divider, CardContent } from "@material-ui/core";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

export default function DeliveryList({ onRowClick }) {
  const { columnDefs, rowData, defaultColDef } = useSelector(
    (state) => state.delivery.deliveryGrid
  );

  function onSelectionChanged(row) {
    const selectedRows = gridApi.getSelectedRows();
    if (selectedRows.length === 1) {
      onRowClick(selectedRows[0]);
    }
  }

  return (
    <Card>
      <CardHeader
        title="설치 리스트"
        titleTypographyProps={{ variant: "sublist1" }}
      />
      <Divider />
      <CardContent>
        <div
          className="ag-theme-alpine"
          style={{
            height: "250px",
            width: "100%",
          }}
        >
          <AgGridReact
            columnDefs={columnDefs}
            rowData={rowData}
            defaultColDef={defaultColDef}
            rowSelection="single"
            onSelectionChanged={onSelectionChanged}
            onGridReady={onGridReady}
          ></AgGridReact>
        </div>
      </CardContent>
    </Card>
  );
}

let gridApi = null;
function onGridReady(params) {
  gridApi = params.api;
}
