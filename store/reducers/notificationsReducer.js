import { NOTIFICATIONS_PUSH } from "store/actionTypes";

const initialState = {
  payload: [],
};

const notifications = (state = initialState, action = {}) => {
  switch (action.type) {
    case NOTIFICATIONS_PUSH:
      return {
        ...state,
        payload: [...state.payload, action.payload],
      };
    default:
      return state;
  }
};

export default notifications;
