import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { GET_TODOS, ADD_TODO, UPDATE_TODO, DELETE_TODO } from "./query";
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
  const [addTodo] = useMutation(ADD_TODO);
  const [updateTodo] = useMutation(UPDATE_TODO);
  const [deleteTodo] = useMutation(DELETE_TODO);

  const theme = useTheme();

  const handleAdd = (todo) => {
    addTodo({ variables: { todo } });
  };

  const handleUpdate = (id) => {
    updateTodo({ variables: { id } });
  };

  const handleDelete = (id) => {
    deleteTodo({ variables: { id } });
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
