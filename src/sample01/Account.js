import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid } from "@material-ui/core";

import AccountList from "./AccountList";
import AccountDetails from "./AccountDetails";
import promise from "immer";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
  },
}));

export default function Account() {
  const classes = useStyles();
  const [user, SetUser] = useState(initialUser);
  const [gridInfo, setGridInfo] = useState({
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
  });

  function onSave(user) {
    console.log(user);
    const item = gridInfo.rowData.find((row) => row.userId === user.userId);

    setGridInfo(
      promise(gridInfo, (draft) => {
        if (item) {
          draft.rowData = draft.rowData.map((row) =>
            row.userId === user.userId ? user : row
          );
        } else {
          draft.rowData.push(user);
        }
      })
    );

    SetUser(initialUser);
  }

  function onChange(user) {
    SetUser(user);
  }

  function onRowClick(userInfo) {
    SetUser(userInfo);
  }

  function onDelete(userInfo) {
    setGridInfo(
      promise(gridInfo, (draft) => {
        draft.rowData = draft.rowData.filter(
          (row) => row.userId !== userInfo.userId
        );
      })
    );
    SetUser(initialUser);
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item lg={6} md={6} xl={6} xs={6}>
          <AccountList
            gridInfo={gridInfo}
            onRowClick={onRowClick}
            onDelete={onDelete}
          />
        </Grid>
        <Grid item lg={6} md={6} xl={6} xs={6}>
          <AccountDetails onSave={onSave} onChange={onChange} values={user} />
        </Grid>
      </Grid>
    </div>
  );
}

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
