const initialDelivery = {
  id: "",
  orderId: "",
  userName: "",
  userHpNo: "",
  userAddress: "",
  deliveryRequestDate: "",
  goodCode: "",
  goodName: "",
  deliveryStatus: "",
  engineerName: "",
  endDate: "",
  deliveryMemo: "",
  deliveryCost: "",
};

export const initialState = {
  selectedDelivery: initialDelivery,
  deliveryGrid: {
    columnDefs: [
      {
        headerName: "Id",
        field: "id",
        hide: true,
      },
      {
        headerName: "주문ID",
        field: "orderId",
        pinned: "left",
      },
      {
        headerName: "사용자명",
        field: "userName",
        pinned: "left",
      },
      {
        headerName: "연락처",
        field: "userHpNo",
      },
      {
        headerName: "주소",
        field: "userAddress",
        width: 360,
      },
      {
        headerName: "설치희망일",
        field: "deliveryRequestDate",
      },
      {
        headerName: "설치상태",
        field: "deliveryStatus",
      },
      {
        headerName: "userAddress",
        field: "userAddress",
        hide: true,
      },
      {
        headerName: "goodCode",
        field: "goodCode",
        hide: true,
      },
      {
        headerName: "goodName",
        field: "goodName",
        hide: true,
      },
      {
        headerName: "engineerName",
        field: "engineerName",
        hide: true,
      },
      {
        headerName: "endDate",
        field: "endDate",
        hide: true,
      },
      {
        headerName: "deliveryMemo",
        field: "deliveryMemo",
        hide: true,
      },
      {
        headerName: "deliveryCost",
        field: "deliveryCost",
        hide: true,
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
