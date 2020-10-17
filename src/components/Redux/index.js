import React from 'react'
import {useSelector} from "react-redux"

const Redux = () => {
  const todos = useSelector((state) => state.todoState.todos)

  return (
    <div>
      
    </div>
  )
}

export default Redux;
