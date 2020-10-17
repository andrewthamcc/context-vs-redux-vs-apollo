import gql from "graphql-tag";

const GET_TODOS = gql`
  query getTodos {
    todos @client {
      id
      todo
      complete
    }
  }
`;

const mutation = {
  addTodo: (_, args, { cache }) => {
    const data = cache.readQuery({ query: GET_TODOS });

    const newTodo = {
      id: data.todos.length,
      __typename: "todoItem",
      todo: args.todo,
      complete: false,
    };

    cache.writeData({ data: { todos: [...data.todos, newTodo] } });
  },
  updateTodo: (_, args, { cache }) => {
    const data = cache.readQuery({ query: GET_TODOS });

    const newTodos = data.todos.map((todo) => {
      if (todo.id === args.id) {
        todo.complete = !todo.complete;
      }

      return todo;
    });

    cache.writeData({ data: { todos: newTodos } });
  },
  deleteTodo: (_, args, { cache }) => {
    const data = cache.readQuery({ query: GET_TODOS });

    const newTodos = data.todos.filter((todo) => todo.id !== args.id);

    cache.writeData({ data: { todos: newTodos } });
  },
};

export default mutation;
