import { REQUEST_USERS, SUCCESS_USERS, ERROR_USERS } from "../actions/types";

const initialState = {
  loading: false,
  error: null,
  users: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case REQUEST_USERS:
      return { ...state, loading: true };

    case SUCCESS_USERS:
      return { ...state, users: payload, loading: false };

    case ERROR_USERS:
      return { ...state, error: payload };

    default:
      return state;
  }
};
