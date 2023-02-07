const mainReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO_TO:LIST":
      console.log(state);
      return {
        ...state,
        todoList: [...state, todoList, action.payload],
      };

    case "REMOVE_TODO_FROM_LIST":
      console.log(action.payload);
      return {
        ...state,
        todoList: state.todoList.filter((todo) => todo.name !== action.payload),
      };
    default:
      return state;
  }
};

export default mainReducer;
