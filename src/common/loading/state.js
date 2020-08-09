import {
  createReducer,
  createSetValueAction,
  setValueReducer,
} from "../redux-helper";

export const Types = {
  SetValue: "loading/SetValue",
};

export const loadingActions = {
  setValue: createSetValueAction(Types.SetValue),
};

const initialState = {
  open: false,
};

const reducer = createReducer(initialState, {
  [Types.SetValue]: setValueReducer,
});

export default reducer;
