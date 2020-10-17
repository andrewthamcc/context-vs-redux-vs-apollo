import React, { useState } from "react";
import PropTypes from "prop-types";

// material ui
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

const AddTodo = (props) => {
  // state
  const [todoText, setTodoText] = useState("");

  // props
  const { handleAdd } = props;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todoText === "") {
      return;
    }

    handleAdd(todoText);

    setTodoText("");
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <Grid container spacing={1}>
        <Grid item xs={8}>
          <TextField
            placeholder="to do..."
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <Button
            variant="outlined"
            color="primary"
            disabled={todoText === ""}
            fullWidth
          >
            Add
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

AddTodo.propTypes = {
  handleAdd: PropTypes.func.isRequired,
};

export default AddTodo;
