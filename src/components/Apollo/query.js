import gql from "graphql-tag"

export const GET_TODOS = gql`
  query getTodos {
    todos @client {
      id
      todo
      completed
    }
  }
`