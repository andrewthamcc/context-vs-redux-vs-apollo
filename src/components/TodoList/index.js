import React from "react";
import PropTypes from "prop-types";

// material ui
import List from "@material-ui/core/List";

// components
import TodoItem from "../TodoItem";

const TodoList = (props) => {
  const { todos, handleUpdate, handleDelete } = props;

  return (
    <List>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleUpdate={handleUpdate}
          handleDelete={handleDelete}
        />
      ))}
    </List>
  );
};

TodoItem.PropTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      todo: PropTypes.string.isRequired,
      complete: PropTypes.bool.isRequired,
    })
  ),
  handleUpdate: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default TodoList;
