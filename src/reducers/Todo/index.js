class TodoState {
 todos = []
}

const initialState = new TodoState();

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default uiReducer;