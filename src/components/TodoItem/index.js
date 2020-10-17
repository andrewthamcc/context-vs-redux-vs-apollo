import React from 'react'
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DeleteIcon from "@material-ui/icons/Delete";

const TodoItem = (props) => {
  const { todo, handleUpdate, handleDelete } = props;

  const listItemTextStyle = {
    textDecoration: todo.complete ? "strikethrough" :  "none"
  }

  return (
    <ListItem button onClick={() => handleUpdate()}>
      <ListItemText primary={todo.todo} style={listItemTextStyle}/>
      <ListItemIcon onClick={() => handleDelete()}>
        <DeleteIcon />
      </ListItemIcon>
    </ListItem>
  );
}

export default TodoItem;
