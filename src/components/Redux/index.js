import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ADD_TODO, UPDATE_TODO, DELETE_TODO } from "../../actions/todo";
import { Icon } from "@iconify/react";
import reduxIcon from "@iconify/icons-logos/redux";

// material ui
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";

// components
import AddTodo from "../AddTodo";
import TodoList from "../TodoList";

const Redux = () => {
  const todos = useSelector((state) => state.todoState.todos);
  const dispatch = useDispatch();

  const theme = useTheme();

  const handleAdd = (todo) => {
    dispatch({
      type: ADD_TODO,
      payload: todo,
    });
  };

  const handleUpdate = (id) => {
    dispatch({
      type: UPDATE_TODO,
      payload: id,
    });
  };

  const handleDelete = (id) => {
    dispatch({
      type: DELETE_TODO,
      payload: id,
    });
  };

  return (
    <Paper variant="outlined" style={{ padding: `${theme.spacing(2)}px` }}>
      <Grid container spacing={2} justify="center">
        <Grid item>
          <Icon icon={reduxIcon} width="50" height="50" />
        </Grid>
      </Grid>
      <Typography component="h2" variant="h5" align="center" gutterBottom>
        Redux
        <AddTodo handleAdd={handleAdd} />
        <TodoList
          todos={todos}
          handleUpdate={handleUpdate}
          handleDelete={handleDelete}
        />
      </Typography>
    </Paper>
  );
};

export default Redux;
