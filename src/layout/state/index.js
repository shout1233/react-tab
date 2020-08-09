import {
  createSetValueAction,
  createReducer,
  setValueReducer,
} from "../../common/redux-helper";

export const Types = {
  SetValue: "menuTab/SetValue",
  AddTab: "menuTab/AddTab",
  DeleteTab: "menuTab/DeleteTab",
};

export const actions = {
  setValue: createSetValueAction(Types.SetValue),
  addTab: (menu) => ({
    type: Types.AddTab,
    menu,
  }),
  deleteTab: (menuId) => ({
    type: Types.DeleteTab,
    menuId,
  }),
};

const initialState = {
  selectedMenus: [],
  tabIndex: 0,
};

const reducer = createReducer(initialState, {
  [Types.SetValue]: setValueReducer,
  [Types.AddTab]: (state, action) => {
    const alreadySelectedMenu = state.selectedMenus.find(
      (menu) => menu.menuId === action.menu.menuId
    );

    const selectedMenus = state.selectedMenus;
    if (!alreadySelectedMenu) selectedMenus.push(action.menu);
  },
  [Types.DeleteTab]: (state, action) => {
    const index = state.selectedMenus.findIndex(
      (menu) => menu.menuId === action.menuId
    );
    const lastIndex = state.selectedMenus.length - 1;
    state.tabIndex = index === lastIndex ? index - 1 : index;
    state.selectedMenus = state.selectedMenus.filter(
      (menu) => menu.menuId !== action.menuId
    );
  },
});

export default reducer;
