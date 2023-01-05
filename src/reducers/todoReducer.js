import { ADD_TODO, REMOVE_TODO } from "../actions/types";

const initialState = {
  loading: false,
  err: false,
  todoArray: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return {
        ...state,
        todoArray: state.todoArray ? [...state.todoArray, payload] : [payload],
      };
    case REMOVE_TODO:
      return {
        ...state,
        todoArray: state.todoArray.filter((item) => item.id !== payload),
      };

    default:
      return state;
  }
};
