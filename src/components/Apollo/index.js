import React from "react";
import { useQuery } from "@apollo/client";
import { GET_TODOS, useAddTodo, useUpdateTodo, useDeleteTodo } from "./query";
import {todosVar} from "../../ApolloClient"
import { Icon } from "@iconify/react";
import apollostackIcon from "@iconify/icons-logos/apollostack";

// material ui
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";

// components
import AddTodo from "../AddTodo";
import TodoList from "../TodoList";

const Apollo = () => {
  const { data } = useQuery(GET_TODOS);
  const addTodo = useAddTodo(todosVar);
  const updateTodo = useUpdateTodo(todosVar);
  const deleteTodo = useDeleteTodo(todosVar);

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
          <Icon icon={apollostackIcon} width="50" height="50" />
        </Grid>
      </Grid>
      <Typography component="h2" variant="h5" align="center" gutterBottom>
        Apollo Client
        <AddTodo handleAdd={handleAdd} />
        <TodoList
          todos={data.todos}
          handleUpdate={handleUpdate}
          handleDelete={handleDelete}
        />
      </Typography>
    </Paper>
  );
};

export default Apollo;
