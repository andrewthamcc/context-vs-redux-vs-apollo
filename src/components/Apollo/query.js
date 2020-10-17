import gql from "graphql-tag";

export const GET_TODOS = gql`
  query getTodos {
    todos @client {
      id
      todo
      complete
    }
  }
`;

export const ADD_TODO = gql`
  mutation addTodo($todo: String!) {
    addTodo(todo: $todo) @client
  }
`;

export const UPDATE_TODO = gql`
  mutation updateTodo($id: ID!) {
    updateTodo(id: $id) @client
  }
`;

export const DELETE_TODO = gql`
  mutation deleteTodo($id: ID!) {
    deleteTodo(id: $id) @client
  }
`;
