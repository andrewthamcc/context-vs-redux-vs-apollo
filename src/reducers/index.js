import { combineReducers } from "redux";
import todoState from "./todo";

const rootReducer = {
  todoState,
};

const RootState = combineReducers(rootReducer);

export default RootState;
