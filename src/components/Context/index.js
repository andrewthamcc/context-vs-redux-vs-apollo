import React, { useContext } from "react";
import { TodoContext } from "../../Context/TodoContext";
import { Icon } from "@iconify/react";
import reactIcon from "@iconify/icons-logos/react";

// material ui
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";

// components
import AddTodo from "../AddTodo";
import TodoList from "../TodoList";

const Context = () => {
  const todoContext = useContext(TodoContext);
  const { todos, addTodo, updateTodo, deleteTodo } = todoContext;

  const theme = useTheme();

  const handleAdd = (todo) => {
    addTodo(todo);
  };

  const handleUpdate = (id) => {
    updateTodo(id);
  };

  const handleDelete = (id) => {
    deleteTodo(id);
  };

  return (
    <Paper variant="outlined" style={{ padding: `${theme.spacing(2)}px` }}>
      <Grid container spacing={2} justify="center">
        <Grid item>
          <Icon icon={reactIcon} width="50" height="50" />
        </Grid>
      </Grid>
      <Typography component="h2" variant="h5" align="center" gutterBottom>
        React.Context
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

export default Context;
