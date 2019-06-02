import initialState from "./initialState";
import { SET_NOTIFICATIONS } from "./actions.js";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NOTIFICATIONS:
      return { ...state, notifications: action.value };
    default:
      return state;
  }
};

export default reducer;
