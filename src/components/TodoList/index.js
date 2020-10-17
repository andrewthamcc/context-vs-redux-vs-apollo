import React from 'react'
import List from "@material-ui/core/List"

// components
import TodoItem from "../TodoItem"

const TodoList = (props) => {
  const {todos} = props;

  return (
    <List>
      {todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
    </List>
  )
}

export default TodoList
