import { combineReducers } from "redux";
import todoReducer from "./todoReducer";
import usersReducer from "./usersReducer";

export default combineReducers({
  todo: todoReducer,
  users: usersReducer,
});
