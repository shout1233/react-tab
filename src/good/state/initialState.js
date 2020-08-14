export const initialState = {
  goodGrid: {
    columnDefs: [
      {
        headerName: "Id",
        field: "id",
        hide: true,
      },
      {
        headerName: "상품코드",
        field: "goodCode",
        pinned: "left",
        checkboxSelection: true,
      },
      {
        headerName: "상품명",
        field: "goodName",
        pinned: "left",
      },
      {
        headerName: "상품그룹",
        field: "goodGroup",
      },
      {
        headerName: "의무사용기간",
        field: "mandatoryPeriod",
      },
      {
        headerName: "소유권이전기간",
        field: "ownerShipPeriod",
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
