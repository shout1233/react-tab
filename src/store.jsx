import { createStore, applyMiddleware } from "redux";
import { produce } from "immer";
import logger from "redux-logger";

import thunk from "redux-thunk";

const initialState = {
  tabIndex: 0,
  allGrids: [
    {
      id: "Thu Jun 04 2020 08:01:54 GMT+0100 (British Summer Time)0",
      columnDefs: [
        { field: "athlete" },
        { field: "age" },
        { field: "country" },
        { field: "year" },
        { field: "date" },
        { field: "sport" },
        { field: "gold" },
        { field: "silver" },
        { field: "bronze" },
        { field: "total" },
      ],
      url:
        "https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinnersSmall.json",
      sortModel: [],
      fetchAgain: true,
      name: "Tab 1",
    },
    {
      id: "Thu Jun 04 2020 08:01:54 GMT+0100 (British Summer Time)1",
      columnDefs: [
        { field: "athlete" },
        { field: "age" },
        { field: "country" },
        { field: "year" },
        { field: "date" },
        { field: "sport" },
        { field: "gold" },
        { field: "silver" },
        { field: "bronze" },
        { field: "total" },
      ],
      url:
        "https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinnersSmall.json",
      sortModel: [],
      fetchAgain: true,
      name: "Tab 2",
    },
  ],
};

const types = {
  CREATE_NEW_TAB: "CREATE_NEW_TAB",
  DESTROY_TAB: "DESTROY_TAB",

  ADD_NEW_TAB: "ADD_NEW_TAB",
  CHANGE_TAB_NAME: "CHANGE_TAB_NAME",

  SET_TAB_INDEX: "SET_TAB_INDEX",
  SET_CURRENT_VIEW_INFO_TO_NULL: "SET_CURRENT_VIEW_INFO_TO_NULL",
  SET_GRID_FETCH_AGAIN_TO_FALSE: "SET_GRID_FETCH_AGAIN_TO_FALSE",
  SET_GRID_DATA: "SET_GRID_DATA",
  FETCH_GRID_DATA: "FETCH_GRID_DATA",
};

function gridReducer(state = {}, action) {
  const payload = action.payload;
  switch (action.type) {
    case types.ADD_NEW_TAB:
      return addTab(state, payload);

    case types.CHANGE_TAB_NAME:
      return changeTabName(state, payload);

    case types.SET_TAB_INDEX:
      return changeTabIndex(state, payload);

    case types.SET_CURRENT_VIEW_INFO_TO_NULL:
      return setCurrentViewInfoToNull(state, payload);

    case types.SET_GRID_DATA:
      return setGridData(state, payload);

    case types.DESTROY_TAB:
      return destroyTab(state, payload);

    case types.SET_GRID_FETCH_AGAIN_TO_FALSE:
      return setGridFetchAgainToFalse(state, payload);

    default:
      return state;
  }
}

function addTab(state, gridConfig) {
  return produce(state, (draftState) => {
    let currentAllGrids = getAllGrids(draftState);
    currentAllGrids.push(gridConfig);
  });
}

function changeTabName(state, { viewId, gridId, newName }) {
  return produce(state, (draftState) => {
    let grid = getGridByGridId(draftState, gridId);
    grid.name = newName;
  });
}

function changeTabIndex(state, tabIndex) {
  return produce(state, (draftState) => {
    draftState.tabIndex = tabIndex;
  });
}

function setCurrentViewInfoToNull(state) {
  return produce(state, (draftState) => {
    draftState.currentViewInfo = null;
  });
}

function setGridData(state, { gridId, newData }) {
  return produce(state, (draftState) => {
    let grid = getGridByGridId(draftState, gridId);
    grid.rowData = newData;
  });
}

function setGridFetchAgainToFalse(state, { gridId }) {
  return produce(state, (draftState) => {
    let grid = getGridByGridId(draftState, gridId);
    grid.fetchAgain = false;
  });
}

function destroyTab(state, tabIndex) {
  return produce(state, (draftState) => {
    let currentViewAllGrids = getCurrentViewAllGrids(draftState);

    currentViewAllGrids.splice(tabIndex, 1);
  });
}

export function getCurrentViewAllGrids(state) {
  return state?.allViews[state?.currentViewInfo?.index]?.allGrids
    ? state?.allViews[state?.currentViewInfo?.index].allGrids
    : [];
}

export function getAllGrids(state) {
  return state?.allGrids ? state?.allGrids : [];
}

export function getTabIndex(state) {
  return state.tabIndex ? state.tabIndex : 0;
}

export function getCurrentViewTabIndex(state) {
  let currentViewInfo = state.currentViewInfo;
  let currentViewIndex = currentViewInfo?.index;
  let currentView = state?.allViews[currentViewIndex];
  let tabIndex = currentView?.tabIndex ? currentView.tabIndex : 0;

  return tabIndex;
}

export function getCurrentView(state) {
  return state.currentViewInfo
    ? state.allViews[state.currentViewInfo.index]
    : null;
}

export function getViewById(state, id) {
  let viewIndex = state.allViews.findIndex((view) => {
    return view.id === id;
  });

  let view = state.allViews[viewIndex];

  if (view) {
    return view;
  }

  throw new Error("VIEW NOT FOUND!!");
}

export function getViewIndexById(state, id) {
  let viewIndex = state.allViews.findIndex((view) => {
    return view.id === id;
  });

  if (viewIndex > -1) {
    return viewIndex;
  }

  throw new Error("VIEW INDEX NOT FOUND!!");
}

export function getGridByGridId(state, gridId) {
  let gridIndex = state.allGrids.findIndex((grid) => {
    return grid.id === gridId;
  });

  let grid = state.allGrids[gridIndex];

  if (grid) {
    return grid;
  }

  throw new Error("GRID NOT FOUND!!");
}

export function getGridById(state, gridId) {
  let allViews = state.allViews;
  let foundGrid;

  for (let i = 0; i < allViews.length; i++) {
    let allGrids = allViews[i].allGrids;

    if (typeof grid === "object") break;

    for (let j = 0; j < allGrids.length; j++) {
      let grid = allGrids[j];

      if (grid.id === gridId) {
        foundGrid = grid;
        break;
      }
    }
  }

  if (foundGrid) return foundGrid;

  new Error(" GRID NOT FOUND << < << ");
}

export default createStore(gridReducer, initialState, applyMiddleware(thunk));
