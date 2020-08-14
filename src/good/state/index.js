import {
  createSetValueAction,
  createReducer,
  setValueReducer,
  NOT_IMMUTABLE,
} from "../../common/redux-helper";
import { initialState } from "./initialState";

export const Types = {
  SetValue: "good/SetValue",
  SetList: "good/SetList",
  InsertInList: "good/InsertInList",
  DeleteFromList: "good/DeleteFromList",
  FetchList: "good/FetchList",
  Initialize: "good/Initialize",
};

export const actions = {
  setValue: createSetValueAction(Types.SetValue),
  setList: (goods) => ({
    type: Types.SetList,
    goods,
  }),
  insertInList: (good) => ({
    type: Types.InsertInList,
    good,
  }),
  deleteFromList: (goodId) => ({
    type: Types.DeleteFromList,
    goodId,
  }),
  fetchList: () => ({
    type: Types.FetchList,
  }),
  initialize: () => ({
    type: Types.Initialize,
    [NOT_IMMUTABLE]: true,
  }),
};

const reducer = createReducer(initialState, {
  [Types.SetValue]: setValueReducer,
  [Types.SetList]: (state, action) => {
    state.goodGrid.rowData = action.goods;
  },
  [Types.InsertInList]: (state, action) => {
    state.goodGrid.rowData.push(action.good);
  },
  [Types.DeleteFromList]: (state, action) => {
    const deleteIdx = state.goodGrid.rowData.findIndex(
      (item) => item.id === action.goodId
    );
    state.goodGrid.rowData.splice(deleteIdx, 1);
  },
  [Types.Initialize]: () => initialState,
});

export default reducer;
