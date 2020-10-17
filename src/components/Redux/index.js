import React from "react";
import { useSelector } from "react-redux";
import { Icon } from "@iconify/react";
import reduxIcon from "@iconify/icons-logos/redux";
import { useTheme } from "@material-ui/core/styles";

// material ui
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

// components
import AddTodo from "../AddTodo";
import TodoList from "../TodoList";

const Redux = () => {
  const todos = useSelector((state) => state.todoState.todos);

  const theme = useTheme();

  const handleAdd = (todo) => {};

  const handleUpdate = (id) => {};

  const handleDelete = (id) => {};

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
