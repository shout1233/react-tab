export const initialState = {
  productGrid: {
    columnDefs: [
      {
        headerName: "Id",
        field: "id",
        width: 120,
        resizable: true,
        pinned: "left",
        checkboxSelection: true,
      },
      {
        headerName: "제품코드",
        field: "productCode",
        pinned: "left",
      },
      {
        headerName: "제품명",
        field: "productName",
      },
      {
        headerName: "사입가",
        field: "purchasePrice",
      },
      {
        headerName: "소비자가",
        field: "salePrice",
      },
      {
        headerName: "사용여부",
        field: "useStatus",
      },
    ],
    rowData: [],
    defaultColDef: {
      // set every column width
      width: 120,
      resizable: true,
    },
  },
};
