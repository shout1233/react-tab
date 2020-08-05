import genId from "./helpers/idGenerator";

const types = {
  ADD_NEW_TAB: "ADD_NEW_TAB",
  SET_TAB_INDEX: "SET_TAB_INDEX",
  EDIT_CELL: "EDIT_CELL",
  ADD_MENU_TAB: "ADD_MENU_TAB",
  DELETE_MENU_TAB: "DELETE_MENU_TAB",
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

      let nextTabIndex = getState().menu.allGrids.length - 1;
      dispatch(actions.setTabIndex(nextTabIndex));
      dispatch(actions.fetchGridDataAction(gridConfig.id, gridConfig.url));
    };
  },

  addMenuAction(menuId, menuName, componentName) {
    return (dispatch, getState) => {
      const selectedMenus = getState().menu.selectedMenus;
      const tabIndex = selectedMenus.findIndex(
        (menu) => menu.menuId === menuId
      );

      if (tabIndex > -1) {
        dispatch(actions.setTabIndex(tabIndex));
      } else {
        dispatch(actions.addMenuTab(menuId, menuName, componentName));
        let nextTabIndex = getState().menu.selectedMenus.length - 1;
        dispatch(actions.setTabIndex(nextTabIndex));
      }
    };
  },

  setTabIndex(tabIndex) {
    return {
      type: types.SET_TAB_INDEX,
      payload: tabIndex,
    };
  },

  addMenuTab(menuId, menuName, componentName) {
    return {
      type: types.ADD_MENU_TAB,
      payload: { menuId, menuName, componentName },
    };
  },

  deleteMenuTab(menuId) {
    return {
      type: types.DELETE_MENU_TAB,
      payload: menuId,
    };
  },

  addNewTab(gridConfig) {
    return {
      type: types.ADD_NEW_TAB,
      payload: gridConfig,
    };
  },

  columnEdit(data, oldValue, newValue, colDef) {
    return {
      type: types.EDIT_CELL,
      payload: { data, oldValue, newValue, colDef },
    };
  },
};
