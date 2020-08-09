import { actions } from "../state";

export const addMenuTab = (addMenu) => (dispatch, getState) => {
  const selectedMenus = getState().menuTab.selectedMenus;
  const tabIndex = selectedMenus.findIndex(
    (menu) => menu.menuId === addMenu.menuId
  );

  if (tabIndex > -1) {
    dispatch(actions.setValue("tabIndex", tabIndex));
  } else {
    dispatch(actions.addTab(addMenu));
    const nextTabIndex = getState().menuTab.selectedMenus.length - 1;
    dispatch(actions.setValue("tabIndex", nextTabIndex));
  }
};
