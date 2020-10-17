import React from "react";

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

export default TodoList;
