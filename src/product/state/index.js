import {
  createSetValueAction,
  createReducer,
  setValueReducer,
  NOT_IMMUTABLE,
} from "../../common/redux-helper";
import { initialState } from "./initialState";

export const Types = {
  SetValue: "product/SetValue",
  SetList: "product/SetList",
  InsertInList: "product/InsertInList",
  DeleteFromList: "product/DeleteFromList",
  FetchList: "product/FetchList",
  Initialize: "product/Initialize",
};

export const actions = {
  setValue: createSetValueAction(Types.SetValue),
  setList: (products) => ({
    type: Types.SetList,
    products,
  }),
  insertInList: (product) => ({
    type: Types.InsertInList,
    product,
  }),
  deleteFromList: (productId) => ({
    type: Types.DeleteFromList,
    productId,
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
    state.productGrid.rowData = action.products;
  },
  [Types.InsertInList]: (state, action) => {
    state.productGrid.rowData.push(action.product);
  },
  [Types.DeleteFromList]: (state, action) => {
    const deleteIdx = state.productGrid.rowData.findIndex(
      (item) => item.id === action.productId
    );
    state.productGrid.rowData.splice(deleteIdx, 1);
  },
  [Types.Initialize]: () => initialState,
});

export default reducer;
