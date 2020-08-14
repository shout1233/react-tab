import {
  createSetValueAction,
  createReducer,
  setValueReducer,
  NOT_IMMUTABLE,
} from "../../common/redux-helper";
import { initialState } from "./initialState";

export const Types = {
  SetValue: "delivery/SetValue",
  SetList: "delivery/SetList",
  Initialize: "delivery/Initialize",
};

export const actions = {
  setValue: createSetValueAction(Types.SetValue),
  setList: (deliveries) => ({
    type: Types.SetList,
    deliveries,
  }),
  initialize: () => ({
    type: Types.Initialize,
    [NOT_IMMUTABLE]: true,
  }),
};

const reducer = createReducer(initialState, {
  [Types.SetValue]: setValueReducer,
  [Types.SetList]: (state, action) => {
    state.deliveryGrid.rowData = action.deliveries;
  },
  [Types.Initialize]: () => initialState,
});

export default reducer;
