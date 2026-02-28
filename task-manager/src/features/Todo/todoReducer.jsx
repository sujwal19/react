export const initialState = [];

export function todoReducer(state, action) {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, action.payload];

    case "UPDATE_TASK":
      return state.map((t) =>
        t.id === action.payload.id ? { ...t, ...action.payload } : t,
      );

    case "TOGGLE_COMPLETE":
      return state.map((t) =>
        t.id === action.payload ? { ...t, completed: !t.completed } : t,
      );

    case "DELETE_TASK":
      return state.filter((t) => t.id !== action.payload);

    case "CLEAR_COMPLETED":
      return state.filter((t) => !t.completed);

    case "SET_TASKS":
      return action.payload;

    default:
      return state;
  }
}
