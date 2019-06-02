import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import reducer from "./reducer.js";
import { composeWithDevTools } from "redux-devtools-extension";

const configureStore = (preloadedState = {}) =>
  createStore(
    reducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(thunk))
  );

export default configureStore;
