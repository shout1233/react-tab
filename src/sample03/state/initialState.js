const initialTodo = {
  userId: "",
  id: "",
  title: "",
  completed: false,
};

export const initialState = {
  todo: initialTodo,
  todoGrid: {
    columnDefs: [
      {
        headerName: "User Id",
        field: "userId",
        width: 120,
        resizable: true,
        pinned: "left",
        checkboxSelection: true,
      },
      {
        headerName: "Todo Id",
        field: "id",
        pinned: "left",
      },
      {
        headerName: "Title",
        field: "title",
      },
      {
        headerName: "Completed",
        field: "completed",
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
