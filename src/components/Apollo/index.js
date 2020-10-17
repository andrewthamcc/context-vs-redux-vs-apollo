import React from 'react'
import {useQuery} from "@apollo/react-hooks"
import {GET_TODOS} from "./query"

const Apollo = () => {
  const {data, loading} = useQuery(GET_TODOS)

  console.log(data)

  return (
    <div>
      Apollo
    </div>
  )
}

export default Apollo;
