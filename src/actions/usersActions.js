import { REQUEST_USERS, SUCCESS_USERS, ERROR_USERS } from "./types";

export const fetchUsers = () => async (dispatch) => {
  dispatch({ type: REQUEST_USERS });
  try {
    const userResponse = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );
    const userData = await userResponse.json();
    dispatch({ type: SUCCESS_USERS, payload: userData });
  } catch (error) {
    dispatch({ type: ERROR_USERS, payload: error });
  }
};
