import { createReducer } from "../redux-helper";

export const Types = {
  SetClose: "snackbar/SetClose",
  SetOpen: "snackbar/SetOpen",
};

export const snackbarActions = {
  setClose: () => ({
    type: Types.SetClose,
  }),
  setOpen: (message, type) => ({
    type: Types.SetOpen,
    snackbar: { message, type },
  }),
};

const initialState = {
  snackbarOpen: false,
  snackbarMessage: "",
  snackbarType: "error",
};

const reducer = createReducer(initialState, {
  [Types.SetClose]: (state) => {
    state.snackbarOpen = false;
  },
  [Types.SetOpen]: (state, action) => {
    state.snackbarOpen = true;
    state.snackbarMessage = action.snackbar.message;
    state.snackbarType = action.snackbar.type;
  },
});

export default reducer;
