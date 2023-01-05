import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const state = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  state,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
