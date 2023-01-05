import { ADD_TODO, REMOVE_TODO } from "./types";

// export const addTodo = (payload) => (dispatch, getState) => {
//   dispatch({
//     type: ADD_TODO,
//     payload,
//   });
// };

export const addTodo = (payload) => ({
  type: ADD_TODO,
  payload,
});

export const removeTodo = (payload) => ({
  type: REMOVE_TODO,
  payload,
});
