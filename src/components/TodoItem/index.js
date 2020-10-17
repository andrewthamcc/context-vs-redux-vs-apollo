import React from "react";
import PropTypes from "prop-types";

// material ui
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DeleteIcon from "@material-ui/icons/Delete";

const TodoItem = (props) => {
  const { todo, handleUpdate, handleDelete } = props;

  const listItemTextStyle = {
    textDecoration: todo.complete ? "line-through" : "none",
  };

  return (
    <ListItem button onClick={() => handleUpdate(todo.id)}>
      <ListItemText primary={todo.todo} style={listItemTextStyle} />
      <ListItemIcon onClick={() => handleDelete(todo.id)}>
        <DeleteIcon />
      </ListItemIcon>
    </ListItem>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number,
    todo: PropTypes.string.isRequired,
    complete: PropTypes.bool.isRequired,
  }).isRequired,
  handleUpdate: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default TodoItem;
