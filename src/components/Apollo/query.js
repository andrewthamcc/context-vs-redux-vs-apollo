import { gql } from "@apollo/client";

export const GET_TODOS = gql`
  query getTodos {
    todos @client {
      id
      todo
      complete
    }
  }
`;

export const useAddTodo = (todosVar) => {
  return (text) => {
    const allTodos = todosVar();

    const newTodo = {
      id: allTodos.length,
      todo: text,
      complete: false,
    };

    todosVar([...allTodos, newTodo]);
  };
};

export const useUpdateTodo = (todosVar) => {
  return (id) => {
    const allTodos = todosVar();

    const updatedTodos = allTodos.map((todo) => {
      if (todo.id === id) {
        // gotcha where object entiries can't be changed in place put a fully new copy should be returned 
        todo = {
          ...todo,
          complete: !todo.complete
        }
      }

      return todo;
    });


    todosVar(updatedTodos);
  };
};

export const useDeleteTodo = (todosVar) => {
  return (id) => {
    const allTodos = todosVar();

    const updatedTodos = allTodos.filter((todo) => todo.id !== id);

    todosVar(updatedTodos);
  };
};
