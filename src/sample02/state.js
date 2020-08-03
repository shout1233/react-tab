import produce from "immer";

const SET_USER = "SET_USER";
const INSERT_OR_UPDATE = "INSERT_OR_UPDATE";
const DELETE = "DELETE";

export function setUser(user) {
  return { type: SET_USER, user };
}
export function insertOrUpdateUser(user) {
  return { type: INSERT_OR_UPDATE, user };
}
export function deleteUser(user) {
  return { type: DELETE, user };
}

export default function user(state = initialState, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case SET_USER:
        console.log("a");
        console.log(action.user);
        draft.selectedUser = action.user;
        break;
      case INSERT_OR_UPDATE:
        const item = state.gridInfo.rowData.find(
          (row) => row.userId === action.user.userId
        );
        if (item) {
          draft.gridInfo.rowData = draft.gridInfo.rowData.map((row) =>
            row.userId === action.user.userId ? action.user : row
          );
        } else {
          draft.gridInfo.rowData.push(action.user);
        }
        draft.selectedUser = initialUser;
        break;
      case DELETE:
        draft.gridInfo.rowData = draft.gridInfo.rowData.filter(
          (row) => row.userId !== action.user.userId
        );
        draft.selectedUser = initialUser;
        break;
      default:
    }
  });
}

const initialUser = {
  userId: "",
  userName: "",
  division: "",
  company: "",
  position: "",
  joinDate: "",
  email: "",
  phone: "",
  telNo: "",
  birthDay: "",
  addr: "",
};

const initialState = {
  selectedUser: initialUser,
  gridInfo: {
    columnDefs: [
      {
        headerName: "사번",
        field: "userId",
        width: 120,
        resizable: true,
        pinned: "left",
        checkboxSelection: true,
      },
      {
        headerName: "이름",
        field: "userName",
        pinned: "left",
      },
      {
        headerName: "회사",
        field: "company",
        cellRenderer: companyCellRenderer,
      },
      {
        headerName: "부서",
        field: "division",
        cellRenderer: divisionCellRenderer,
      },
      {
        headerName: "직급",
        field: "position",
        cellRenderer: positionCellRenderer,
      },
      {
        headerName: "생년월일",
        field: "birthDay",
      },
      {
        headerName: "전화번호",
        field: "telNo",
      },
      {
        headerName: "이메일",
        field: "email",
      },
      {
        headerName: "휴대폰",
        field: "phone",
      },
      {
        headerName: "입사년월",
        field: "joinDate",
      },
    ],
    rowData: [
      {
        userId: "06504",
        userName: "배성진",
        division: "1F71",
        company: "1",
        position: "C",
        joinDate: "2008.07.01",
        email: "shout@sk.com",
        phone: "01030073922",
        telNo: "024353922",
        birthDay: "19800811",
        addr: "서울시 송파구",
      },
      {
        userId: "06503",
        userName: "배현주",
        division: "1F71",
        company: "1",
        position: "C",
        joinDate: "2008.07.01",
        email: "shout@sk.com",
        phone: "01030073922",
        telNo: "024353922",
        birthDay: "19800811",
        addr: "서울시 송파구",
      },
    ],
    defaultColDef: {
      // set every column width
      width: 120,
      resizable: true,
    },
  },
};

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

function companyCellRenderer(node) {
  const selected = companys.find((item) => item.value === node.value);
  if (selected) return selected.label;
  return " - ";
}

function divisionCellRenderer(node) {
  const selected = divisions.find((item) => item.value === node.value);
  if (selected) return selected.label;
  return " - ";
}

function positionCellRenderer(node) {
  const selected = positions.find((item) => item.value === node.value);
  if (selected) return selected.label;
  return " - ";
}
