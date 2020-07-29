import genId from "./helpers/idGenerator";

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
  EDIT_CELL: "EDIT_CELL",
};

export const actions = {
  // COMPLEX ACTIONS

  changeTabIndexAction(tabIndex) {
    return (dispatch, getState) => {
      dispatch(actions.setTabIndex(tabIndex));
    };
  },

  addTabAction(gridConfig) {
    return (dispatch, getState) => {
      gridConfig.id = genId();
      dispatch(actions.addNewTab(gridConfig));

      let nextTabIndex = getState().allGrids.length - 1;
      console.log("nextTabIndex : " + nextTabIndex);
      dispatch(actions.setTabIndex(nextTabIndex));
      dispatch(actions.fetchGridDataAction(gridConfig.id, gridConfig.url));
    };
  },

  fetchGridDataAction(gridId, url) {
    return (dispatch) => {
      fetch(url)
        .then((response) => {
          return response.json().then((rowData) => {
            dispatch(actions.fetchGridDataSuccess(gridId, rowData));
          });
        })
        .catch((err) => {
          dispatch(actions.fetchGridDataFail(err));
        });
    };
  },

  fetchGridDataSuccess(gridId, rowData) {
    return (dispatch) => {
      dispatch(actions.setGridData(gridId, rowData));
      dispatch(actions.setGridFetchAgainToFalse(gridId));
    };
  },

  fetchGridDataFail(err) {
    new Error(err, " <<<< FETCH GRID DATA FAIL");
  },

  setTabIndex(tabIndex) {
    return {
      type: types.SET_TAB_INDEX,
      payload: tabIndex,
    };
  },

  addNewTab(gridConfig) {
    return {
      type: types.ADD_NEW_TAB,
      payload: gridConfig,
    };
  },

  setGridData(gridId, newData) {
    return {
      type: types.SET_GRID_DATA,
      payload: { gridId, newData },
    };
  },

  columnEdit(data, oldValue, newValue, colDef) {
    return {
      type: types.EDIT_CELL,
      payload: { data, oldValue, newValue, colDef },
    };
  },
  setGridFetchAgainToFalse(gridId) {
    return {
      type: types.SET_GRID_FETCH_AGAIN_TO_FALSE,
      payload: { gridId },
    };
  },
};
