import { combineReducers } from "redux";
import user from "../sample02/state";
import todoReducer from "../sample03/state";
import snackbarReducer from "../common/snackbar/state";
import menuTabReducer from "../layout/state";
import loadingReducer from "../common/loading/state";

export default combineReducers({
  menuTab: menuTabReducer,
  user,
  todo: todoReducer,
  snackbar: snackbarReducer,
  loading: loadingReducer,
});
