import { combineReducers } from "redux";
import menu from "../store";
import user from "../sample02/state";

export default combineReducers({
  menu,
  user,
});
