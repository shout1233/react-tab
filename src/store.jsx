import { produce } from "immer";

const initialState = {
  selectedMenus: [],
  tabIndex: 0,
};

const types = {
  CREATE_NEW_TAB: "CREATE_NEW_TAB",
  DESTROY_TAB: "DESTROY_TAB",
  SET_TAB_INDEX: "SET_TAB_INDEX",
  EDIT_CELL: "EDIT_CELL",
  ADD_MENU_TAB: "ADD_MENU_TAB",
  DELETE_MENU_TAB: "DELETE_MENU_TAB",
};

export default function menu(state = initialState, action) {
  const payload = action.payload;
  switch (action.type) {
    case types.SET_TAB_INDEX:
      return changeTabIndex(state, payload);
    case types.EDIT_CELL:
      return editGridCell(state, payload);
    case types.ADD_MENU_TAB:
      return addMenuTab(state, payload);
    case types.DELETE_MENU_TAB:
      return deleteMenuTab(state, payload);

    default:
      return state;
  }
}

function editGridCell(state, { data, oldValue, newValue, colDef }) {
  if (oldValue !== newValue) {
    return state;
  }
  return state;
}

function addMenuTab(state, selectedMenu) {
  return produce(state, (draftState) => {
    const alreadySelectedMenu = state.selectedMenus.find(
      (menu) => menu.menuId === selectedMenu.menuId
    );

    let selectedMenus = draftState.selectedMenus;
    if (!alreadySelectedMenu) selectedMenus.push(selectedMenu);
  });
}
function deleteMenuTab(state, menuId) {
  return produce(state, (draftState) => {
    const index = state.selectedMenus.findIndex(
      (menu) => menu.menuId === menuId
    );
    const lastIndex = state.selectedMenus.length - 1;
    draftState.tabIndex = index === lastIndex ? index - 1 : index;
    draftState.selectedMenus = state.selectedMenus.filter(
      (menu) => menu.menuId !== menuId
    );
  });
}

function changeTabIndex(state, tabIndex) {
  return produce(state, (draftState) => {
    draftState.tabIndex = tabIndex;
  });
}

export function getSelectedMenus(state) {
  return state.selectedMenus;
}

export function getTabIndex(state) {
  return state.tabIndex ? state.tabIndex : 0;
}
