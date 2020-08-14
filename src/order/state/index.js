import {
  createSetValueAction,
  createReducer,
  setValueReducer,
  NOT_IMMUTABLE,
} from "../../common/redux-helper";
import { initialState } from "./initialState";

export const Types = {
  SetValue: "order/SetValue",
  Initialize: "order/Initialize",
};

export const actions = {
  setValue: createSetValueAction(Types.SetValue),
  initialize: () => ({
    type: Types.Initialize,
    [NOT_IMMUTABLE]: true,
  }),
};

const reducer = createReducer(initialState, {
  [Types.SetValue]: setValueReducer,
  [Types.Initialize]: () => initialState,
});

export default reducer;
