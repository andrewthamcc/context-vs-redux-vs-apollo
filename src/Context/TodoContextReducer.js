export const ADD_TODO = "ADD_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const DELETE_TODO = "DELETE_TODO";

export default (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = {
        id: state.todos.length,
        todo: action.payload,
        complete: false,
      };

      return {
        ...state,
        todos: [...state.todos, newTodo],
      };
    case UPDATE_TODO:
      const updatedTodos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          todo.complete = !todo.complete;
        }

        return todo;
      });

      return {
        ...state,
        todos: updatedTodos,
      };
    case DELETE_TODO:
      const filteredTodos = state.todos.filter(
        (todo) => todo.id !== action.payload
      );
      return {
        ...state,
        todos: filteredTodos,
      };
    default:
      return state;
  }
};
