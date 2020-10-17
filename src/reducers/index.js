import { combineReducers } from "redux";
import todoState from "./Todo"

const rootReducer = {
  todoState,
};

const RootState = combineReducers(rootReducer);

export default RootState;