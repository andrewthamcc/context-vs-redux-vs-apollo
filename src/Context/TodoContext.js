import React, { useReducer } from "react";
import { createContext } from "react";
import TodoContextReducer, {
  ADD_TODO,
  UPDATE_TODO,
  DELETE_TODO,
} from "./TodoContextReducer";

export const TodoContext = createContext();

const TodoState = (props) => {
  const initialState = {
    todos: [],
  };

  const [state, dispatch] = useReducer(TodoContextReducer, initialState);

  const addTodo = (todo) => {
    dispatch({
      type: ADD_TODO,
      payload: todo,
    });
  };

  const updateTodo = (todo) => {
    dispatch({
      type: UPDATE_TODO,
      payload: todo,
    });
  };

  const deleteTodo = (todo) => {
    dispatch({
      type: DELETE_TODO,
      payload: todo,
    });
  };

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        addTodo,
        updateTodo,
        deleteTodo,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoState;
