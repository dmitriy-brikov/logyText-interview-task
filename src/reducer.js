const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      if (!action.payload) {
        return state;
      }
      if (state.todos.includes(action.payload)) {
        return state;
      }
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case "COMPLITED": 
      return {
        ...state,
        todos: state.todos.filter(t => t !== action.payload),
        complited: [action.payload, ...state.complited]
      };
    case "DELETE":
      return {
        ...state,
        todos: state.todos.filter(t => t !== action.payload),
        complited: state.complited.filter(t => t !== action.payload),
        deleted: [action.payload, ...state.deleted]
      };
    case "RESTORE": 
      return {
        ...state,
        deleted: state.deleted.filter(t => t !== action.payload),
        complited: state.complited.filter(t => t !== action.payload),
        todos: [action.payload, ...state.todos]
      };
    case "THEME":
      return {
        ...state,
        myTheme: action.payload
      };
    default:
      return state;
  }
};
export default reducer;
